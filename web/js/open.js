// noinspection JSUnresolvedFunction
$(document).ready(function () {
    loading_end();
    $("#div_entities_top").hide();
    $("#div_triples_top").hide();
    $("#div_sample").hide();
    $("#div_output").hide();

//    $("#btn_submit").click(function (event) {
//        sample_load("1");
//
//    });

    $("#btn_submit").click(function (event) {
        console.log("click");
        event.preventDefault();

        var text = $("#txta_input").val();

        console.log(text);
        loading();
        resetting();
        if (text.length > 0) {
            console.log('post');
            $.ajax({
                type: "POST",
                url: config.preprocessURL,
                data: JSON.stringify({"text": text}),
                contentType: "application/json",
                dataType: "json",
                beforeSend: function () {
                    loading();
                },
                success: function (data) {
                    console.log('success');
                    var el_data = data['EL'];
                    var pl_data = data['PL'];
                    event.preventDefault();
                    var text = $("#txta_input").val();
                    loading();
                    // console.log(el_data);
                    result_view(el_data,pl_data);
                    result_text(el_data,text);
                    loading_end();
                },
                failure: function (err_msg) {
                    console.log(err_msg);
                    $('#text_result').html('Request error.');
                    loading_end();
                },
                complete:  function () {
                    loading_end();
                }
            });
        }
    });
    $("#btn_back").click(function (event) {
        setting();
    });
});

