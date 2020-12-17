// noinspection JSUnresolvedFunction
var current_el_data = [];
var current_pl_data = [];
var openWin;
var temp_this;
$(document).ready(function () {
    loading_end();
    $("#div_entities_top").hide();
    $("#div_triples_top").hide();
    $("#div_sample").hide();
    $("#div_output").hide();
    $("#div_graph").hide();

    window.addEventListener('message', receive_child, false);

    var local_test = false;
    let flag_KV = jQuery("#KV").is(":checked");

    $("#btn_submit").click(function (event) {
        if (local_test) {
            sample_load(1);
        } else {
            console.log("click");
            event.preventDefault();

            var text = $("#txta_input").val();

            console.log(text);
            loading();
            resetting();
            if (text.length > 0) {
                console.log('open4 post');
                $.ajax({
                    type: "POST",
                    url: config.preprocessURL,
                    data: JSON.stringify({"text": text,"KV":flag_KV}),
                    contentType: "application/json",
                    dataType: "json",
                    beforeSend: function () {
                        loading();
                    },
                    success: function (data) {
                        console.log('success');
                        var el_data = data['EL'];
                        var pl_data = data['PL'];
                        current_el_data = el_data;
                        current_pl_data = pl_data;
                        event.preventDefault();
                        var text = $("#txta_input").val();
                        loading();
                        // console.log(el_data);
                        result_view(el_data, pl_data);
                        // console.log(pl_data);
                        // result_text(el_data, text);
                        result_textBox(el_data, text);
                        // result_graph(pl_data);
                        result_NLG(pl_data);
                        default_graph();
                        loading_end();
                    },
                    failure: function (err_msg) {
                        console.log(err_msg);
                        alert("server error restart please");
                        // $('#text_result').html('Request error.');
                        loading_end();
                    },
                    complete: function () {
                        loading_end();
                    }
                });
            }
        }
    });
    $("#btn_back").click(function (event) {
        setting();
    });
    $("#btn_graph").click(function (event) {
        graph_ex();
    });
    $("#btn_kbox").click(function (event) {
        upload_kbox();
    });
});

function resetting() {
    clear_ALL();
    $("#output_head").show();
    $("#graph_head").show();
    // $("#ABS_NLG_head").show();
    // $("#EXT_NLG_head").show();
    $("#txta_input").prop('readonly', true);
    $("#input_head").hide();
    $("#txta_input").hide();
    $("#btn_submit").hide();
    $("#btn_back").show();
    $("#btn_modify").show();
    $("#btn_graph").show();
    $("#btn_kbox").show();
    $("#div_output").show();
    $("#div_output").css('visibility', 'visible');
    $("#div_listoutput").show();
    $("#div_textoutput").show();
    $("#div_graph").show();
    // $("#div_ABS_NLG").show();
    // $("#div_EXT_NLG").show();
}

function setting() {
    clear_ALL();
    $("#output_head").hide();
    $("#graph_head").hide();
    // $("#ABS_NLG_head").hide();
    // $("#EXT_NLG_head").hide();
    $("#txta_input").prop('readonly', false);
    $("#input_head").show();
    $("#txta_input").show();
    $("#btn_submit").show();
    $("#btn_back").hide();
    $("#btn_modify").hide();
    $("#btn_graph").hide();
    $("#btn_kbox").hide();
    $("#div_output").hide();
    $("#div_listoutput").hide();
    $("#div_textoutput").hide();
    $("#div_graph").hide();
    // $("#div_ABS_NLG").hide();
    // $("#div_EXT_NLG").hide();

}

function sample_load(num) {
    // if (num.indexOf(1) !== -1) {
    if (num === 1 || num === 2) {
        resetting();
    } else {
        setting();
        return 0;
    }
    var el_data = output_list[num - 1]['EL'];
    var pl_data = output_list[num - 1]['PL'];
    current_el_data = el_data;
    current_pl_data = pl_data;
    console.log("sample click");
    event.preventDefault();
    var text = $("#txta_input").val();
    loading();
    result_view(el_data, pl_data);
    // result_text(el_data, text);
    result_textBox(el_data, text);
    // result_graph(pl_data);
    result_NLG(pl_data);
    default_graph();
    loading_end();
}

function exampleRun() {
    var num = document.getElementById("Ultra").value;
    var txt = ex[num];
    console.log(txt);
    $("#txta_input").val(txt);
}

function show_display(obj) {
    var isRollup = false;
    if (isRollup) {
        list_rollup(obj);
    } else {
        sumz_up(obj);
    }

}

function list_rollup(obj) {
    obj = obj.nextSibling;

    if (obj.style.display === 'none') obj.style.display = 'block';
    else if (obj.style.display === 'block') obj.style.display = 'none';
}

function sumz_up(obj) {
    // console.log(obj.parentElement.parentElement);
    var entity_name = obj.parentElement.parentElement.getElementsByTagName('span')[0].innerText;
    var file_name = 'sumz/' + entity_name + '.html';
    // console.log(file_name);
    window.open(file_name, "a", "width=400, height=300, location=no")
}

