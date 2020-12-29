# WiseKB Demo System

## About
Korean Knowledge Extraction System Demo

## Libraries
* `Java 1.8`
* `Maven`
* `Javascript`

## Architecture
<img src="./image/archi.png" alt="archi" style="width:20px;"/>

## Component Modules
* [Entity Linking](https://github.com/machinereading/Entity-Linking)
* [Rule-based RE](https://github.com/machinereading/re-rule)
* [Sentence-level RE: CNN](https://github.com/machinereading/re-cnn)
* [Paragraph-level RE](https://github.com/machinereading/re-b2k)
* [KBox](http://kbox.kaist.ac.kr)

## Format
모든 데이터는 JSON 형태로 제공됩니다.

### 타입 약어
* object(obj), array(arr), string(str), number(num), boolean(bool)

### 1. input
* text: (str) 입력 텍스트
* KV: (bool) Knowledge Validation 기능의 사용 On/Off

#### Example
```
{
  "text": "어니스트 헤밍웨이는 미국의 소설가이자 저널리스트이다.",
  "KV": true
}
```    

### 1. output
 * EL: (obj) 개체 수준 추출 정보
     * sentence: (arr(obj)) 문장들 정보
        * text: (str) 원문 텍스트 한 문장
        * ELU: (obj) 개채 추출 정보
            * entities: (arr(obj)) Entity Linking 결과
                * text: (str) 개체 표면형
                * en_entity: (str) 개체 영어명
                * start_offset: (num) 개체 문장 내 시작 위치
                * end_offset: (num) 개체 문장 내 끝 위치
                * ne_type: (str) ETRI 개체 타입
                * source: (str) 추출 모듈명
                * type:	(arr(str)) 개체 타입 정보
                * uri: (str) 개체 URI 정보
                * predicted_coref_index: (num) 상호 참조 ID
                * score: (num) 개체 추출 점수
                * confidence: (num)	개체 추출 신뢰도
            * d_entities: (arr(obj)) dark entity 결과
                * text: (str) 개체 표면형
                * type: (str) ETRI 개체 타입
                * source: (str) 추출 모듈명
                * start_offset: (num) 개체 문장 내 시작 위치
                * end_offset: (num) 개체 문장 내 끝 위치
                * uri: (str) 개체 URI 정보
                * score: (num) 개체 추출 점수
                * confidence: (num) 개체 추출 신뢰도
                * indirect: (num) -
                * link: (num) 개체 연결
                * relation: (num) -
                * sen_id: (num) 문장 ID
                * ne_id: (num) 개체 ID
            * merge		arr(obj)	데모를 위한 entities + d_entities 병합 정보
    * text: (str) 입력 원본 문장
 * PL: (obj) 관계 수준 추출 정보
    * triples: (arr(obj)) 트리플들
        * s: (str) 트리플 Sbject 개체
        * p: (str) 트리플 관계명
        * o: (str) 트리플 Object 개체
        * src: (str) 추출 모듈명
        * sco: (num) 추출 모듈 점수
        * stc: (str) 추출 대상 문장
    * graph: (obj) 데모 그래프용 정보
        * nodes: (arr(obj)) 데모 그래프 노드 정보
        * name: (str) 데모 그래프 노드 이름
        * label: (str)	데모 그래프 노드 레이블
        * id: (num) 데모 그래프 노드 ID
    * links: (arr(obj)) 데모 그래프 링크 정보
        * rel: (str) 관계명
        * sumz: (bool) 요약 대상 유/무
        * source: (num) 그래프 헤드 노드
        * type: (str) 관계명:추출점수
        * target: (num)	그래프 테일 노드
    * ABS_NLG: (str) (deprecated)
    * EXT_NLG: (str) (deprecated)

#### Example
```
{
    "EL": {
        "sentence": [
            {
                "text": "어니스트 헤밍웨이는 미국의 소설가이자 저널리스트이다.",
                "ELU": {
                    "entities": [
                        {
                            "score": 0.4626169800758362,
                            "confidence": 0.4987819194793701,
                            "en_entity": "Ernest_Hemingway",
                            "end_offset": 9,
                            "predicted_coref_index": -1,
                            "ne_type": "PS_NAME",
                            "text": "어니스트 헤밍웨이",
                            "start_offset": 0,
                            "source": "ELU",
                            "type": [
                                "http://wikidata.dbpedia.org/resource/Q215627",
                                "http://www.wikidata.org/entity/Q215627",
                                "http://dbpedia.org/ontology/Artist",
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                                "http://dbpedia.org/ontology/Agent",
                                "http://www.wikidata.org/entity/Q5",
                                "http://schema.org/Person",
                                "http://wikidata.dbpedia.org/resource/Q5",
                                "http://www.w3.org/2002/07/owl#Thing",
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson",
                                "http://dbpedia.org/ontology/Person",
                                "http://www.wikidata.org/entity/Q24229398",
                                "http://xmlns.com/foaf/0.1/Person",
                                "http://dbpedia.org/ontology/Writer",
                                "http://www.wikidata.org/entity/Q36180"
                            ],
                            "uri": "http://kbox.kaist.ac.kr/resource/어니스트_헤밍웨이"
                        },
                        {
                            "score": 0.4748806059360504,
                            "confidence": 0.46671003103256226,
                            "en_entity": "United_States",
                            "end_offset": 13,
                            "predicted_coref_index": -1,
                            "ne_type": "LCP_COUNTRY",
                            "text": "미국",
                            "start_offset": 11,
                            "source": "ELU",
                            "type": [
                                "http://dbpedia.org/ontology/Place",
                                "http://www.ontologydesignpatterns.org/ont/d0.owl#Location",
                                "http://schema.org/Country",
                                "http://schema.org/Place",
                                "http://dbpedia.org/ontology/Wikidata:Q532",
                                "http://dbpedia.org/ontology/PopulatedPlace",
                                "http://dbpedia.org/ontology/Country"
                            ],
                            "uri": "http://kbox.kaist.ac.kr/resource/미국"
                        },
                        {
                            "score": 0.4756163954734802,
                            "confidence": 0.5063678026199341,
                            "en_entity": "Novelist",
                            "end_offset": 18,
                            "predicted_coref_index": -1,
                            "ne_type": "CV_OCCUPATION",
                            "text": "소설가",
                            "start_offset": 15,
                            "source": "ELU",
                            "type": [
                                "http://dbpedia.org/ontology/Profession",
                                "http://dbpedia.org/ontology/PersonFunction"
                            ],
                            "uri": "http://kbox.kaist.ac.kr/resource/소설가"
                        },
                        {
                            "score": 0.47593772411346436,
                            "confidence": 0.49228110909461975,
                            "en_entity": "Journalist",
                            "end_offset": 26,
                            "predicted_coref_index": -1,
                            "ne_type": "CV_OCCUPATION",
                            "text": "저널리스트",
                            "start_offset": 21,
                            "source": "ELU",
                            "type": [
                                "http://dbpedia.org/ontology/Profession",
                                "http://dbpedia.org/ontology/PersonFunction"
                            ],
                            "uri": "http://kbox.kaist.ac.kr/resource/저널리스트"
                        }
                    ],
                    "d_entities": [],
                    "merge": [
                        {
                            "score": 0.4626169800758362,
                            "confidence": 0.4987819194793701,
                            "en_entity": "Ernest_Hemingway",
                            "end_offset": 9,
                            "predicted_coref_index": -1,
                            "ne_type": "PS_NAME",
                            "text": "어니스트 헤밍웨이",
                            "start_offset": 0,
                            "source": "ELU",
                            "type": [
                                "http://wikidata.dbpedia.org/resource/Q215627",
                                "http://www.wikidata.org/entity/Q215627",
                                "http://dbpedia.org/ontology/Artist",
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                                "http://dbpedia.org/ontology/Agent",
                                "http://www.wikidata.org/entity/Q5",
                                "http://schema.org/Person",
                                "http://wikidata.dbpedia.org/resource/Q5",
                                "http://www.w3.org/2002/07/owl#Thing",
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson",
                                "http://dbpedia.org/ontology/Person",
                                "http://www.wikidata.org/entity/Q24229398",
                                "http://xmlns.com/foaf/0.1/Person",
                                "http://dbpedia.org/ontology/Writer",
                                "http://www.wikidata.org/entity/Q36180"
                            ],
                            "uri": "http://kbox.kaist.ac.kr/resource/어니스트_헤밍웨이"
                        },
                        {
                            "score": 0.4748806059360504,
                            "confidence": 0.46671003103256226,
                            "en_entity": "United_States",
                            "end_offset": 13,
                            "predicted_coref_index": -1,
                            "ne_type": "LCP_COUNTRY",
                            "text": "미국",
                            "start_offset": 11,
                            "source": "ELU",
                            "type": [
                                "http://dbpedia.org/ontology/Place",
                                "http://www.ontologydesignpatterns.org/ont/d0.owl#Location",
                                "http://schema.org/Country",
                                "http://schema.org/Place",
                                "http://dbpedia.org/ontology/Wikidata:Q532",
                                "http://dbpedia.org/ontology/PopulatedPlace",
                                "http://dbpedia.org/ontology/Country"
                            ],
                            "uri": "http://kbox.kaist.ac.kr/resource/미국"
                        },
                        {
                            "score": 0.4756163954734802,
                            "confidence": 0.5063678026199341,
                            "en_entity": "Novelist",
                            "end_offset": 18,
                            "predicted_coref_index": -1,
                            "ne_type": "CV_OCCUPATION",
                            "text": "소설가",
                            "start_offset": 15,
                            "source": "ELU",
                            "type": [
                                "http://dbpedia.org/ontology/Profession",
                                "http://dbpedia.org/ontology/PersonFunction"
                            ],
                            "uri": "http://kbox.kaist.ac.kr/resource/소설가"
                        },
                        {
                            "score": 0.47593772411346436,
                            "confidence": 0.49228110909461975,
                            "en_entity": "Journalist",
                            "end_offset": 26,
                            "predicted_coref_index": -1,
                            "ne_type": "CV_OCCUPATION",
                            "text": "저널리스트",
                            "start_offset": 21,
                            "source": "ELU",
                            "type": [
                                "http://dbpedia.org/ontology/Profession",
                                "http://dbpedia.org/ontology/PersonFunction"
                            ],
                            "uri": "http://kbox.kaist.ac.kr/resource/저널리스트"
                        }
                    ]
                }
            }
        ],
        "text": "어니스트 헤밍웨이는 미국의 소설가이자 저널리스트이다."
    },
    "PL": {
        "triples": [
            {
                "p": "occupation",
                "s": "어니스트_헤밍웨이/Ernest_Hemingway",
                "stc": "<e1>어니스트_헤밍웨이</e1> 는 미국 의 <e2>소설가</e2> 이자 저널리스트 이다.",
                "src": "BERT",
                "sco": 0.99187875,
                "o": "소설가/Novelist"
            },
            {
                "p": "occupation",
                "s": "어니스트_헤밍웨이/Ernest_Hemingway",
                "stc": "<e1>어니스트_헤밍웨이</e1> 는 미국 의 소설가 이자 <e2>저널리스트</e2> 이다.",
                "src": "BERT",
                "sco": 0.98237854,
                "o": "저널리스트/Journalist"
            },
            {
                "p": "nationality",
                "s": "어니스트_헤밍웨이/Ernest_Hemingway",
                "stc": "<e1>어니스트_헤밍웨이</e1> 는 <e2>미국</e2> 의 소설가 이자 저널리스트 이다.",
                "src": "BERT",
                "sco": 0.71771085,
                "o": "미국/United_States"
            }
        ],
        "graph": {
            "nodes": [
                {
                    "name": "어니스트_헤밍웨이",
                    "label": "Ernest_Hemingway",
                    "id": 1
                },
                {
                    "name": "소설가",
                    "label": "Novelist",
                    "id": 2
                },
                {
                    "name": "아이다호_주",
                    "label": "Idaho",
                    "id": 3
                },
                {
                    "name": "무기여_잘_있거라",
                    "label": "A_Farewell_to_Arms",
                    "id": 4
                },
                {
                    "name": "노인과_바다",
                    "label": "The_Old_Man_and_the_Sea",
                    "id": 5
                },
                {
                    "name": "노벨문학상",
                    "label": "",
                    "id": 6
                },
                {
                    "name": "퓰리처상_픽션_부문",
                    "label": "Pulitzer_Prize_for_Fiction",
                    "id": 7
                },
                {
                    "name": "퓰리처상",
                    "label": "Pulitzer_Prize",
                    "id": 8
                },
                {
                    "name": "미국",
                    "label": "United_States",
                    "id": 9
                },
                {
                    "name": "오크파크_(일리노이_주)",
                    "label": "Oak_Park,_Illinois",
                    "id": 10
                },
                {
                    "name": "누구를_위하여_종은_울리나",
                    "label": "For_Whom_the_Bell_Tolls",
                    "id": 11
                },
                {
                    "name": "일리노이주",
                    "label": "",
                    "id": 12
                },
                {
                    "name": "노벨_문학상",
                    "label": "Nobel_Prize_in_Literature",
                    "id": 13
                },
                {
                    "name": "저널리스트",
                    "label": "Journalist",
                    "id": 14
                }
            ],
            "links": [
                {
                    "rel": "1_occupation",
                    "sumz": false,
                    "source": 1,
                    "type": "occupation:0.99",
                    "target": 2
                },
                {
                    "rel": "2_occupation",
                    "sumz": false,
                    "source": 1,
                    "type": "occupation:0.98",
                    "target": 14
                },
                {
                    "rel": "3_occupation",
                    "sumz": false,
                    "source": 2,
                    "type": "occupation:0.98",
                    "target": 14
                },
                {
                    "rel": "4_occupation",
                    "sumz": false,
                    "source": 9,
                    "type": "occupation:0.92",
                    "target": 2
                },
                {
                    "rel": "5_nationality",
                    "sumz": false,
                    "source": 1,
                    "type": "nationality:0.72",
                    "target": 9
                },
                {
                    "rel": "6_occupation",
                    "sumz": false,
                    "source": 9,
                    "type": "occupation:0.27",
                    "target": 14
                }
            ]
        },
        "ABS_NLG": "",
        "EXT_NLG": ""
    }
}
```

## Licenses
* `CC BY-NC-SA` [Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/2.0/)
* If you want to commercialize this resource, [please contact to us](http://mrlab.kaist.ac.kr/contact)

## Publisher
[Machine Reading Lab](http://mrlab.kaist.ac.kr/) @ KAIST

## Acknowledgement
This work was supported by Institute for Information & communications Technology Promotion(IITP) grant funded by the Korea government(MSIT) (2013-0-00109, WiseKB: Big data based self-evolving knowledge base and reasoning platform)

## Citation
Nam, Sangha, et al. "A Korean Knowledge Extraction System for Enriching a KBox." Proceedings of the 27th International Conference on Computational Linguistics: System Demonstrations. 2018.
