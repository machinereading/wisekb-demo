/**
 * Created by Sung9 on 2017. 7. 8..
 */

function clear_ALL() {
    // $('#div_EL').empty();
    // $('#div_entities').empty();
    $('#div_entities_top').html('<div><h3><b>Entity Linking</b></h3></div>' +
        '<div id="div_entities" style="height: 91%; border: solid lightgray 0.5pt"><table id="tbl_entities" class="table table-bordered" cellspacing="0" style="width: 100%;">\n' +
        '<thead>\n' +
        '<tr>\n' +
        '<th>Type</th>\n' +
        '<th>String</th>\n' +
        '<th>Entity</th>\n' +
        '</tr>\n' +
        '</thead>\n' +
        '</table></div>');
    // $('#div_triples').empty();
    $('#div_triples_top').html('<div><h3><b>Predicate Linking</b></h3></div>' +
        '<div id="div_triples" style="height: 91%; border: solid lightgray 0.5pt;"><table id="tbl_triples" class="table table-bordered" cellspacing="0" style="width: 100%;">\n' +
        '<thead>\n' +
        '<tr>\n' +
        '<th>Subject entity</th>\n' +
        '<th>Object entity</th>\n' +
        '<th>Relation</th>\n' +
        '<th>Score</th>\n' +
        '<th>Module</th>\n' +
        '<th>Sentence</th>\n' +
        '</tr>\n' +
        '</thead>\n' +
        '</table></div>');

    $('#div_output').html('<div class="pre-scrollable" id="div_listoutput" style="font-size:19pt; max-height: 75%; width: 40%; /*border: solid palegreen 0.5pt; */display: inline-block; padding: 5px;">\n' +
        '   <div id="div_ELoutput" style="font-size:19pt; padding: 5px;"></div>' +
        '   <div style="border: solid black 0.5pt;"></div>' +
        '   <div id="div_PLoutput" style="font-size:19pt; padding: 5px;"></div>' +
        '</div>\n' +
        '<div class="pre-scrollable" id="div_textoutput" style="font-size:21pt; max-height: 75%; height: auto; width: 60%; /*border: solid green 0.5pt; */display: inline-block; padding: 25px;">\n' +
        '</div>');
    // $('#div_output').empty();

    // $('#txta_input').empty();
    console.log("content clear");
}

function clear_text() {
    $('#txta_input').empty();
}