function darkEntityList_maker(triple_list) {
    function is_in_ontology(target_type) {
        var ontology_dic = {};
        for (var i = 0; i < ontology.length; i++) {
            ontology_dic[ontology[i][0]] = target_type;
        }
        return ontology_dic[target_type] !== undefined;
    }

    var prefix = 'http://kbox.kaist.ac.kr/resource/'
    var kbo = 'http://dbpedia.org/ontology/'
    // console.log(current_el_data);
    var sentences = current_el_data['sentence'];

    var output_list = [];
    for (var i = 0; i < sentences.length; i++) {
        var ELU = sentences[i]['ELU']['merge'];
        // console.log(ELU);
        for (var j = 0; j < ELU.length; j++) {
            var uri = ELU[j]['uri'];
            if (uri === '') {
                continue;
            }
            var score = ELU[j]['score'];
            var confidence = ELU[j]['confidence'];
            var type = ELU[j]['type'];
            var text = ELU[j]['text'];
            var key = uri.replace(prefix, '');
            var temp_type = [];
            for (var k = 0; k < type.length; k++) {
                if (type[k].indexOf('http:') > -1) {
                    temp_type.push(type[k]);
                } else {
                    if (is_in_ontology(type[k])) {
                        temp_type.push(kbo + type[k]);
                    }
                }
            }
            if (uri.indexOf("NOT_IN_CANDIDATE") > -1 || key[0] === '_') {
                // dark entity list make ("NOT_IN_CANDIDATE" // "_entity" )
                output_list.push({
                    'form': text,
                    'uri': uri,
                    'type': temp_type,
                    'score': score,
                });
            }

        }
    }
    return output_list;
}

function upload_kbox() {
    var chkbox = document.getElementsByName('checkboxs');
    var triple_list = [];
    for (var i = 0; i < chkbox.length; i++) {
        if (chkbox[i].checked) {
            var temp_value = chkbox[i].value;
            // temp_value --- s,p,o
            var temp_list = temp_value.split(',');
            if (temp_list[1] === 'NA') {
                continue;
            }
            var data = {
                "s": temp_list[0],
                "p": temp_list[1],
                "o": temp_list[2]
            };
            triple_list.push(data);
            // console.log(data);
        }
    }
    var DE_list = darkEntityList_maker(triple_list);
    // console.log(triple_list);
    console.log('kbox upload post');
    var input = {
        "triples": triple_list,
        "dark_entity": DE_list,
    };
    $.ajax({
        type: "POST",
        crossOrigin: true,
        crossDomain: true,
        url: config.kboxUpLoadURL,
        data: JSON.stringify(input),
        contentType: "application/json",
        dataType: "json",
        beforeSend: function () {
            console.log(input);
            loading();
        },
        success: function (data) {
            console.log('success');
            console.log(data);
            event.preventDefault();
            loading();
        },
        failure: function (err_msg) {
            console.log(err_msg);
            loading_end();
        },
        complete: function () {
            console.log('end');
            loading_end();
        }
    });
}

function result_NLG(data) {
    var ABS_NLG_data = data['ABS_NLG'];
    var EXT_NLG_data = data['EXT_NLG'];
    // console.log(ABS_NLG_data);
    // console.log(EXT_NLG_data);

    ABS_NLG_data = ABS_NLG_data.replace(/\n/gi, "<br>");
    EXT_NLG_data = EXT_NLG_data.replace(/\n/gi, "<br>");
    $('#div_ABS_NLG').html(ABS_NLG_data);
    $('#div_EXT_NLG').html(EXT_NLG_data);
}

function convert_data(data) {
    var graph_data = data['graph'];
    var links = graph_data['links'];
    var nodes = graph_data['nodes'];
    var node_dic = {};
    var sumz_list = [];
    // console.log(nodes);
    for (var i = 0; i < nodes.length; i++) {
        node_dic[nodes[i]['id']] = nodes[i]['name']
    }
    // console.log(node_dic)
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var isSumz = link['sumz'];
        if (isSumz) {
            temp = {
                "s": node_dic[link['source']],
                "p": link['type'].split(':')[0],
                "o": node_dic[link['target']],
                "sumz": isSumz
            };
            sumz_list.push(temp);
        }
    }
    // console.log(sumz_list);
    return sumz_list
}

function default_graph() {
    var chkbox = document.getElementsByName('checkboxs');
    // console.log(chkbox);
    var sumz = convert_data(current_pl_data);
    // console.log(sumz);
    var sumz_list = [];
    for (var i = 0; i < sumz.length; i++) {
        var temp_s = sumz[i]['s'];
        var temp_p = sumz[i]['p'];
        var temp_o = sumz[i]['o'];
        // console.log(temp_s,temp_p,temp_o);
        sumz_list.push(temp_s + ',' + temp_p + ',' + temp_o);
    }
    // console.log(sumz_list);
    var sumz_set = new Set(sumz_list);
    // console.log(sumz_set);
    for (var i = 0; i < chkbox.length; i++) {
        var temp = chkbox[i].value;
        if (sumz_set.has(temp)) {
            // console.log(temp);
            chkbox[i].checked = true;
        }
    }
    graph_ex();
}