function resetting() {
    clear_ALL();
    $("#output_head").show();
    $("#txta_input").prop('readonly',true);
    $("#btn_submit").hide();
    $("#btn_back").show();
    $("#div_output").show();
    $("#div_output").css('visibility' , 'visible');
    $("#div_listoutput").show();
    $("#div_textoutput").show();

}
function setting() {
    clear_ALL();
    $("#output_head").hide();
    $("#txta_input").prop('readonly',false);
    $("#btn_submit").show();
    $("#btn_back").hide();
    $("#div_output").hide();
    $("#div_listoutput").hide();
    $("#div_textoutput").hide();

}
function sample_load(num) {
    if (num.indexOf(1) !== -1){
        resetting();
    }else {
        setting();
        return 0;
    }

   var el_data = output_list[num - 1]['EL'];
    var pl_data = output_list[num - 1]['PL'];
    console.log("sample click");
    event.preventDefault();
    var text = $("#txta_input").val();
    loading();
    result_view(el_data,pl_data);
    result_text(el_data,text);
    loading_end();
}
function show_display(obj) {
    obj = obj.nextSibling;
    if (obj.style.display === 'none') obj.style.display = 'block';
    else if (obj.style.display === 'block') obj.style.display = 'none';
}
function result_text(json_data, input_text) {
    //    JSON Parsing
    // console.log(json_data);
    var page_str = "";
    var ori = input_text;
    var sentences = json_data.sentence;
    for (var i = 0; i < sentences.length; i++) {
        var sen_text = sentences[i].text;
        sen_text = sen_text.trim();
        var ELU = sentences[i].ELU;
        var entities = ELU.merge;
        var offset = 0;
        var s_off = 0;
        var e_off = 0;
        for (var j = 0; j < entities.length; j++) {
            var entity = entities[j];
            s_off = entity.start_offset;
            e_off = entity.end_offset;
            var entity_type = entity.type;
            var entity_source = entity.source;
            var sub = sen_text.substring(offset, s_off);
            var text = sen_text.substring(s_off, e_off);
            var en_entity = entity.en_entity;
            var tooltip = "";

            if (entity.uri.length === 0){
                tooltip = 'String: ' + entity.text;
            }else{
                tooltip = 'String: ' + entity.text + '<br>' + 'Kor_Entity: ' + entity.uri.replace('http://ko.dbpedia.org/resource/','') + '<br>' + 'Eng_Entity: ' + en_entity;
            }
            // console.log(tooltip);
            page_str += (sub);
            // console.log(sub);
            // console.log(text);
            if (entity_source === 'NER') {
                var entity_max = type_max_NER(entity_type);
                var color = type_color_NER(entity_max);
                // console.log(color);
                tooltip = 'Type: ' + entity_max + '<br>'+ tooltip;
                // language=HTML
                page_str += ('<a style="font-weight: bold; text-decoration: underline; color: ' + color + ';\" class="has-tooltip NER" onclick="window.open(\'' + entity.uri + '\')" >' );
                page_str += (text);

                page_str += ('<span class="tooltip-wrapper"><span class="tooltipsss" style="font-size: 16pt;">' + tooltip + '</span></span>' + '</a>');
            } else if (entity_source === 'ELU') {
                var entity_max = type_max(entity_type);
                // console.log(entity_max);
                var color = type_color(entity_max);
                tooltip = 'Type: ' + entity_max + '<br>'+ tooltip;
                // console.log(color);
                // language=HTML
                page_str += ('<a style="font-weight: bold; text-decoration: underline; color: ' + color + ';\" class="has-tooltip ELU" onclick="window.open(\'' + entity.uri + '\')" >' );
                page_str += (text);
                page_str += ('<span class="tooltip-wrapper"><span class="tooltipsss" style="font-size: 16pt;">' + tooltip + '</span></span>' + '</a>');
            } else if (entity_source === 'DE') {
                var entity_max = type_max_NER2(entity_type);
                // language=HTML
                tooltip = 'Type: ' + entity_max + '<br>'+ tooltip;
                page_str += ('<a style="color: black; font-weight: bold; text-decoration: underline;" class="has-tooltip DE"' + '>');
                page_str += (text);
                page_str += ('<span class="tooltip-wrapper"><span class="tooltipsss" style="font-size: 16pt;">' + tooltip + '</span></span>' + '</a>');
            } else if (entity_source === 'Direct') {
                // language=HTML
                page_str += ('<a style="color: #0f0f0f; font-weight: bold; text-decoration: underline;" class="has-tooltip Direct"' + '>');
                page_str += (text);
                page_str += ('<span class="tooltip-wrapper"><span class="tooltipsss" style="font-size: 16pt;">' + tooltip + '</span></span>' + '</a>');
            } else {
                console.log("entity_source ???");
            }
            offset = e_off;
        }
        page_str += (sen_text.substring(offset, sen_text.length));
        ori = ori.replace(sen_text,page_str);
        ori = ori.replace('\n','<br/>');
        // console.log(ori);
        // console.log(sen_text);
        // console.log(page_str);
        page_str="";
    }
    $('#div_textoutput').html(ori);
}