$(document).ready(function () {
    $("#btn_samp1").click(function (event) {
        clear_ALL();
        console.log("click1");
        event.preventDefault();
        $("#txta_input").val('어니스트 헤밍웨이는 미국의 소설가이자 저널리스트이다. 1854년 노벨 문학상을 수상하였다. 헤밍웨이는 1899년 7월 21일 일리노이주에서 태어났다. 헤밍웨이는 풀린 파이퍼와 이혼한 뒤 마사 겔혼과 재혼하였다. 1961년 아이다호 주에서 엽총으로 62세의 나이에 자살했다.\n' +
            '\n' +
            '- 1926년 《해는 또다시 떠오른다》 The Sun Also Rises.\n' +
            '- 1929년 《무기여 잘 있거라》 A Farewell to Arms.\n' +
            '- 1940년 《누구를 위하여 종은 울리나》For Whom the Bell Tolls.\n' +
            '- 1950년 《강 건너 숲속으로》 Across the River and Into the Trees.\n' +
            '- 1952년 《노인과 바다》 The Old Man and the Sea.');
        sample_load("1");
    });
});
$(document).ready(function () {
    $("#btn_samp2").click(function (event) {
        clear_ALL();
        console.log("click2");
        event.preventDefault();
        $("#txta_input").val('일본 태생의 소설가 가즈오 이시구로는 1989년 맨부커상과 위니프레드 홀트비 기념상을 수상하였다. 가즈오 이시구로는 켄트 대학교와 이스트앵글리아 대학교에서 석사를 받았다.\n' +
            '\n' +
            '- 1989년 맨 부커상.\n' +
            '- 2017년 노벨 문학상.\n');
        sample_load("2");
    });
});
$(document).ready(function () {
    $("#btn_samp3").click(function (event) {
        clear_ALL();
        console.log("click3");
        event.preventDefault();
        $("#txta_input").val('월트 디즈니 컴퍼니는 미국의 거대한 대중 매체 산업 관련 그룹 집단이며, 가장 큰 할리우드 스튜디오이다. 본사와 주요 제작 시설은 캘리포니아 주 버뱅크의 월트 디즈니 스튜디오에 위치하고 있다. 월트 디즈니와 로이 디즈니가 함께 1923년에 창립했고 꾸준히 애니메이션을 제작하고 있다. 1991년 5월 6일부터 다우 존스 산업평균지수에 포함되었고 마블 엔터테인먼트, 루카스필름, 픽사, 월트 디즈니 픽처스, 터치스톤 픽처스, 할리우드 픽처스, 미라맥스, 디멘션 필름스 등의 영화 제작 및 배급 사업과 디즈니 채널, ABC, ESPN, 디즈니 주니어에서 방송된 프로그램을 제작 및 송출하는 방송 사업, 디즈니랜드를 비롯한 11개의 테마 파크 사업 등을 소유, 운영하고 있다.');
        sample_load("3");
    });
});
$(document).ready(function () {
    $("#btn_samp4").click(function (event) {
        clear_ALL();
        console.log("click4");
        event.preventDefault();
        $("#txta_input").val('블라디미르 푸틴 러시아 대통령이 2018년 러시아 대통령 선거 출마를 선언을 하였다. 한편 2012년 러시아 대통령 선거에서 당선된 푸틴의 임기는 5월 7일까지로 예정되어있다.');
        sample_load("4");
    });
});
$(document).ready(function () {
    $("#btn_samp5").click(function (event) {
        clear_ALL();
        console.log("click5");
        event.preventDefault();
        $("#txta_input").val('인셉션은 크리스토퍼 놀런이 제작을 맡은 \'꿈 도둑\' 주제의 스릴러 영화이다.');
        sample_load("5");
    });
});
$(document).ready(function () {
    $("#btn_samp6").click(function (event) {
        console.log("click6");
        event.preventDefault();
        $("#txta_input").val('토마스 랑게는 전 독일의 조정 선수로 하계 올림픽 개인전 종목의 2개의 금메달과 1개의 동메달을 획득하였다. 아이슬레벤에서 태어난 랑게는 1993년 세계 선수권 3위를 하고 자신의 의학 공부에 집중하려고 1994년조정계를 떠났다. 1997년 랑게는 조정에서 눈에 띄는 경력으로 토마스 켈러 상을 수상하였다. 현재 그는 라체부르크에서 의사로 일하고 있다.');
    });
});
$(document).ready(function () {
    $("#btn_samp7").click(function (event) {
        clear_ALL();
        console.log("click7");
        event.preventDefault();
        $("#txta_input").val('케빈 듀랜트는 지난해 7월 친정팀 오클라호마시티 선더스를 떠나 서부 콘퍼런스 경쟁팀 골든스테이트 워리어스로 이적했다. 13일(한국시각) 미국 캘리포니아주 오클랜드 오라클 아레나에서 열린 2016~2017 미국프로농구 챔피언결정전(7전 4승제) 5차전. 골든스테이트는 클리블랜드 캐벌리어스를 129-120으로 꺾고 시리즈 전적 4승1패로 정상에 올랐다. 스테픈 커리(29)가 자유계약선수(FA) 자격을 얻지만 잔류가 확실하고 듀랜트도 팀을 떠날 가능성은 별로 없어 보여 골든스테이트의 ‘왕조’는 한동안 이어질 것 같다. [한겨래신문]');
    });
});
$(document).ready(function () {
    $("#btn_samp8").click(function (event) {
        clear_ALL();
        console.log("click8");
        event.preventDefault();
        $("#txta_input").val('최연소 노벨상 수상자인 ‘탈레반 피격소녀’ 말랄라 유사프자이가 7일(현지시간) 고등학교를 졸업하고 영국 옥스퍼드대 입학 준비에 들어갔다. 말랄라는 탈레반의 살해 위협을 받는 위험한 환경에서 모든 어린이의 교육권을 옹호하는 활동을 펼친 공로로 2014년에는 노벨평화상을 받았다. 입학 제안을 받은 옥스퍼드대에 진학해 철학과 정치학, 경제학을 공부할 계획이다. [한국일보]');
    });
});
$(document).ready(function () {
    $("#btn_samp9").click(function (event) {
        clear_ALL();
        console.log("click9");
        event.preventDefault();
        $("#txta_input").val('송중기와 송혜교가 오는 10월 31일 결혼한다. 3살 터울의 송중기와 송혜교는 지난해 KBS 2TV에서 방송해 신드롬을 일으켰던 드라마 <태양의 후예>에서 송송커플로 사랑받았다. 송중기와 송혜교는 이 작품으로 같은해 KBS연기대상에서 대상과 베스트커플상을 공동 수상했다.');
    });
});

// $(document).ready(function () {
//     $("#btn_samp10").click(function (event) {
//         clear_ALL();
//         console.log("click10");
//         event.preventDefault();
//         $("#txta_input").html('<e>조기영</e> ( <e>1968년</e> <e>6월_24일</e> ~ )은 <e>전라북도</e> <e>정읍시</e>에서 태어난 <e>대한민국</e>의 <e>시인</e>이다.');
//     });
// });