function graph_ex() {
    var chkbox = document.getElementsByName('checkboxs');
    var chk = false;
    var out_triples = [];
    var sumz = convert_data(current_pl_data);
    // console.log(sumz);
    for (var i = 0; i < chkbox.length; i++) {
        if (chkbox[i].checked) {
            chk = true;
            var triple_str = chkbox[i].value;
            var triple = triple_str.split(',');
            var out = {};
            if (triple[1].indexOf('is') !== -1 && triple[1].indexOf('of') !== -1) {
                continue;
            }
            for (var j = 0; j < sumz.length; j++) {
                sumz_item = sumz[j];
                out = {
                    "s": triple[0],
                    "p": triple[1],
                    "o": triple[2],
                    "sumz": false
                };
                if (sumz_item['s'] === triple[0]) {
                    if (sumz_item['p'] === triple[1]) {
                        if (sumz_item['o'] === triple[2]) {
                            out = {
                                "s": triple[0],
                                "p": triple[1],
                                "o": triple[2],
                                "sumz": true
                            };
                            break;
                        }
                    }
                }
            }

            out_triples.push(out)
        } else {
            chk = false;
        }
    }
    // console.log(out_triples);

    setDataAndDraw(out_triples);
}

function setDataAndDraw(triples) {
    var nodes = [];
    var edges = [];
    var node_set = new Set();
    for (var i = 0; i < triples.length; i++) {
        if (node_set.has(triples[i]['s']) == false) {
            c = "#7BE141"
            if (triples[i]['s'][0] == '_') {
                c = "#FFFF00"
            }
            nodes.push({
                id: triples[i]['s'],
                label: triples[i]['s'],
                shape: "box",
                color: c
            })
            node_set.add(triples[i]['s'])
        }
        if (node_set.has(triples[i]['o']) == false) {
            c = "#7BE141"
            if (triples[i]['o'][0] == '_') {
                c = "#FFFF00"
                nodes.push({
                    id: triples[i]['o'],
                    label: triples[i]['o'],
                    shape: "circle",
                    color: c
                })
            } else {
                nodes.push({
                    id: triples[i]['o'],
                    label: triples[i]['o'],
                    shape: "box",
                    color: c
                })
            }

            node_set.add(triples[i]['o'])
        }
        if (triples[i]['sumz'] == true) {
            edges.push({
                from: triples[i]['s'],
                to: triples[i]['o'],
                dashes: [5, 5],
                background: {
                    enabled: true,
                    color: "red",
                    size: 6,
                    dashes: [20, 10]
                },
                label: triples[i]['p'],
                color: {color: "rgb(20,24,200)"},
                arrows: {to: {enabled: true, type: "curve"}}
            })
        } else {
            edges.push({
                from: triples[i]['s'],
                to: triples[i]['o'],
                label: triples[i]['p'],
                color: {color: "rgba(111,111,111,0.5)"},
                arrows: {to: {enabled: true, type: "curve"}}
            })
        }
    }

    draw(nodes, edges)
}

function draw(node, edge) {

    // create a network
    var container = document.getElementById('cy');
    var options = {
        physics: {
            stabilization: false,
            barnesHut: {
                springLength: 200
            }
        },
    };
    var data = {};
    var network = new vis.Network(container, data, options);
    try {
        $('#error').html('');

        // Provide a string with data in DOT language
        //data = vis.parseDOTNetwork($('#data').val());
        //console.log(data)
        var nodes = new vis.DataSet(node);

        // create an array with edges
        var edges = new vis.DataSet(edge);

        data = {
            nodes: nodes,
            edges: edges
        };
        network.setData(data);
    } catch (err) {
        // set the cursor at the position where the error occurred
        var match = /\(char (.*)\)/.exec(err);
        if (match) {
            var pos = Number(match[1]);
            var textarea = $('#data')[0];
            if (textarea.setSelectionRange) {
                textarea.focus();
                textarea.setSelectionRange(pos, pos);
            }
        }

        // show an error message
        $('#error').html(err.toString());
    }
    // console.log(network.getScale());
}