function result_view(el_data, pl_data) {
    var entity_list = [];
    // console.log(el_data);
    var sentences = el_data.sentence;
    for (var i = 0; i < sentences.length; i++) {
        var ELU = sentences[i].ELU;
        var entities = ELU.merge;
        for (var j = 0; j < entities.length; j++) {
            var entity = entities[j];
            var temp_list = [];
            if(entity.source === 'DE'){
                temp_list.push(type_max_NER2(entity.type));
            }
            else{
                temp_list.push(type_max(entity.type));
            }
            temp_list.push(entity.source);
            temp_list.push(entity.text);
            temp_list.push(URI_remove(entity.uri)[1]);
            temp_list.push(entity.en_entity);
            entity_list.push(temp_list);
        }
    }
    var sorted_entity = entity_list.slice().sort();
    // console.log(sorted_entity);
    var entity_out_list = [];
    for (var i = 0; i<sorted_entity.length;  i++){
        for (var j = 0; j<ontology.length; j++){
            // console.log(ontology[j][0]);
            // console.log(sorted_entity[i]);
            if (ontology[j][0].indexOf(sorted_entity[i][0]) !== -1 ){
                var color = ontology[j][2];
                var type = ontology[j][3];
                var text = sorted_entity[i][2];
                var entity = sorted_entity[i][3];
                var en_entity = sorted_entity[i][4];
                // console.log(type);
                // console.log(text);
                entity_out_list.push([type.replace('<br/>', '').replace('<br/>', ''), text, entity+'/'+en_entity, color]);
            }
        }
    }
    entity_out_list.sort();
    // console.log(entity_out_list);

    // console.log(pl_data);
    var pl_list = pl_data.triples;
    var pl = [];
    for (var i = 0; i < pl_list.length; i++){
        var item = [];
        var item_inv = [];
        var s = pl_list[i].s;
        var p = pl_list[i].p;
        var o = pl_list[i].o;
        if (s.indexOf('http://mrlab.kaist.ac.kr') !== -1){
            var spt = s.split('/');
            s =
                // 'mrr:'+
                spt[spt.length-1];
        }else {
            var spt = s.split('/');
            // s = spt[0];
        }
        if (o.indexOf('http://mrlab.kaist.ac.kr') !== -1){
            var spt = o.split('/');
            o =
                // 'mrr:'+
                spt[spt.length-1];
        }else {
            var spt = o.split('/');
            // o = spt[0];

        }
        p = '<b>'+p+'</b>';
        item.push(s);
        item.push(' ' + p + ' ');
        item.push(o);
        pl.push(item);
        item_inv.push(o);
        item_inv.push('is '+ p + ' of ');
        item_inv.push(s);
        pl.push(item_inv);
    }
    pl.sort();
    // console.log(pl);

    var all_out = "";
    var out_list = [];
    for (var i = 0; i < entity_out_list.length; i++) {
        for (var j = 0; j < pl.length; j++){
            if (entity_out_list[i][2].indexOf(pl[j][0]) !== -1){
                // el-pl join/merge
                var result = [entity_out_list[i][0], entity_out_list[i][1], entity_out_list[i][2], entity_out_list[i][3], pl[j][1], pl[j][2]];
                out_list.push(result);
            }
        }
    }
    out_list.sort();
    // console.log(out_list);
    function type_finder(entity_name) {
        for (var i =0; i<entity_out_list.length; i++){
            if(entity_name.indexOf(entity_out_list[i][2]) !== -1){
                var color = entity_out_list[i][3];
                // console.log(entity_out_list[i][2]);
                // console.log(color);
                return color;
            }
        }
    }
    // type, 0
    // String, 1
    // Entity, 2
    // color(sbj), 3
    // prop, 4
    // obj, 5
    all_out += '<h2 onclick="show_display(this)">Triples</h2>' + '<div style="display: block;"><ul type="disc">';
    for (var i = 0; i < out_list.length; i++) {
        var color_css = 'style=\"color: ' + 'in_ent_col' + ';\"';
        var span_s_css = '<span ' + color_css + '>';
        var span_e_css = '</span>';
        var type_head = '<li ' + '' + ' onclick="show_display(this)" >'
            + span_s_css.replace('in_ent_col', type_finder(out_list[i][2])) + out_list[i][0] + span_e_css + '</li>';
        var entity_head = '<li ' + '' + 'onclick="show_display(this)" >'
            + span_s_css.replace('in_ent_col', type_finder(out_list[i][2])) + out_list[i][2] + span_e_css + '</li>';
        var triple_head = '<li ' + '' + '>' + out_list[i][4] + ' '
            + span_s_css.replace('in_ent_col', type_finder(out_list[i][5])) + out_list[i][5] + span_e_css + '</li>';

        if (all_out.indexOf(type_head) !== -1) {
            if (all_out.indexOf(entity_head) !== -1) {
                if (all_out.indexOf(triple_head) !== -1) {
                    continue;
                }
                all_out += triple_head;
            } else {
                if (i !== 0) {
                    all_out += '</ul></div>';
                }
                all_out += entity_head;
                all_out += '<div style="display: block;"><ul type="circle">' + triple_head;
            }
        } else {
            if (i !== 0) {
                all_out += '</ul></div></ul></div>';
            }
            all_out += type_head;
            all_out += '<div style="display: block;"><ul type="square">' + entity_head;
            all_out += '<div style="display: block;"><ul type="circle">' + triple_head;
        }
    }
    all_out += '</ul></div>';

    $('#div_listoutput').html(all_out);
}