function result_textBox(json_data, input_text) {
    //    JSON Parsing
    // console.log(json_data);
    var page_str = "";
    var ori;
    // ori = input_text;
    ori = json_data.text;
    var sentences = json_data.sentence;
    var br_wrapper = '</div><div class="br_wrapper">' + 'in_other';
    // console.log(sentences);
    for (var i = 0; i < sentences.length; i++) {
        var sen_text = sentences[i].text;
        sen_text = sen_text.trim();
        // if (page_str.indexOf('- ') !== -1) {
        //     page_str += sen_text.replace(/- /g, br_wrapper.replace('in_other', ' '));
        // }
        var ELU = sentences[i].ELU;
        var entities = ELU.merge;
        var offset = 0;
        var s_off = 0;
        var e_off = 0;
        var max_group_id = 0;
        for (var j = 0; j < entities.length; j++) {
            var entity = entities[j];
            s_off = entity.start_offset;
            e_off = entity.end_offset;
            var entity_type = entity.type;
            var entity_source = entity.source;
            var sub = sen_text.substring(offset, s_off);
            var text = sen_text.substring(s_off, e_off);
            var en_entity = entity.en_entity;
            var entity_uri = entity.uri.replace('http://ko.dbpedia.org/resource/', 'http://kbox.kaist.ac.kr/resource/');
            var ko_entity = entity_uri.replace('http://kbox.kaist.ac.kr/resource/', '');
            var group_id = entity.predicted_coref_index;
            var color;
            // console.log(ko_entity);

            color = color_sample[group_id];
            if (group_id === -1) {
                color = randomColor();
                group_id = "";
            } else if (group_id === undefined) {
                color = randomColor();
                group_id = "";
            } else if (max_group_id < group_id) {
                max_group_id = group_id;
            } else {
                console.log(group_id);
            }
            var tooltip = "";
            var tooltipWrapper = '<span class="tooltip-wrapper"><span class="tooltipItem">' + 'in_tooltip_item' + '</span></span>';
            // var item_label = '<div class="item_label" onclick="window.open(\'' + entity_uri + '\')">' + 'in_item_label' + '</div>';
            var item_label = '<tr><td class="item_label" onclick="window.open(\'' + entity_uri + '\')">' + 'in_item_label' + tooltipWrapper + '</td></tr>';
            // var item_type = '<div class="item_type">' + 'in_item_type' + '</div>';
            var item_type = '<tr><td class="item_type">' + 'in_item_type' + '</td></tr>';
            // var item_coID = '<div class="item_coId">' + 'in_item_coId' + '</div>';
            var item_coID = '<td class="item_coID">' + 'in_item_coId' + '</td>';
            // var item_lt = '<div class="item_lt">' + item_label + item_type + '</div>';
            var item_lt = '<table class="item_lt"><tbody>' + item_label + item_type + '</table></tbody>';
            // var item_temp = '<div class="highlight_item has-tooltip" style="background-color: ' + 'in_item_color' + '">' + item_coID + item_lt + tooltipWrapper + '</div>';
            // var item_temp = '<table class="highlight_item has-tooltip" style="background-color: ' + 'in_item_color' + '"><tbody><tr>' + item_coID +'<td>'+ item_lt +'</td>'+ tooltipWrapper + '</tr></tbody></table>';
            var item_temp = '<div class="has-tooltip"><table class="highlight_item"><tbody style="background-color: ' + 'in_item_color' + '"><tr>' + item_coID + '<td>' + item_lt + '</td>' + '</tr></tbody></table></div>';
            var other_wrapper = '<div class="other_wrapper">' + 'in_other' + '</div>';

            if (entity.uri.length === 0) {
                tooltip = 'String: ' + entity.text;
            } else {
                tooltip = 'String: ' + entity.text +
                    '<br>' + 'Kor_Entity: ' + ko_entity +
                    '<br>' + 'Eng_Entity: ' + en_entity;
            }
            // console.log(tooltip);
            if (sub.length > 0) {
                // page_str += '<span>' + (sub) + '</span>';
                page_str += other_wrapper.replace('in_other', sub);
            }

            // page_str += item_temp.replace('in_item_label', sub).replace('in_item_type', ' ').replace('in_tooltip_item', '').replace('in_item_color', '#FFFFFF');

            // console.log(sub);
            // console.log(text);
            // console.log(entity_source);
            // console.log(color);
            if (entity_source === 'NER') {
                var entity_max = type_max_NER(entity_type);
                // color = type_color_NER(entity_max);
                // language=HTML
                tooltip = 'Type: ' + entity_max + '<br>' + tooltip;
                page_str += item_temp.replace('in_item_label', text).replace('in_item_type', entity_max).replace('in_tooltip_item', tooltip).replace('in_item_color', color).replace('in_item_coId', group_id);
            } else if (entity_source === 'ELU') {
                var entity_max = type_max(entity_type);
                // color = type_color(entity_max);
                // language=HTML
                tooltip = 'Type: ' + entity_max + '<br>' + tooltip;
                page_str += item_temp.replace('in_item_label', text).replace('in_item_type', entity_max).replace('in_tooltip_item', tooltip).replace('in_item_color', color).replace('in_item_coId', group_id);
            } else if (entity_source === 'DE') {
                var entity_max = type_max_NER2(entity_type);
                // language=HTML
                tooltip = 'Type: ' + entity_max + '<br>' + tooltip;
                page_str += item_temp.replace('in_item_label', text).replace('in_item_type', entity_max).replace('in_tooltip_item', tooltip).replace('in_item_color', color).replace('in_item_coId', group_id);
            } else if (entity_source === 'Direct') {
                // language=HTML
                page_str += item_temp.replace('in_item_label', text).replace('in_item_type', entity_max).replace('in_tooltip_item', tooltip);
            } else {
                console.log("entity_source ???");
            }
            offset = e_off;
        }

        // page_str += '<span>' + (sen_text.substring(offset, sen_text.length)) + '</span>';
        page_str += other_wrapper.replace('in_other', (sen_text.substring(offset, sen_text.length)));

        if (page_str.indexOf('- ') !== -1) {
            page_str = page_str.replace(/- /g, br_wrapper.replace('in_other', ' '));
        }


        ori = ori.replace(sen_text, page_str);
        ori = ori.replace('\n', '<br/>');
        // console.log(ori);
        // console.log(sen_text);
        // console.log(page_str);
        page_str = "";
    }
    $('#div_textoutput').html(ori);
}

function result_view(el_data, pl_data) {
    var entity_list = [];
    // console.log(el_data);
    // console.log(pl_data);
    var sentences = el_data.sentence;
    for (var i = 0; i < sentences.length; i++) {
        var ELU = sentences[i].ELU;
        var entities = ELU.merge;
        for (var j = 0; j < entities.length; j++) {
            var entity = entities[j];
            var temp_list = [];
            if (entity.source === 'DE') {
                temp_list.push(type_max_NER2(entity.type));
            } else {
                temp_list.push(type_max(entity.type));
            }
            temp_list.push(entity.source);
            temp_list.push(entity.text);
            // temp_list.push(URI_remove(entity.uri));
            // console.log(URI_remove(entity.uri)[1]);
            // console.log(entity.text);
            if ((URI_remove(entity.uri)[1]).indexOf("NOT_IN_CANDIDATE") > -1) {
                temp_list.push(entity.text);
            } else {
                temp_list.push(URI_remove(entity.uri)[1]);
            }
            temp_list.push(entity.en_entity);
            entity_list.push(temp_list);
        }
    }
    var sorted_entity = entity_list.slice().sort();
    // console.log(sorted_entity);
    var el_out = "";
    var entity_out_list = [];
    for (var i = 0; i < sorted_entity.length; i++) {
        for (var j = 0; j < ontology.length; j++) {
            // console.log(ontology[j][0]);
            // console.log(sorted_entity[i]);
            if (ontology[j][0].indexOf(sorted_entity[i][0]) !== -1) {
                if (ontology[j][0].length === sorted_entity[i][0].length) {
                    // console.log(ontology[j][0]);
                    // console.log(sorted_entity[i][0]);
                    var color = ontology[j][2];
                    var type = ontology[j][3];
                    var text = sorted_entity[i][2];
                    var entity = sorted_entity[i][3];
                    var en_entity = sorted_entity[i][4];
                    // console.log(type);
                    // console.log(text);
                    entity_out_list.push([type.replace('<br/>', '').replace('<br/>', ''), text, entity + '/' + en_entity, color]);
                    break;
                }
            }
        }
    }
    entity_out_list.sort();
    // console.log(entity_out_list);
    el_out += '<h2 onclick="show_display(this)">Entities</h2><div style="display: block;">' + '<ul type="disc">';
    for (var i = 0; i < entity_out_list.length; i++) {
        var color_css = 'style=\"color: ' + 'in_ent_col' + ';\"';
        var span_s_css = '<span ' + color_css + '>';
        var span_e_css = '</span>';
        var type_head = '<li ' + '' + ' onclick="show_display(this)" >'
            + span_s_css.replace('in_ent_col', entity_out_list[i][3]) + entity_out_list[i][0] + span_e_css + '</li>';
        var entity_head = '<li ' + '' + 'onclick="show_display(this)" >'
            + span_s_css.replace('in_ent_col', entity_out_list[i][3]) + entity_out_list[i][2] + span_e_css + '</li>';
        var text_head = '<li ' + '' + '>' + '' + ' '
            + span_s_css.replace('in_ent_col', entity_out_list[i][3]) + entity_out_list[i][1] + span_e_css + '</li>';

        if (el_out.indexOf(type_head) !== -1) {
            if (el_out.indexOf(entity_head) !== -1) {
                if (el_out.indexOf(text_head) !== -1) {
                    continue;
                }
                el_out += text_head;
            } else {
                if (i !== 0) {
                    el_out += '</ul></div>';
                }
                el_out += entity_head;
                el_out += '<div style="display: block;"><ul type="circle">' + text_head;
            }
        } else {
            if (i !== 0) {
                el_out += '</ul></div></ul></div>';
            }
            el_out += type_head;
            el_out += '<div style="display: block;"><ul type="square">' + entity_head;
            el_out += '<div style="display: block;"><ul type="circle">' + text_head;
        }
    }
    el_out += '</ul></div>';

    // console.log(pl_data);
    var pl_list = pl_data.triples;
    var pl = [];
    for (var i = 0; i < pl_list.length; i++) {
        var item = [];
        var item_inv = [];
        var s = pl_list[i].s;
        var p = pl_list[i].p;
        var o = pl_list[i].o;
        if (s.indexOf('http://mrlab.kaist.ac.kr') !== -1) {
            var spt = s.split('/');
            s =
                // 'mrr:'+
                spt[spt.length - 1];
        } else {
            var spt = s.split('/');
            // s = spt[0];
        }
        if (o.indexOf('http://mrlab.kaist.ac.kr') !== -1) {
            var spt = o.split('/');
            o =
                // 'mrr:'+
                spt[spt.length - 1];
        } else {
            var spt = o.split('/');
            // o = spt[0];

        }
        p = '<b>' + p + '</b>';
        // p = '<input type="button" id="btn_submit" class="btn btn-primary"  value=\"' + p + '\">';
        item.push(s);
        item.push(' ' + p + ' ');
        item.push(o);
        pl.push(item);
        item_inv.push(o);
        item_inv.push('is ' + p + ' of ');
        item_inv.push(s);
        pl.push(item_inv);
    }
    pl.sort();
    // console.log(pl);

    var all_out = "";
    var out_list = [];
    var out_set = new Set();
    for (var i = 0; i < entity_out_list.length; i++) {
        for (var j = 0; j < pl.length; j++) {
            if (entity_out_list[i][2].indexOf(pl[j][0]) !== -1) {
                // el-pl join/merge
                var s = entity_out_list[i][2].split('/');
                var o = pl[j][2].split('/');
                if (s.length !== 2) {
                    s = [s[0], 'null'];
                    // console.log(s);
                }
                if (o.length !== 2) {
                    o = [o[0], 'null'];
                    // console.log(o);
                }
                var types = entity_out_list[i][0].split('.');

                var css = '<input type="button" class="btn btn-primary"  value=\"' + 'hi' + '\" ' +
                    'style="padding: 1px; border: ' + entity_out_list[i][3] + '; background-color: ' + entity_out_list[i][3] + ';">';

                var type_css = '';
                for (var t = 0; t < types.length; t++) {
                    type_css += css.replace('hi', types[t]) + ' ';
                }
                // console.log(type_css);
                var result = [entity_out_list[i][0], entity_out_list[i][1], s[0], entity_out_list[i][3], pl[j][1], o[0], s[1], o[1], type_css];
                temp_s = result[2];
                temp_p = result[4];
                temp_o = result[5];
                temp_triple = temp_s + temp_p + temp_o;
                if (out_set.has(temp_triple)) {
                    continue;
                }
                out_list.push(result);
                out_set.add(temp_triple);
            }
        }
    }

    out_list.sort();
    // console.log(out_set);
    // console.log(out_list.length);
    // console.log(entity_out_list);
    function type_finder(entity_name) {
        for (var i = 0; i < out_list.length; i++) {
            if (out_list[i][2].indexOf(entity_name) !== -1 && out_list[i][2].length === entity_name.length) {
                var color = out_list[i][3];
                // console.log(out_list[i][2]);
                // console.log(entity_name);
                // console.log(color);
                return color;
            }
        }
    }

    var temp_s = '';
    var temp_p = '';
    var temp_o = '';
    var triple_set = new Set();
    var temp_triple = "";
    // type, 0
    // String, 1
    // Entity, 2
    // color(sbj), 3
    // prop, 4
    // obj, 5
    // eng(S), 6
    // eng(O), 7
    // types btn html, 8
    // console.log(out_list);
    all_out += '<h2 "></h2>' + '<div style="display: block;"><ul type="disc">';
    for (var i = 0; i < out_list.length; i++) {
        temp_s = out_list[i][2];
        temp_p = out_list[i][4];
        temp_o = out_list[i][5];
        if (temp_p.indexOf('is') !== -1 && temp_p.indexOf('of') !== -1) {
            // console.log(temp_p);
            continue;
        }
        var triple = [temp_s, temp_p, temp_o];
        triple[1] = triple[1].replace('<b>', '').replace('</b>', '').trim();
        temp_triple = temp_s + temp_p + temp_o;

        if (triple_set.has(temp_triple)) {
            continue;
        }
        triple_set.add(temp_triple);
        var icon_css = ' <i class="glyphicon glyphicon-star" ' + '_onclick_' + '></i> ';
        var checkbox_css =
            '<input type="checkbox" id="_input_id_" name="checkboxs" value="_input_value_"/>' +
            '<label style="font:normal 18px/1.6 arial" for="_input_id_"></label>';
        checkbox_css = checkbox_css.replace('_input_id_', 'box_' + String(i)).replace('_input_id_', 'box_' + String(i)).replace('_input_value_', triple);
        var style_css = 'style=\"color: ' + 'in_ent_col' + '; font: ' + 'in_font_style ' + ';\"';
        var btn_css = '<input type="button" id="btn_allSelect" class="btn btn-primary"  onclick="all_select(this)" value=\"' + 'Select' + '\">';
        var span_s_css = '<span ' + " _onclick_ " + style_css + '>';
        var span_e_css = '</span>';
        var type_head = '<li ' + '' + ' >'
            + out_list[i][8]
            + '</li>';
        var entity_head = '<li ' + '' + '>'
            + span_s_css.replace('in_ent_col', type_finder(out_list[i][2])) + out_list[i][2] + span_e_css + ' '
            + span_s_css.replace('in_ent_col', type_finder(out_list[i][2])).replace('in_font_style', 'normal 18px/1.6 arial') + '(' + out_list[i][6] + ')' + ' '
            + icon_css.replace('_onclick_', ' onclick="show_display(this)" ')
            + btn_css
            + span_e_css
            + '</li>';
        var triple_head = '<li ' + '' + ' >'
            + span_s_css.replace('_onclick_', ' onclick="new_modify_prop(this)" ').replace('in_font_style', 'italic 21px/1.6 Courier New') + out_list[i][4] + span_e_css + ' '
            + span_s_css.replace('in_ent_col', type_finder(out_list[i][5])) + out_list[i][5] + span_e_css + ' '
            + span_s_css.replace('in_ent_col', type_finder(out_list[i][5])).replace('in_font_style', 'normal 18px/1.6 arial') + '(' + out_list[i][7] + ')' + span_e_css
            + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
            + checkbox_css
            + '</li>';

        // console.log(triple);
        // console.log(temp_triple);
        // console.log(checkbox_css);
        if (all_out.indexOf(type_head) !== -1) {
            if (all_out.indexOf(entity_head) !== -1) {
                if (all_out.indexOf(triple_head) !== -1) {
                    continue;
                }
                all_out += triple_head;
                // all_out += checkbox_css;

            } else {
                if (i !== 0) {
                    all_out += '</ul></div>';
                }
                all_out += entity_head;
                all_out += '<div style="display: block;"><ul type="circle">' + triple_head;
                // all_out += checkbox_css;
            }
        } else {
            if (i !== 0) {
                all_out += '</ul></div></ul></div>';
            }
            all_out += type_head;
            all_out += '<div style="display: block;"><ul type="square">' + entity_head;
            all_out += '<div style="display: block;"><ul type="circle">' + triple_head;
            // all_out += checkbox_css;
        }


    }
    // console.log(triple_set);
    all_out += '</ul></div>';
    // console.log(all_out);
    $('#div_listoutput').html(all_out);

}