function loading(){
    var width;
    var height;
    var left;
    var top;

    width = 1;
    height = 1;

    top = ( $(window).height() - height ) / 2 + $(window).scrollTop();
    left = ( $(window).width() - width ) / 2 + $(window).scrollLeft();

    if ($("#div_ajax_load_image").length !== 0) {
        $("#div_ajax_load_image").css({
            "top": top + "px",
            "left": left + "px"
        });
        $('#div_ajax_load_image').html('<div id="div_ajax_load_image" style="position:absolute; top:' + top + 'px; left:' + left + 'px; width:' + width + 'px; height:' + height + 'px; z-index:9999; background:#ffffff; filter:alpha(opacity=50); opacity:alpha*0.5; margin:auto; padding:0; "><img src="./ajax_loader.gif" style="width:100px; height:100px;"></div>');
        $("#div_ajax_load_image").show();
    }
    else {
        // $('body').append('<div id="div_ajax_load_image" style="position:absolute; top:' + top + 'px; left:' + left + 'px; width:' + width + 'px; height:' + height + 'px; z-index:9999; background:#ffffff; filter:alpha(opacity=50); opacity:alpha*0.5; margin:auto; padding:0; "><img src="./ajax_loader.gif" style="width:100px; height:100px;"></div>');
        $('#div_ajax_load_image').html('<div id="div_ajax_load_image" style="position:absolute; top:' + top + 'px; left:' + left + 'px; width:' + width + 'px; height:' + height + 'px; z-index:9999; background:#ffffff; filter:alpha(opacity=50); opacity:alpha*0.5; margin:auto; padding:0; "><img src="./ajax_loader.gif" style="width:100px; height:100px;"></div>');
    }
}