function all_select(this_obj) {
    var btn_list = this_obj.parentElement.parentElement.nextSibling.getElementsByTagName('input');
    var isAll = false;
    for (var i = 0; i < btn_list.length; i++) {
        var isChecked = btn_list[i].checked;
        if (isChecked) {
            // console.log();
            isAll = true;
        } else {
            isAll = false;
            break;
        }
    }
    for (var i = 0; i < btn_list.length; i++) {
        if (isAll) {
            btn_list[i].checked = false;
        } else {
            btn_list[i].checked = true;
        }

    }
}

function open_child_window() {
    window.name = "parentForm";
    openWin = window.open("modify_prop_window.html", "childForm", "width=600, height=400, resizable = no, scrollbars = no");
}

function send_child(send_data) {
    if (openWin) {
        openWin.postMessage(send_data, '*');
        // console.log(send_data);
    }
}

function receive_child(e) {
    console.log('child message');
    // console.log(e.data);
    // console.log(temp_this);
    var this_obj = temp_this;
    var prop = this_obj.innerText;
    prop = prop.trim();
    var changed_prop = e.data.ModifyProperty;
    var relation_set = new Set(relation_list);
    if (changed_prop == null) {
        console.log(changed_prop, prop);
        changed_prop = prop;
    } else if (!relation_set.has(changed_prop)) {
        console.log(changed_prop, prop);
        changed_prop = prop;
        alert("올바른 Property 가 아닙니다.");
    } else {
        console.log(changed_prop);
    }
    var changed_prop_html;
    var changed_html;
    var ori_html = $('#div_listoutput').html();
    var ori_prop_html = this_obj.outerHTML;
    var ori_input = this_obj.parentElement.getElementsByTagName('input')[0].outerHTML;
    var changed_input = ori_input.replace(prop, changed_prop);
    changed_prop_html = ori_prop_html.replace(prop, changed_prop);
    changed_html = ori_html.replace(ori_prop_html, changed_prop_html);
    changed_html = changed_html.replace(ori_input, changed_input);
    // console.log(changed_html);
    $('#div_listoutput').html(changed_html);

}

function new_modify_prop(this_obj) {
    // open_child_window();
    var sbj = this_obj.parentElement.parentElement.parentElement.previousSibling.getElementsByTagName('span')[0].innerText;
    var prop = this_obj.innerText;
    var obj = this_obj.nextSibling.nextSibling.innerText;
    prop = prop.trim();
    var triple = '<' + sbj + ', ' + prop + ', ' + obj + '>';
    var question = triple + '\n해당 트리플의 Property 를 수정합니다. ';
    var changed_prop = '';
    var data = {
        'question': question,
        'prop': prop
    };
    temp_this = this_obj;
    send_child(data);
}


function modify_prop(this_obj) {
    // console.log(this_obj.nextSibling.nextSibling);
    var sbj = this_obj.parentElement.parentElement.parentElement.previousSibling.getElementsByTagName('span')[0].innerText;
    var prop = this_obj.innerText;
    var obj = this_obj.nextSibling.nextSibling.innerText;
    prop = prop.trim();
    var triple = sbj + ' ' + prop + ' ' + obj;
    var question = triple + '\n해당 트리플의 Property 를 수정합니다.';
    var changed_prop = '';

    changed_prop = prompt(question, prop);

    var relation_set = new Set(relation_list);
    if (changed_prop == null) {
        console.log(changed_prop, prop);
        changed_prop = prop;
    } else if (!relation_set.has(changed_prop)) {
        console.log(changed_prop, prop);
        changed_prop = prop;
        alert("올바른 Property 가 아닙니다.");
    } else {
        console.log(changed_prop);
    }
    var changed_prop_html;
    var changed_html;
    var ori_html = $('#div_listoutput').html();
    var ori_prop_html = this_obj.outerHTML;
    var ori_input = this_obj.parentElement.getElementsByTagName('input')[0].outerHTML;
    var changed_input = ori_input.replace(prop, changed_prop);
    changed_prop_html = ori_prop_html.replace(prop, changed_prop);
    changed_html = ori_html.replace(ori_prop_html, changed_prop_html);
    changed_html = changed_html.replace(ori_input, changed_input);
    // console.log(changed_html);
    $('#div_listoutput').html(changed_html);
}

function result_graph(pl_data) {
    // console.log(pl_data);
    var graph_items = pl_data['graph'];
    graph_items = eval(graph_items);
    // console.log(graph_items);
    drawGraph(graph_items);
}

function loading() {
    var width;
    var height;
    var left;
    var top;

    width = 1;
    height = 1;

    top = ($(window).height() - height) / 2 + $(window).scrollTop();
    left = ($(window).width() - width) / 2 + $(window).scrollLeft();

    if ($("#div_ajax_load_image").length !== 0) {
        $("#div_ajax_load_image").css({
            "top": top + "px",
            "left": left + "px"
        });
        $('#div_ajax_load_image').html('<div id="div_ajax_load_image" style="position:absolute; top:' + top + 'px; left:' + left + 'px; width:' + width + 'px; height:' + height + 'px; z-index:9999; background:#ffffff; filter:alpha(opacity=50); opacity:alpha*0.5; margin:auto; padding:0; "><img src="./ajax_loader.gif" style="width:100px; height:100px;"></div>');
        $("#div_ajax_load_image").show();
    } else {
        // $('body').append('<div id="div_ajax_load_image" style="position:absolute; top:' + top + 'px; left:' + left + 'px; width:' + width + 'px; height:' + height + 'px; z-index:9999; background:#ffffff; filter:alpha(opacity=50); opacity:alpha*0.5; margin:auto; padding:0; "><img src="./ajax_loader.gif" style="width:100px; height:100px;"></div>');
        $('#div_ajax_load_image').html('<div id="div_ajax_load_image" style="position:absolute; top:' + top + 'px; left:' + left + 'px; width:' + width + 'px; height:' + height + 'px; z-index:9999; background:#ffffff; filter:alpha(opacity=50); opacity:alpha*0.5; margin:auto; padding:0; "><img src="./ajax_loader.gif" style="width:100px; height:100px;"></div>');
    }
}