function loading_end(){
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
    if ((entity.indexOf('http://mrlab.kaist.ac.kr/resource/')) !== -1) {
        // console.log(entity);
        var temp = entity.replace('http://mrlab.kaist.ac.kr/resource/', '');
        var result_entity = temp.split('/')[0];
        // console.log(result_entity);
        var result = '<td scope="row">' + 'mrr: ' + result_entity + '</a></td>';
    }
    else {
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
var ontology = [['Other', 0, '#888888', 'Other'],
    ['Activity', 1, '#F08080', 'Activity'],

    ['Agent', 1, '#00FF00', 'Agent'],
    ['FictionalCharacter', 2, '#20B2AA', 'Agent.<br/>FictionalCharacter'],
    ['Organisation', 2, '#228B22', 'Agent.<br/>Organisation'],
    ['Broadcaster', 3, '#228B22', 'Agent.<br/>Organisation.<br/>Broadcaster'],
    ['Company', 3, '#228B22', 'Agent.<br/>Organisation.<br/>Company'],
    ['EducationalInstitution', 3, '#228B22', 'Agent.<br/>Organisation.<br/>EducationalInstitution'],
    ['MilitaryUnit', 3, '#228B22', 'Agent.<br/>Organisation.<br/>MilitaryUnit'],
    ['PoliticalParty', 3, '#228B22', 'Agent.<br/>Organisation.<br/>PoliticalParty'],
    ['SportsLeague', 3, '#228B22', 'Agent.<br/>Organisation.<br/>SportsLeague'],
    ['SportsTeam', 3, '#228B22', 'Agent.<br/>Organisation.<br/>SportsTeam'],
    ['Person', 2, '#FF0000', 'Agent.<br/>Person'],
    ['Architect', 3, '#FF0000', 'Agent.<br/>Person.<br/>Architect'],
    ['Artist', 3, '#FF0000', 'Agent.<br/>Person.<br/>Artist'],
    ['Astronaut', 3, '#FF0000', 'Agent.<br/>Person.<br/>Astronaut'],
    ['Athlete', 3, '#FF0000', 'Agent.<br/>Person.<br/>Athlete'],
    ['MilitaryPerson', 3, '#FF0000', 'Agent.<br/>Person.<br/>MilitaryPerson'],
    ['Scientist', 3, '#FF0000', 'Agent.<br/>Person.<br/>Scientist'],

    ['AnatomicalStructure', 1, '#4B0082', 'AnatomicalStructure'],
    ['Artery', 2, '#663399', 'AnatomicalStructure.<br/>Artery'],
    ['Embryology', 2, '#483D8B', 'AnatomicalStructure.<br/>Embryology'],
    ['Lymph', 2, '#800080', 'AnatomicalStructure.<br/>Lymph'],
    ['Nerve', 2, '#8A2BE2', 'AnatomicalStructure.<br/>Nerve'],
    ['Vein', 2, '#BA55D3', 'AnatomicalStructure.<br/>Vein'],

    ['MeanOfTransportation', 1, '#FF4500', 'MeanOfTransportation'],
    ['Automobile', 2, '#FF6347', 'MeanOfTransportation.<br/>Automobile'],
    ['Rocket', 2, '#FF7F50', 'MeanOfTransportation.<br/>Rocket'],
    ['SpaceShuttle', 2, '#FF8C00', 'MeanOfTransportation.<br/>SpaceShuttle'],

    ['Place', 1, '#1B1B72', 'Place'],
    ['ArchitecturalStructure', 2, '#0000CD', 'Place.<br/>ArchitecturalStructure'],
    ['Building', 3, '#0000CD', 'Place.ArchitecturalStructure.<br/>Building'],
    ['PopulatedPlace', 2, '#4169E1', 'Place.<br/>PopulatedPlace'],
    ['Country', 3, '#4169E1', 'Place.<br/>PopulatedPlace.<br/>Country'],
    ['Island', 3, '#4169E1', 'Place.<br/>PopulatedPlace.<br/>Island'],
    ['Settlement', 3, '#4169E1', 'Place.<br/>PopulatedPlace.<br/>Settlement'],
    ['NaturalPlace', 2, '#00BFFF', 'Place.<br/>NaturalPlace'],
    ['BodyOfWater', 3, '#00BFFF', 'Place.<br/>NaturalPlace.<br/>BodyOfWater'],
    ['Mountain', 3, '#00BFFF', 'Place.<br/>NaturalPlace.<br/>Mountain'],

    ['Work', 1, '#800000', 'Work'],
    ['Film', 2, '#A52A2A', 'Work.<br/>Film'],
    ['MusicalWork', 2, '#8B4513', 'Work.<br/>MusicalWork'],
    ['Album', 3, '#8B4513', 'Work.<br/>MusicalWork.<br/>Album'],
    ['Musical', 3, '#8B4513', 'Work.<br/>MusicalWork.<br/>Musical'],
    ['Single', 3, '#8B4513', 'Work.<br/>MusicalWork.<br/>Single'],
    ['Software', 2, '#D2691E', 'Work.<br/>Software.'],
    ['VideoGame', 3, '#D2691E', 'Work.<br/>Software.<br/>VideoGame'],
    ['TelevisionEpisode', 2, '#B8860B', 'Work.<br/>TelevisionEpisode'],
    ['TelevisionShow', 2, '#F4A460', 'Work.<br/>TelevisionShow'],
    ['WrittenWork', 2, '#DAA520', 'Work.<br/>WrittenWork'],

    ['TropicalConcept', 1, '#00FFFF', 'TropicalConcept'],
    ['Genre', 2, '#AFEEEE', 'TropicalConcept.<br/>Genre'],
    ['MusicGenre', 3, '#AFEEEE', 'TropicalConcept.<br/>Genre.<br/>MusicGenre'],
    ['Ideology', 2, '#7FFFD4', 'TropicalConcept.<br/>Ideology'],
    ['Type', 2, '#40E0D0', 'TropicalConcept.<br/>Type'],
    ['GovernmentType', 3, '#40E0D0', 'TropicalConcept.<br/>Type.<br/>GovernmentType'],

    ['Device', 1, '#C71585', 'Device'],
    ['Instrument', 2, '#DB7093', 'Device.<br/>Instrument'],
    ['Engine', 2, '#FF1493', 'Device.<br/>Engine'],
    ['AutomobileEngine', 3, '#FF1493', 'Device.<br/>Engine.<br/>AutomobileEngine'],
    ['Weapon', 2, '#FF69B4', 'Device.<br/>Weapon'],

    ['Event', 1, '#FFD700', 'Event.'],
    ['SocietalEvent', 2, '#FFFF00', 'Event.<br/>SocietalEvent'],
    ['FilmFestival', 3, '#FFFF00', 'Event.SocietalEvent.<br/>FilmFestival'],
    ['MilitaryConflict', 3, '#FFFF00', 'Event.SocietalEvent.<br/>MilitaryConflict'],
    ['SpaceMission', 3, '#FFFF00', 'Event.SocietalEvent.<br/>SpaceMission'],

    ['Award', 1, '#5F9EA0', 'Award'],
    ['Colour', 1, '#4682B4', 'Colour'],
    ['Currency', 1, '#808000', 'Currency'],
    ['EthnicGroup', 1, '#2F4F4F', 'EthnicGroup'],
    ['Language', 1, '#FFAA00', 'Language'],
    ['Species', 1, '#CD5C5C', 'Species'],
    ['PersonFunction', 1, '#8A2BE2', 'PersonFunction'],

    // using info for NER->Ontology
    // 171219 plo >> PLO
    ['Location', 1, '#2C2CA2', 'Location'],
    ['Person', 1, '#CC0000', 'Person'],
    ['Organisation', 1, '#4B784B', 'Organisation']

];

function type_max_NER(input_type) {
    // type ontology making
    var temp_type = input_type.split('_');
    var type = '';
    if (temp_type[0] === 'PS') {
        type = 'Person';
    }
    else if (temp_type[0] === 'OGG' || temp_type[0] === 'OG') {
        type = 'Organisation';
    }
    else if (temp_type[0] === 'LC' || temp_type[0] === 'LCP' || temp_type[0] === 'LCG') {
        type = 'Location';
    }
    else if(temp_type[0] === 'AFW') {
        type = 'WrittenWork';
    }
    else if(temp_type[0] === 'CV') {
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
    }
    else if (temp_type[0] === 'OGG' || temp_type[0] === 'OG') {
        type = 'organisation';
    }
    else if (temp_type[0] === 'LC' || temp_type[0] === 'LCP' || temp_type[0] === 'LCG') {
        type = 'location';
    }
    else if (temp_type[0] === 'DT' || temp_type[0] === 'TI') {
        type = 'time';
    }
    else {
        type = 'MISC';
    }
    return type;
}

function type_max(types) {
    // console.log(types);
    if (types.length === 0) {
        return 'Other'
    }
    else if (types.indexOf("_") !== -1) {
        var temp_type = types.split('_');
        var type = "";
        if (temp_type[0] === 'PS') {
            type = 'Person';
        }
        else if (temp_type[0] === 'OGG' || temp_type[0] === 'OG') {
            type = 'Organisation';
        }
        else if (temp_type[0] === 'LC' || temp_type[0] === 'LCP' || temp_type[0] === 'LCG') {
            type = 'Location';
        }
        else if (temp_type[0] === 'DT' || temp_type[0] === 'TI') {
            type = 'Time';
        }
        else if(temp_type[0] === 'AFW') {
            type = 'WrittenWork';
        }
        else if(temp_type[0] === 'CV') {
            type = 'PersonFunction';
        }
        else {
            type = 'MISC';
        }
        return type;
    }
    else {
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
        }
        else if ('Other' === input_type) {
            return '#008080'
        }
    }
}