function loading_end() {
    $("#div_ajax_load_image").hide();
}

var final_entity_list = [];

function entity_type_checker(string) {
    for (var i = 0; i < final_entity_list.length; i++) {
        if (string === final_entity_list[i][3]) {
            var color = type_color(final_entity_list[i][0])
        }
    }
    return color;
}

function URI_remove(entity) {
    // console.log(entity);
    if ((entity.indexOf('http://mrlab.kaist.ac.kr/resource/')) !== -1) {
        // console.log(entity);
        var temp = entity.replace('http://mrlab.kaist.ac.kr/resource/', '');
        var result_entity = temp.split('/')[0];
        // console.log(result_entity);
        var result = '<td scope="row">' + 'mrr: ' + result_entity + '</a></td>';
    } else if ((entity.indexOf('http://kbox.kaist.ac.kr/resource/')) !== -1) {
        var temp = entity.replace('http://kbox.kaist.ac.kr/resource/', '');
        var result_entity = temp.split('/')[0];
        // console.log(result_entity);
        var result = '<td scope="row">' + 'kbr: ' + result_entity + '</a></td>';
    } else {
        var temp = entity.replace('http://ko.dbpedia.org/resource/', '');
        var result_entity = temp.split('/')[0];
        // console.log(result_entity);
        var result = '<td scope="row">' + '<label style="cursor: pointer; color: ' + entity_type_checker(result_entity) + '" onclick="window.open(\'http://ko.dbpedia.org/resource/' + result_entity + '\')">' + 'dbr: ' + result_entity + '</label></td>';
    }
    var result_list = [];
    result_list.push(result);
    result_list.push(result_entity);
    return result_list;
}

// using info for ELU->Ontology
// 171220 type 'thing' add


function type_max_NER(input_type) {
    // type ontology making
    var temp_type = input_type.split('_');
    var type = '';
    if (temp_type[0] === 'PS') {
        type = 'Person';
    } else if (temp_type[0] === 'OGG' || temp_type[0] === 'OG') {
        type = 'Organisation';
    } else if (temp_type[0] === 'LC' || temp_type[0] === 'LCP' || temp_type[0] === 'LCG') {
        type = 'Location';
    } else if (temp_type[0] === 'AFW') {
        type = 'WrittenWork';
    } else if (temp_type[0] === 'CV') {
        type = 'PersonFunction';
    }
    return type;
}

function type_color_NER(type) {
    for (var i = 0; i < ontology.length; i++) {
        if (ontology[i][0] === type) {
            return ontology[i][2];
        }
    }
}

function type_max_NER2(input_type) {
    // dark entity type making
    var temp_type = input_type.split('_');
    var type = '';
    if (temp_type[0] === 'PS') {
        type = 'person';
    } else if (temp_type[0] === 'OGG' || temp_type[0] === 'OG') {
        type = 'organisation';
    } else if (temp_type[0] === 'LC' || temp_type[0] === 'LCP' || temp_type[0] === 'LCG') {
        type = 'location';
    } else if (temp_type[0] === 'DT' || temp_type[0] === 'TI') {
        type = 'time';
    } else {
        type = 'MISC';
    }
    return type;
}

function type_max(types) {
    // console.log(types);
    if (types.length === 0) {
        return 'Other'
    } else if (types.indexOf("_") !== -1) {
        var temp_type = types.split('_');
        var type = "";
        if (temp_type[0] === 'PS') {
            type = 'Person';
        } else if (temp_type[0] === 'OGG' || temp_type[0] === 'OG') {
            type = 'Organisation';
        } else if (temp_type[0] === 'LC' || temp_type[0] === 'LCP' || temp_type[0] === 'LCG') {
            type = 'Location';
        } else if (temp_type[0] === 'DT' || temp_type[0] === 'TI') {
            type = 'Time';
        } else if (temp_type[0] === 'AFW') {
            type = 'WrittenWork';
        } else if (temp_type[0] === 'CV') {
            type = 'PersonFunction';
        } else {
            type = 'MISC';
        }
        return type;
    } else {
        var type_list = types;
        var max = 'Other';
        var depth_temp = 0;
        var type_max;
        var max_num = 0;

        if (type_list !== 'Other') {
            for (var p = 0; p < type_list.length; p++) {
                // console.log(type_list[p]);
                for (var o = 0; o < ontology.length; o++) {
                    if (type_list[p].replace("http://dbpedia.org/ontology/", "") === ontology[o][0] && depth_temp < ontology[o][1]) {
                        max = ontology[o][0];
                        max_num = o;
                        type_list[p] = ontology[o][0];
                        depth_temp = ontology[o][1];
                        //console.log(max);
                    }
                }
            }
            type_max = max;

        }
        return type_max;
    }
}

function type_color(input_type) {
    for (var i = 0; i < ontology.length; i++) {
        if (ontology[i][0] === input_type) {
            return ontology[i][2];
        } else if ('Other' === input_type) {
            return '#008080'
        }
    }
}

