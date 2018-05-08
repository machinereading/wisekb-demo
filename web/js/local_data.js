var el_1 = {
    "sentence": [
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 1,
                    "key_begin": 0,
                    "id": 0,
                    "label": "NP_SBJ",
                    "text": "어니스트 헤밍웨이는",
                    "head_phrase": 1,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 3,
                    "key_begin": 2,
                    "id": 1,
                    "label": "S",
                    "text": "P#0@SBJ는 미국의 소설가이자",
                    "head_phrase": 2,
                    "begin": 0,
                    "sub_phrase": [
                        0
                    ],
                    "element": [
                        {
                            "end": 6,
                            "ne_type": "",
                            "text": "미국의 소설가",
                            "label": "NP",
                            "begin": 3
                        },
                        {
                            "end": 8,
                            "ne_type": "",
                            "text": "이자",
                            "label": "VP",
                            "begin": 7
                        }
                    ]
                },
                {
                    "weight": 0,
                    "end": 4,
                    "key_begin": 4,
                    "id": 2,
                    "label": "S",
                    "text": "S#1@S자 저널리스트이다.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [
                        1
                    ],
                    "element": [
                        {
                            "end": 9,
                            "ne_type": "CV_OCCUPATION",
                            "text": "저널리스트",
                            "label": "NP",
                            "begin": 9
                        },
                        {
                            "end": 12,
                            "ne_type": "",
                            "text": "이다.",
                            "label": "VP",
                            "begin": 10
                        }
                    ]
                }
            ],
            "dependency": [
                {
                    "head": 1,
                    "mod": [],
                    "weight": 0.701795,
                    "id": 0,
                    "text": "어니스트",
                    "label": "NP"
                },
                {
                    "head": 3,
                    "mod": [
                        0
                    ],
                    "weight": 0.698229,
                    "id": 1,
                    "text": "헤밍웨이는",
                    "label": "NP_SBJ"
                },
                {
                    "head": 3,
                    "mod": [],
                    "weight": 0.820881,
                    "id": 2,
                    "text": "미국의",
                    "label": "NP_MOD"
                },
                {
                    "head": 4,
                    "mod": [
                        1,
                        2
                    ],
                    "weight": 0.697065,
                    "id": 3,
                    "text": "소설가이자",
                    "label": "VNP"
                },
                {
                    "head": -1,
                    "mod": [
                        3
                    ],
                    "weight": 0.22684,
                    "id": 4,
                    "text": "저널리스트이다.",
                    "label": "VNP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 0,
                    "id": 0,
                    "text": "어니스트",
                    "position": 0,
                    "type": "NNP",
                    "begin": 0
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 1,
                    "id": 1,
                    "text": "헤밍웨이",
                    "position": 13,
                    "type": "NNP",
                    "begin": 1
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 2,
                    "id": 2,
                    "text": "는",
                    "position": 25,
                    "type": "JX",
                    "begin": 2
                },
                {
                    "scode": "03",
                    "weight": 4.4,
                    "end": 3,
                    "id": 3,
                    "text": "미국",
                    "position": 29,
                    "type": "NNP",
                    "begin": 3
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 4,
                    "id": 4,
                    "text": "의",
                    "position": 35,
                    "type": "JKG",
                    "begin": 4
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 6,
                    "id": 5,
                    "text": "소설가",
                    "position": 39,
                    "type": "NNG",
                    "begin": 5
                },
                {
                    "scode": "01",
                    "weight": 1,
                    "end": 7,
                    "id": 6,
                    "text": "이",
                    "position": 48,
                    "type": "VCP",
                    "begin": 7
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 8,
                    "id": 7,
                    "text": "자",
                    "position": 51,
                    "type": "EC",
                    "begin": 8
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 9,
                    "id": 8,
                    "text": "저널리스트",
                    "position": 55,
                    "type": "NNG",
                    "begin": 9
                },
                {
                    "scode": "01",
                    "weight": 1,
                    "end": 10,
                    "id": 9,
                    "text": "이",
                    "position": 70,
                    "type": "VCP",
                    "begin": 10
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 11,
                    "id": 10,
                    "text": "다",
                    "position": 73,
                    "type": "EF",
                    "begin": 11
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 12,
                    "id": 11,
                    "text": ".",
                    "position": 76,
                    "type": "SF",
                    "begin": 12
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "어니스트/NNG",
                    "word_id": 0,
                    "m_end": 0,
                    "id": 0,
                    "target": "어니스트",
                    "m_begin": 0
                },
                {
                    "result": "헤밍웨이/NNG+는/JX",
                    "word_id": 1,
                    "m_end": 2,
                    "id": 1,
                    "target": "헤밍웨이는",
                    "m_begin": 1
                },
                {
                    "result": "미국/NNG+의/JKG",
                    "word_id": 2,
                    "m_end": 4,
                    "id": 2,
                    "target": "미국의",
                    "m_begin": 3
                },
                {
                    "result": "소설가/NNG+이/VCP+자/EC",
                    "word_id": 3,
                    "m_end": 8,
                    "id": 3,
                    "target": "소설가이자",
                    "m_begin": 5
                },
                {
                    "result": "저널리스트/NNG+이/VCP+다/EF+./SF",
                    "word_id": 4,
                    "m_end": 12,
                    "id": 4,
                    "target": "저널리스트이다.",
                    "m_begin": 9
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [
                    {
                        "indirect": 0,
                        "confidence": 0.9908202478286774,
                        "link": 31,
                        "end_offset": 9,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://wikidata.dbpedia.org/resource/Q5",
                            "http://xmlns.com/foaf/0.1/Person",
                            "http://dbpedia.org/ontology/Agent",
                            "http://dbpedia.org/ontology/Artist",
                            "http://dbpedia.org/ontology/Person",
                            "http://dbpedia.org/ontology/Writer",
                            "http://schema.org/Person",
                            "http://wikidata.dbpedia.org/resource/Q215627",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson",
                            "http://www.wikidata.org/entity/Q36180",
                            "http://www.wikidata.org/entity/Q5",
                            "http://www.wikidata.org/entity/Q215627"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/어니스트_헤밍웨이",
                        "relation": 27,
                        "score": 1.8808135922807914,
                        "en_entity": "Ernest_Hemingway",
                        "text": "어니스트헤밍웨이",
                        "start_offset": 0,
                        "id": 325047
                    },
                    {
                        "indirect": 0,
                        "confidence": 1.031011676951652,
                        "link": 11,
                        "end_offset": 13,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/미국",
                        "relation": 3,
                        "score": 4.473720477419829,
                        "en_entity": "United_States",
                        "text": "미국",
                        "start_offset": 11,
                        "id": 325049
                    }
                ],
                "d_entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 18,
                        "text": "소설가",
                        "start_offset": 15,
                        "source": "DE",
                        "type": "CV_OCCUPATION",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 26,
                        "text": "저널리스트",
                        "start_offset": 21,
                        "source": "DE",
                        "type": "CV_OCCUPATION",
                        "uri": "",
                        "relation": 0
                    }
                ],
                "merge": [
                    {
                        "score": 1.8808135922807914,
                        "indirect": 0,
                        "confidence": 0.9908202478286774,
                        "link": 31,
                        "end_offset": 9,
                        "text": "어니스트헤밍웨이",
                        "start_offset": 0,
                        "id": 325047,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://wikidata.dbpedia.org/resource/Q5",
                            "http://xmlns.com/foaf/0.1/Person",
                            "http://dbpedia.org/ontology/Agent",
                            "http://dbpedia.org/ontology/Artist",
                            "http://dbpedia.org/ontology/Person",
                            "http://dbpedia.org/ontology/Writer",
                            "http://schema.org/Person",
                            "http://wikidata.dbpedia.org/resource/Q215627",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson",
                            "http://www.wikidata.org/entity/Q36180",
                            "http://www.wikidata.org/entity/Q5",
                            "http://www.wikidata.org/entity/Q215627"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/어니스트_헤밍웨이",
                        "relation": 27
                    },
                    {
                        "score": 4.473720477419829,
                        "indirect": 0,
                        "confidence": 1.031011676951652,
                        "link": 11,
                        "end_offset": 13,
                        "text": "미국",
                        "start_offset": 11,
                        "id": 325049,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/미국",
                        "relation": 3
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 18,
                        "text": "소설가",
                        "start_offset": 15,
                        "source": "DE",
                        "type": "CV_OCCUPATION",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 26,
                        "text": "저널리스트",
                        "start_offset": 21,
                        "source": "DE",
                        "type": "CV_OCCUPATION",
                        "uri": "",
                        "relation": 0
                    }
                ]
            },
            "morp": [
                {
                    "lemma": "어니스트",
                    "weight": 0.5,
                    "id": 0,
                    "position": 0,
                    "type": "NNP"
                },
                {
                    "lemma": "헤밍웨이",
                    "weight": 0.9,
                    "id": 1,
                    "position": 13,
                    "type": "NNP"
                },
                {
                    "lemma": "는",
                    "weight": 0.0332677,
                    "id": 2,
                    "position": 25,
                    "type": "JX"
                },
                {
                    "lemma": "미국",
                    "weight": 0.0448659,
                    "id": 3,
                    "position": 29,
                    "type": "NNP"
                },
                {
                    "lemma": "의",
                    "weight": 0.0987295,
                    "id": 4,
                    "position": 35,
                    "type": "JKG"
                },
                {
                    "lemma": "소설",
                    "weight": 0.9,
                    "id": 5,
                    "position": 39,
                    "type": "NNG"
                },
                {
                    "lemma": "가",
                    "weight": 0.000115417,
                    "id": 6,
                    "position": 45,
                    "type": "XSN"
                },
                {
                    "lemma": "이",
                    "weight": 0.0165001,
                    "id": 7,
                    "position": 48,
                    "type": "VCP"
                },
                {
                    "lemma": "자",
                    "weight": 0.109096,
                    "id": 8,
                    "position": 51,
                    "type": "EC"
                },
                {
                    "lemma": "저널리스트",
                    "weight": 0.9,
                    "id": 9,
                    "position": 55,
                    "type": "NNG"
                },
                {
                    "lemma": "이",
                    "weight": 0.0177525,
                    "id": 10,
                    "position": 70,
                    "type": "VCP"
                },
                {
                    "lemma": "다",
                    "weight": 0.353579,
                    "id": 11,
                    "position": 73,
                    "type": "EF"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 12,
                    "position": 76,
                    "type": "SF"
                }
            ],
            "NE": [
                {
                    "weight": 0.298913,
                    "end": 1,
                    "id": 0,
                    "text": "어니스트 헤밍웨이",
                    "type": "PS_NAME",
                    "begin": 0,
                    "common_noun": 0
                },
                {
                    "weight": 0.46713,
                    "end": 3,
                    "id": 1,
                    "text": "미국",
                    "type": "LCP_COUNTRY",
                    "begin": 3,
                    "common_noun": 0
                },
                {
                    "weight": 0.645945,
                    "end": 6,
                    "id": 2,
                    "text": "소설가",
                    "type": "CV_OCCUPATION",
                    "begin": 5,
                    "common_noun": 0
                },
                {
                    "weight": 0.420157,
                    "end": 9,
                    "id": 3,
                    "text": "저널리스트",
                    "type": "CV_OCCUPATION",
                    "begin": 9,
                    "common_noun": 0
                }
            ],
            "id": 0,
            "text": "어니스트 헤밍웨이는 미국의 소설가이자 저널리스트이다.",
            "word": [
                {
                    "end": 0,
                    "id": 0,
                    "text": "어니스트",
                    "type": "",
                    "begin": 0
                },
                {
                    "end": 2,
                    "id": 1,
                    "text": "헤밍웨이는",
                    "type": "",
                    "begin": 1
                },
                {
                    "end": 4,
                    "id": 2,
                    "text": "미국의",
                    "type": "",
                    "begin": 3
                },
                {
                    "end": 8,
                    "id": 3,
                    "text": "소설가이자",
                    "type": "",
                    "begin": 5
                },
                {
                    "end": 12,
                    "id": 4,
                    "text": "저널리스트이다.",
                    "type": "",
                    "begin": 9
                }
            ],
            "mod_NE": [
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 9,
                    "text": "어니스트 헤밍웨이",
                    "start_offset": 0,
                    "type": "PS_NAME",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 13,
                    "text": "미국",
                    "start_offset": 11,
                    "type": "LCP_COUNTRY",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 18,
                    "text": "소설가",
                    "start_offset": 15,
                    "type": "CV_OCCUPATION",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 26,
                    "text": "저널리스트",
                    "start_offset": 21,
                    "type": "CV_OCCUPATION",
                    "relation": 0
                }
            ]
        },
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 0,
                    "key_begin": 0,
                    "id": 0,
                    "label": "NP_AJT",
                    "text": "1854년",
                    "head_phrase": 2,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 2,
                    "key_begin": 1,
                    "id": 1,
                    "label": "NP_OBJ",
                    "text": "노벨 문학상을",
                    "head_phrase": 2,
                    "begin": 1,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 3,
                    "key_begin": 3,
                    "id": 2,
                    "label": "VP",
                    "text": "P#0@AJT년 P#1@OBJ을 수상하였다.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [
                        0,
                        1
                    ],
                    "element": []
                }
            ],
            "dependency": [
                {
                    "head": 3,
                    "mod": [],
                    "weight": 0.630243,
                    "id": 0,
                    "text": "1854년",
                    "label": "NP_AJT"
                },
                {
                    "head": 2,
                    "mod": [],
                    "weight": 0.785137,
                    "id": 1,
                    "text": "노벨",
                    "label": "NP"
                },
                {
                    "head": 3,
                    "mod": [
                        1
                    ],
                    "weight": 0.837873,
                    "id": 2,
                    "text": "문학상을",
                    "label": "NP_OBJ"
                },
                {
                    "head": -1,
                    "mod": [
                        0,
                        2
                    ],
                    "weight": 0.359775,
                    "id": 3,
                    "text": "수상하였다.",
                    "label": "VP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 0,
                    "id": 0,
                    "text": "1854",
                    "position": 78,
                    "type": "SN",
                    "begin": 0
                },
                {
                    "scode": "02",
                    "weight": 7.7,
                    "end": 1,
                    "id": 1,
                    "text": "년",
                    "position": 82,
                    "type": "NNB",
                    "begin": 1
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 2,
                    "id": 2,
                    "text": "노벨",
                    "position": 86,
                    "type": "NNP",
                    "begin": 2
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 4,
                    "id": 3,
                    "text": "문학상",
                    "position": 93,
                    "type": "NNG",
                    "begin": 3
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 5,
                    "id": 4,
                    "text": "을",
                    "position": 102,
                    "type": "JKO",
                    "begin": 5
                },
                {
                    "scode": "03",
                    "weight": 6.5,
                    "end": 7,
                    "id": 5,
                    "text": "수상하",
                    "position": 106,
                    "type": "VV",
                    "begin": 6
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 8,
                    "id": 6,
                    "text": "었",
                    "position": 115,
                    "type": "EP",
                    "begin": 8
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 9,
                    "id": 7,
                    "text": "다",
                    "position": 118,
                    "type": "EF",
                    "begin": 9
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 10,
                    "id": 8,
                    "text": ".",
                    "position": 121,
                    "type": "SF",
                    "begin": 10
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "1854/SN+년/NNB",
                    "word_id": 0,
                    "m_end": 1,
                    "id": 0,
                    "target": "1854년",
                    "m_begin": 0
                },
                {
                    "result": "노벨/NNG",
                    "word_id": 1,
                    "m_end": 2,
                    "id": 1,
                    "target": "노벨",
                    "m_begin": 2
                },
                {
                    "result": "문학상/NNG+을/JKO",
                    "word_id": 2,
                    "m_end": 5,
                    "id": 2,
                    "target": "문학상을",
                    "m_begin": 3
                },
                {
                    "result": "수상하/VV+었/EP+다/EF+./SF",
                    "word_id": 3,
                    "m_end": 10,
                    "id": 3,
                    "target": "수상하였다.",
                    "m_begin": 6
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [
                    {
                        "indirect": 0,
                        "confidence": 0.989471699688869,
                        "link": 6,
                        "end_offset": 12,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/노벨_문학상",
                        "relation": 4,
                        "score": 2.423245873936808,
                        "en_entity": "Nobel_Prize_in_Literature",
                        "text": "노벨문학상",
                        "start_offset": 6,
                        "id": 325050
                    }
                ],
                "d_entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 5,
                        "text": "1854년",
                        "start_offset": 0,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    }
                ],
                "merge": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 5,
                        "text": "1854년",
                        "start_offset": 0,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 2.423245873936808,
                        "indirect": 0,
                        "confidence": 0.989471699688869,
                        "link": 6,
                        "end_offset": 12,
                        "text": "노벨문학상",
                        "start_offset": 6,
                        "id": 325050,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/노벨_문학상",
                        "relation": 4
                    }
                ]
            },
            "morp": [
                {
                    "lemma": "1854",
                    "weight": 1,
                    "id": 0,
                    "position": 78,
                    "type": "SN"
                },
                {
                    "lemma": "년",
                    "weight": 0.414343,
                    "id": 1,
                    "position": 82,
                    "type": "NNB"
                },
                {
                    "lemma": "노벨",
                    "weight": 0.9,
                    "id": 2,
                    "position": 86,
                    "type": "NNP"
                },
                {
                    "lemma": "문학",
                    "weight": 0.27891,
                    "id": 3,
                    "position": 93,
                    "type": "NNG"
                },
                {
                    "lemma": "상",
                    "weight": 0.0834075,
                    "id": 4,
                    "position": 99,
                    "type": "NNG"
                },
                {
                    "lemma": "을",
                    "weight": 0.129611,
                    "id": 5,
                    "position": 102,
                    "type": "JKO"
                },
                {
                    "lemma": "수상",
                    "weight": 0.9,
                    "id": 6,
                    "position": 106,
                    "type": "NNG"
                },
                {
                    "lemma": "하",
                    "weight": 0.0001,
                    "id": 7,
                    "position": 112,
                    "type": "XSV"
                },
                {
                    "lemma": "었",
                    "weight": 0.9,
                    "id": 8,
                    "position": 115,
                    "type": "EP"
                },
                {
                    "lemma": "다",
                    "weight": 0.640954,
                    "id": 9,
                    "position": 118,
                    "type": "EF"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 10,
                    "position": 121,
                    "type": "SF"
                }
            ],
            "NE": [
                {
                    "weight": 0.818245,
                    "end": 1,
                    "id": 0,
                    "text": "1854년",
                    "type": "DT_YEAR",
                    "begin": 0,
                    "common_noun": 0
                },
                {
                    "weight": 0.966091,
                    "end": 4,
                    "id": 1,
                    "text": "노벨 문학상",
                    "type": "CV_PRIZE",
                    "begin": 2,
                    "common_noun": 0
                }
            ],
            "id": 1,
            "text": " 1854년 노벨 문학상을 수상하였다.",
            "word": [
                {
                    "end": 1,
                    "id": 0,
                    "text": "1854년",
                    "type": "",
                    "begin": 0
                },
                {
                    "end": 2,
                    "id": 1,
                    "text": "노벨",
                    "type": "",
                    "begin": 2
                },
                {
                    "end": 5,
                    "id": 2,
                    "text": "문학상을",
                    "type": "",
                    "begin": 3
                },
                {
                    "end": 10,
                    "id": 3,
                    "text": "수상하였다.",
                    "type": "",
                    "begin": 6
                }
            ],
            "mod_NE": [
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 5,
                    "text": "1854년",
                    "start_offset": 0,
                    "type": "DT_YEAR",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 12,
                    "text": "노벨 문학상",
                    "start_offset": 6,
                    "type": "CV_PRIZE",
                    "relation": 0
                }
            ]
        },
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 0,
                    "key_begin": 0,
                    "id": 0,
                    "label": "NP_SBJ",
                    "text": "헤밍웨이는",
                    "head_phrase": 3,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 3,
                    "key_begin": 1,
                    "id": 1,
                    "label": "NP_AJT",
                    "text": "1899년 7월 21일",
                    "head_phrase": 3,
                    "begin": 1,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 4,
                    "key_begin": 4,
                    "id": 2,
                    "label": "NP_AJT",
                    "text": "일리노이주에서",
                    "head_phrase": 3,
                    "begin": 4,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 5,
                    "key_begin": 5,
                    "id": 3,
                    "label": "S",
                    "text": "P#0@SBJ는 P#1@AJT일 P#2@AJT에서 태어났다.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [
                        0,
                        1,
                        2
                    ],
                    "element": []
                }
            ],
            "dependency": [
                {
                    "head": 5,
                    "mod": [],
                    "weight": 0.871891,
                    "id": 0,
                    "text": "헤밍웨이는",
                    "label": "NP_SBJ"
                },
                {
                    "head": 2,
                    "mod": [],
                    "weight": 0.639108,
                    "id": 1,
                    "text": "1899년",
                    "label": "NP"
                },
                {
                    "head": 3,
                    "mod": [
                        1
                    ],
                    "weight": 0.691294,
                    "id": 2,
                    "text": "7월",
                    "label": "NP"
                },
                {
                    "head": 5,
                    "mod": [
                        2
                    ],
                    "weight": 0.818033,
                    "id": 3,
                    "text": "21일",
                    "label": "NP_AJT"
                },
                {
                    "head": 5,
                    "mod": [],
                    "weight": 0.859442,
                    "id": 4,
                    "text": "일리노이주에서",
                    "label": "NP_AJT"
                },
                {
                    "head": -1,
                    "mod": [
                        0,
                        3,
                        4
                    ],
                    "weight": 0.233618,
                    "id": 5,
                    "text": "태어났다.",
                    "label": "VP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 0,
                    "id": 0,
                    "text": "헤밍웨이",
                    "position": 123,
                    "type": "NNP",
                    "begin": 0
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 1,
                    "id": 1,
                    "text": "는",
                    "position": 135,
                    "type": "JX",
                    "begin": 1
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 2,
                    "id": 2,
                    "text": "1899",
                    "position": 139,
                    "type": "SN",
                    "begin": 2
                },
                {
                    "scode": "02",
                    "weight": 1.5,
                    "end": 3,
                    "id": 3,
                    "text": "년",
                    "position": 143,
                    "type": "NNB",
                    "begin": 3
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 4,
                    "id": 4,
                    "text": "7",
                    "position": 147,
                    "type": "SN",
                    "begin": 4
                },
                {
                    "scode": "02",
                    "weight": 1.5,
                    "end": 5,
                    "id": 5,
                    "text": "월",
                    "position": 148,
                    "type": "NNB",
                    "begin": 5
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 6,
                    "id": 6,
                    "text": "21",
                    "position": 152,
                    "type": "SN",
                    "begin": 6
                },
                {
                    "scode": "07",
                    "weight": 2.2,
                    "end": 7,
                    "id": 7,
                    "text": "일",
                    "position": 154,
                    "type": "NNB",
                    "begin": 7
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 8,
                    "id": 8,
                    "text": "일리노이주",
                    "position": 158,
                    "type": "NNP",
                    "begin": 8
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 9,
                    "id": 9,
                    "text": "에서",
                    "position": 173,
                    "type": "JKB",
                    "begin": 9
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 10,
                    "id": 10,
                    "text": "태어나",
                    "position": 180,
                    "type": "VV",
                    "begin": 10
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 11,
                    "id": 11,
                    "text": "았",
                    "position": 186,
                    "type": "EP",
                    "begin": 11
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 12,
                    "id": 12,
                    "text": "다",
                    "position": 189,
                    "type": "EF",
                    "begin": 12
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 13,
                    "id": 13,
                    "text": ".",
                    "position": 192,
                    "type": "SF",
                    "begin": 13
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "헤밍웨이/NNG+는/JX",
                    "word_id": 0,
                    "m_end": 1,
                    "id": 0,
                    "target": "헤밍웨이는",
                    "m_begin": 0
                },
                {
                    "result": "1899/SN+년/NNB",
                    "word_id": 1,
                    "m_end": 3,
                    "id": 1,
                    "target": "1899년",
                    "m_begin": 2
                },
                {
                    "result": "7/SN+월/NNB",
                    "word_id": 2,
                    "m_end": 5,
                    "id": 2,
                    "target": "7월",
                    "m_begin": 4
                },
                {
                    "result": "21/SN+일/NNB",
                    "word_id": 3,
                    "m_end": 7,
                    "id": 3,
                    "target": "21일",
                    "m_begin": 6
                },
                {
                    "result": "일리노이주/NNG+에서/JKB",
                    "word_id": 4,
                    "m_end": 9,
                    "id": 4,
                    "target": "일리노이주에서",
                    "m_begin": 8
                },
                {
                    "result": "태어나/VV+었/EP+다/EF+./SF",
                    "word_id": 5,
                    "m_end": 13,
                    "id": 5,
                    "target": "태어났다.",
                    "m_begin": 10
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [
                    {
                        "indirect": 0,
                        "confidence": 0.9908202478286774,
                        "link": 31,
                        "end_offset": 4,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://wikidata.dbpedia.org/resource/Q5",
                            "http://xmlns.com/foaf/0.1/Person",
                            "http://dbpedia.org/ontology/Agent",
                            "http://dbpedia.org/ontology/Artist",
                            "http://dbpedia.org/ontology/Person",
                            "http://dbpedia.org/ontology/Writer",
                            "http://schema.org/Person",
                            "http://wikidata.dbpedia.org/resource/Q215627",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson",
                            "http://www.wikidata.org/entity/Q36180",
                            "http://www.wikidata.org/entity/Q5",
                            "http://www.wikidata.org/entity/Q215627"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/어니스트_헤밍웨이",
                        "relation": 27,
                        "score": 1.8808135922807914,
                        "en_entity": "Ernest_Hemingway",
                        "text": "헤밍웨이",
                        "start_offset": 0,
                        "id": 325052
                    },
                    {
                        "indirect": 0,
                        "confidence": 1.0032778110028526,
                        "link": 3,
                        "end_offset": 24,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://www.ontologydesignpatterns.org/ont/d0.owl#Location",
                            "http://dbpedia.org/ontology/AdministrativeRegion",
                            "http://dbpedia.org/ontology/Place",
                            "http://dbpedia.org/ontology/PopulatedPlace",
                            "http://dbpedia.org/ontology/Region",
                            "http://dbpedia.org/ontology/Wikidata:Q532",
                            "http://schema.org/AdministrativeArea",
                            "http://schema.org/Place",
                            "http://www.wikidata.org/entity/Q3455524",
                            "http://www.wikidata.org/entity/Q486972",
                            "http://dbpedia.org/ontology/Location"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/일리노이_주",
                        "relation": 3,
                        "score": 3.1562461903973444,
                        "en_entity": "Illinois",
                        "text": "일리노이주",
                        "start_offset": 19,
                        "id": 325053
                    }
                ],
                "d_entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 18,
                        "text": "1899년 7월 21일",
                        "start_offset": 6,
                        "source": "DE",
                        "type": "DT_OTHERS",
                        "uri": "",
                        "relation": 0
                    }
                ],
                "merge": [
                    {
                        "score": 1.8808135922807914,
                        "indirect": 0,
                        "confidence": 0.9908202478286774,
                        "link": 31,
                        "end_offset": 4,
                        "text": "헤밍웨이",
                        "start_offset": 0,
                        "id": 325052,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://wikidata.dbpedia.org/resource/Q5",
                            "http://xmlns.com/foaf/0.1/Person",
                            "http://dbpedia.org/ontology/Agent",
                            "http://dbpedia.org/ontology/Artist",
                            "http://dbpedia.org/ontology/Person",
                            "http://dbpedia.org/ontology/Writer",
                            "http://schema.org/Person",
                            "http://wikidata.dbpedia.org/resource/Q215627",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson",
                            "http://www.wikidata.org/entity/Q36180",
                            "http://www.wikidata.org/entity/Q5",
                            "http://www.wikidata.org/entity/Q215627"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/어니스트_헤밍웨이",
                        "relation": 27
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 18,
                        "text": "1899년 7월 21일",
                        "start_offset": 6,
                        "source": "DE",
                        "type": "DT_OTHERS",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 3.1562461903973444,
                        "indirect": 0,
                        "confidence": 1.0032778110028526,
                        "link": 3,
                        "end_offset": 24,
                        "text": "일리노이주",
                        "start_offset": 19,
                        "id": 325053,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://www.ontologydesignpatterns.org/ont/d0.owl#Location",
                            "http://dbpedia.org/ontology/AdministrativeRegion",
                            "http://dbpedia.org/ontology/Place",
                            "http://dbpedia.org/ontology/PopulatedPlace",
                            "http://dbpedia.org/ontology/Region",
                            "http://dbpedia.org/ontology/Wikidata:Q532",
                            "http://schema.org/AdministrativeArea",
                            "http://schema.org/Place",
                            "http://www.wikidata.org/entity/Q3455524",
                            "http://www.wikidata.org/entity/Q486972",
                            "http://dbpedia.org/ontology/Location"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/일리노이_주",
                        "relation": 3
                    }
                ]
            },
            "morp": [
                {
                    "lemma": "헤밍웨이",
                    "weight": 0.9,
                    "id": 0,
                    "position": 123,
                    "type": "NNP"
                },
                {
                    "lemma": "는",
                    "weight": 0.0332677,
                    "id": 1,
                    "position": 135,
                    "type": "JX"
                },
                {
                    "lemma": "1899",
                    "weight": 1,
                    "id": 2,
                    "position": 139,
                    "type": "SN"
                },
                {
                    "lemma": "년",
                    "weight": 0.414343,
                    "id": 3,
                    "position": 143,
                    "type": "NNB"
                },
                {
                    "lemma": "7",
                    "weight": 1,
                    "id": 4,
                    "position": 147,
                    "type": "SN"
                },
                {
                    "lemma": "월",
                    "weight": 0.408539,
                    "id": 5,
                    "position": 148,
                    "type": "NNB"
                },
                {
                    "lemma": "21",
                    "weight": 1,
                    "id": 6,
                    "position": 152,
                    "type": "SN"
                },
                {
                    "lemma": "일",
                    "weight": 0.126777,
                    "id": 7,
                    "position": 154,
                    "type": "NNB"
                },
                {
                    "lemma": "일리노이주",
                    "weight": 0.6,
                    "id": 8,
                    "position": 158,
                    "type": "NNP"
                },
                {
                    "lemma": "에서",
                    "weight": 0.0823859,
                    "id": 9,
                    "position": 173,
                    "type": "JKB"
                },
                {
                    "lemma": "태어나",
                    "weight": 0.9,
                    "id": 10,
                    "position": 180,
                    "type": "VV"
                },
                {
                    "lemma": "았",
                    "weight": 0.9,
                    "id": 11,
                    "position": 186,
                    "type": "EP"
                },
                {
                    "lemma": "다",
                    "weight": 0.640954,
                    "id": 12,
                    "position": 189,
                    "type": "EF"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 13,
                    "position": 192,
                    "type": "SF"
                }
            ],
            "NE": [
                {
                    "weight": 0.380334,
                    "end": 0,
                    "id": 0,
                    "text": "헤밍웨이",
                    "type": "PS_NAME",
                    "begin": 0,
                    "common_noun": 0
                },
                {
                    "weight": 0.841237,
                    "end": 7,
                    "id": 1,
                    "text": "1899년 7월 21일",
                    "type": "DT_OTHERS",
                    "begin": 2,
                    "common_noun": 0
                },
                {
                    "weight": 0.406903,
                    "end": 8,
                    "id": 2,
                    "text": "일리노이주",
                    "type": "LCP_PROVINCE",
                    "begin": 8,
                    "common_noun": 0
                }
            ],
            "id": 2,
            "text": " 헤밍웨이는 1899년 7월 21일 일리노이주에서 태어났다.",
            "word": [
                {
                    "end": 1,
                    "id": 0,
                    "text": "헤밍웨이는",
                    "type": "",
                    "begin": 0
                },
                {
                    "end": 3,
                    "id": 1,
                    "text": "1899년",
                    "type": "",
                    "begin": 2
                },
                {
                    "end": 5,
                    "id": 2,
                    "text": "7월",
                    "type": "",
                    "begin": 4
                },
                {
                    "end": 7,
                    "id": 3,
                    "text": "21일",
                    "type": "",
                    "begin": 6
                },
                {
                    "end": 9,
                    "id": 4,
                    "text": "일리노이주에서",
                    "type": "",
                    "begin": 8
                },
                {
                    "end": 13,
                    "id": 5,
                    "text": "태어났다.",
                    "type": "",
                    "begin": 10
                }
            ],
            "mod_NE": [
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 4,
                    "text": "헤밍웨이",
                    "start_offset": 0,
                    "type": "PS_NAME",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 18,
                    "text": "1899년 7월 21일",
                    "start_offset": 6,
                    "type": "DT_OTHERS",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 24,
                    "text": "일리노이주",
                    "start_offset": 19,
                    "type": "LCP_PROVINCE",
                    "relation": 0
                }
            ]
        },
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 0,
                    "key_begin": 0,
                    "id": 0,
                    "label": "NP_SBJ",
                    "text": "헤밍웨이는",
                    "head_phrase": 5,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 2,
                    "key_begin": 1,
                    "id": 1,
                    "label": "NP_AJT",
                    "text": "풀린 파이퍼와",
                    "head_phrase": 2,
                    "begin": 1,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 3,
                    "key_begin": 3,
                    "id": 2,
                    "label": "VP_MOD",
                    "text": "P#1@AJT와 이혼한",
                    "head_phrase": 3,
                    "begin": 1,
                    "sub_phrase": [
                        1
                    ],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 4,
                    "key_begin": 4,
                    "id": 3,
                    "label": "NP_AJT",
                    "text": "P#2@MODㄴ 뒤",
                    "head_phrase": 5,
                    "begin": 1,
                    "sub_phrase": [
                        2
                    ],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 6,
                    "key_begin": 5,
                    "id": 4,
                    "label": "NP_AJT",
                    "text": "마사 겔혼과",
                    "head_phrase": 5,
                    "begin": 5,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 7,
                    "key_begin": 7,
                    "id": 5,
                    "label": "S",
                    "text": "P#0@SBJ는 P#3@AJT뒤 P#4@AJT과 재혼하였다.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [
                        0,
                        3,
                        4
                    ],
                    "element": []
                }
            ],
            "dependency": [
                {
                    "head": 7,
                    "mod": [],
                    "weight": 0.828218,
                    "id": 0,
                    "text": "헤밍웨이는",
                    "label": "NP_SBJ"
                },
                {
                    "head": 2,
                    "mod": [],
                    "weight": 0.49788,
                    "id": 1,
                    "text": "풀린",
                    "label": "VP_MOD"
                },
                {
                    "head": 3,
                    "mod": [
                        1
                    ],
                    "weight": 0.788353,
                    "id": 2,
                    "text": "파이퍼와",
                    "label": "NP_AJT"
                },
                {
                    "head": 4,
                    "mod": [
                        2
                    ],
                    "weight": 0.72223,
                    "id": 3,
                    "text": "이혼한",
                    "label": "VP_MOD"
                },
                {
                    "head": 7,
                    "mod": [
                        3
                    ],
                    "weight": 0.800356,
                    "id": 4,
                    "text": "뒤",
                    "label": "NP_AJT"
                },
                {
                    "head": 6,
                    "mod": [],
                    "weight": 0.430128,
                    "id": 5,
                    "text": "마사",
                    "label": "NP"
                },
                {
                    "head": 7,
                    "mod": [
                        5
                    ],
                    "weight": 0.0687702,
                    "id": 6,
                    "text": "겔혼과",
                    "label": "NP_AJT"
                },
                {
                    "head": -1,
                    "mod": [
                        0,
                        4,
                        6
                    ],
                    "weight": 0.00318445,
                    "id": 7,
                    "text": "재혼하였다.",
                    "label": "VP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 0,
                    "id": 0,
                    "text": "헤밍웨이",
                    "position": 194,
                    "type": "NNP",
                    "begin": 0
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 1,
                    "id": 1,
                    "text": "는",
                    "position": 206,
                    "type": "JX",
                    "begin": 1
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 2,
                    "id": 2,
                    "text": "풀리",
                    "position": 210,
                    "type": "VV",
                    "begin": 2
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 3,
                    "id": 3,
                    "text": "ㄴ",
                    "position": 213,
                    "type": "ETM",
                    "begin": 3
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 4,
                    "id": 4,
                    "text": "파이퍼",
                    "position": 217,
                    "type": "NNP",
                    "begin": 4
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 5,
                    "id": 5,
                    "text": "와",
                    "position": 226,
                    "type": "JKB",
                    "begin": 5
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 7,
                    "id": 6,
                    "text": "이혼하",
                    "position": 230,
                    "type": "VV",
                    "begin": 6
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 8,
                    "id": 7,
                    "text": "ㄴ",
                    "position": 236,
                    "type": "ETM",
                    "begin": 8
                },
                {
                    "scode": "01",
                    "weight": 2.2,
                    "end": 9,
                    "id": 8,
                    "text": "뒤",
                    "position": 240,
                    "type": "NNG",
                    "begin": 9
                },
                {
                    "scode": "03",
                    "weight": 1,
                    "end": 10,
                    "id": 9,
                    "text": "마사",
                    "position": 244,
                    "type": "NNG",
                    "begin": 10
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 11,
                    "id": 10,
                    "text": "겔혼",
                    "position": 251,
                    "type": "NNG",
                    "begin": 11
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 12,
                    "id": 11,
                    "text": "과",
                    "position": 257,
                    "type": "JC",
                    "begin": 12
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 14,
                    "id": 12,
                    "text": "재혼하",
                    "position": 261,
                    "type": "VV",
                    "begin": 13
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 15,
                    "id": 13,
                    "text": "었",
                    "position": 270,
                    "type": "EP",
                    "begin": 15
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 16,
                    "id": 14,
                    "text": "다",
                    "position": 273,
                    "type": "EF",
                    "begin": 16
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 17,
                    "id": 15,
                    "text": ".",
                    "position": 276,
                    "type": "SF",
                    "begin": 17
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "헤밍웨이/NNG+는/JX",
                    "word_id": 0,
                    "m_end": 1,
                    "id": 0,
                    "target": "헤밍웨이는",
                    "m_begin": 0
                },
                {
                    "result": "풀리/VV+ㄴ/ETM",
                    "word_id": 1,
                    "m_end": 3,
                    "id": 1,
                    "target": "풀린",
                    "m_begin": 2
                },
                {
                    "result": "파이퍼/NNG+와/JKB",
                    "word_id": 2,
                    "m_end": 5,
                    "id": 2,
                    "target": "파이퍼와",
                    "m_begin": 4
                },
                {
                    "result": "이혼하/VV+ㄴ/ETM",
                    "word_id": 3,
                    "m_end": 8,
                    "id": 3,
                    "target": "이혼한",
                    "m_begin": 6
                },
                {
                    "result": "뒤/NNG",
                    "word_id": 4,
                    "m_end": 9,
                    "id": 4,
                    "target": "뒤",
                    "m_begin": 9
                },
                {
                    "result": "마사/NNG",
                    "word_id": 5,
                    "m_end": 10,
                    "id": 5,
                    "target": "마사",
                    "m_begin": 10
                },
                {
                    "result": "겔혼/NNG+과/JC",
                    "word_id": 6,
                    "m_end": 12,
                    "id": 6,
                    "target": "겔혼과",
                    "m_begin": 11
                },
                {
                    "result": "재혼하/VV+었/EP+다/EF+./SF",
                    "word_id": 7,
                    "m_end": 17,
                    "id": 7,
                    "target": "재혼하였다.",
                    "m_begin": 13
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [
                    {
                        "indirect": 0,
                        "confidence": 0.9908202478286774,
                        "link": 31,
                        "end_offset": 4,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://wikidata.dbpedia.org/resource/Q5",
                            "http://xmlns.com/foaf/0.1/Person",
                            "http://dbpedia.org/ontology/Agent",
                            "http://dbpedia.org/ontology/Artist",
                            "http://dbpedia.org/ontology/Person",
                            "http://dbpedia.org/ontology/Writer",
                            "http://schema.org/Person",
                            "http://wikidata.dbpedia.org/resource/Q215627",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson",
                            "http://www.wikidata.org/entity/Q36180",
                            "http://www.wikidata.org/entity/Q5",
                            "http://www.wikidata.org/entity/Q215627"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/어니스트_헤밍웨이",
                        "relation": 27,
                        "score": 1.8808135922807914,
                        "en_entity": "Ernest_Hemingway",
                        "text": "헤밍웨이",
                        "start_offset": 0,
                        "id": 325054
                    },
                    {
                        "indirect": 0,
                        "confidence": 0.9446060575583326,
                        "link": 0,
                        "end_offset": 25,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/마사_겔혼",
                        "relation": 0,
                        "score": 0.3010299956639812,
                        "en_entity": "Martha_Gellhorn",
                        "text": "마사겔혼",
                        "start_offset": 20,
                        "id": 325055
                    }
                ],
                "d_entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 12,
                        "text": "파이퍼",
                        "start_offset": 9,
                        "source": "DE",
                        "type": "PS_NAME",
                        "uri": "",
                        "relation": 0
                    }
                ],
                "merge": [
                    {
                        "score": 1.8808135922807914,
                        "indirect": 0,
                        "confidence": 0.9908202478286774,
                        "link": 31,
                        "end_offset": 4,
                        "text": "헤밍웨이",
                        "start_offset": 0,
                        "id": 325054,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://wikidata.dbpedia.org/resource/Q5",
                            "http://xmlns.com/foaf/0.1/Person",
                            "http://dbpedia.org/ontology/Agent",
                            "http://dbpedia.org/ontology/Artist",
                            "http://dbpedia.org/ontology/Person",
                            "http://dbpedia.org/ontology/Writer",
                            "http://schema.org/Person",
                            "http://wikidata.dbpedia.org/resource/Q215627",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson",
                            "http://www.wikidata.org/entity/Q36180",
                            "http://www.wikidata.org/entity/Q5",
                            "http://www.wikidata.org/entity/Q215627"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/어니스트_헤밍웨이",
                        "relation": 27
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 12,
                        "text": "파이퍼",
                        "start_offset": 9,
                        "source": "DE",
                        "type": "PS_NAME",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0.3010299956639812,
                        "indirect": 0,
                        "confidence": 0.9446060575583326,
                        "link": 0,
                        "end_offset": 25,
                        "text": "마사겔혼",
                        "start_offset": 20,
                        "id": 325055,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/마사_겔혼",
                        "relation": 0
                    }
                ]
            },
            "morp": [
                {
                    "lemma": "헤밍웨이",
                    "weight": 0.9,
                    "id": 0,
                    "position": 194,
                    "type": "NNP"
                },
                {
                    "lemma": "는",
                    "weight": 0.0332677,
                    "id": 1,
                    "position": 206,
                    "type": "JX"
                },
                {
                    "lemma": "풀리",
                    "weight": 0.9,
                    "id": 2,
                    "position": 210,
                    "type": "VV"
                },
                {
                    "lemma": "ㄴ",
                    "weight": 0.304215,
                    "id": 3,
                    "position": 213,
                    "type": "ETM"
                },
                {
                    "lemma": "파이퍼",
                    "weight": 0.2,
                    "id": 4,
                    "position": 217,
                    "type": "NNP"
                },
                {
                    "lemma": "와",
                    "weight": 0.0304966,
                    "id": 5,
                    "position": 226,
                    "type": "JKB"
                },
                {
                    "lemma": "이혼",
                    "weight": 0.9,
                    "id": 6,
                    "position": 230,
                    "type": "NNG"
                },
                {
                    "lemma": "하",
                    "weight": 0.0001,
                    "id": 7,
                    "position": 236,
                    "type": "XSV"
                },
                {
                    "lemma": "ㄴ",
                    "weight": 0.392321,
                    "id": 8,
                    "position": 236,
                    "type": "ETM"
                },
                {
                    "lemma": "뒤",
                    "weight": 0.65834,
                    "id": 9,
                    "position": 240,
                    "type": "NNG"
                },
                {
                    "lemma": "마사",
                    "weight": 0.110904,
                    "id": 10,
                    "position": 244,
                    "type": "NNG"
                },
                {
                    "lemma": "겔혼",
                    "weight": 0.05,
                    "id": 11,
                    "position": 251,
                    "type": "NNG"
                },
                {
                    "lemma": "과",
                    "weight": 0.017569,
                    "id": 12,
                    "position": 257,
                    "type": "JC"
                },
                {
                    "lemma": "재혼",
                    "weight": 0.9,
                    "id": 13,
                    "position": 261,
                    "type": "NNG"
                },
                {
                    "lemma": "하",
                    "weight": 0.0001,
                    "id": 14,
                    "position": 267,
                    "type": "XSV"
                },
                {
                    "lemma": "었",
                    "weight": 0.9,
                    "id": 15,
                    "position": 270,
                    "type": "EP"
                },
                {
                    "lemma": "다",
                    "weight": 0.640954,
                    "id": 16,
                    "position": 273,
                    "type": "EF"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 17,
                    "position": 276,
                    "type": "SF"
                }
            ],
            "NE": [
                {
                    "weight": 0.284988,
                    "end": 0,
                    "id": 0,
                    "text": "헤밍웨이",
                    "type": "PS_NAME",
                    "begin": 0,
                    "common_noun": 0
                },
                {
                    "weight": 0.204269,
                    "end": 4,
                    "id": 1,
                    "text": "파이퍼",
                    "type": "PS_NAME",
                    "begin": 4,
                    "common_noun": 0
                },
                {
                    "weight": 0.102782,
                    "end": 11,
                    "id": 2,
                    "text": "마사 겔혼",
                    "type": "PS_NAME",
                    "begin": 10,
                    "common_noun": 0
                }
            ],
            "id": 3,
            "text": " 헤밍웨이는 풀린 파이퍼와 이혼한 뒤 마사 겔혼과 재혼하였다.",
            "word": [
                {
                    "end": 1,
                    "id": 0,
                    "text": "헤밍웨이는",
                    "type": "",
                    "begin": 0
                },
                {
                    "end": 3,
                    "id": 1,
                    "text": "풀린",
                    "type": "",
                    "begin": 2
                },
                {
                    "end": 5,
                    "id": 2,
                    "text": "파이퍼와",
                    "type": "",
                    "begin": 4
                },
                {
                    "end": 8,
                    "id": 3,
                    "text": "이혼한",
                    "type": "",
                    "begin": 6
                },
                {
                    "end": 9,
                    "id": 4,
                    "text": "뒤",
                    "type": "",
                    "begin": 9
                },
                {
                    "end": 10,
                    "id": 5,
                    "text": "마사",
                    "type": "",
                    "begin": 10
                },
                {
                    "end": 12,
                    "id": 6,
                    "text": "겔혼과",
                    "type": "",
                    "begin": 11
                },
                {
                    "end": 17,
                    "id": 7,
                    "text": "재혼하였다.",
                    "type": "",
                    "begin": 13
                }
            ],
            "mod_NE": [
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 4,
                    "text": "헤밍웨이",
                    "start_offset": 0,
                    "type": "PS_NAME",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 12,
                    "text": "파이퍼",
                    "start_offset": 9,
                    "type": "PS_NAME",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 25,
                    "text": "마사 겔혼",
                    "start_offset": 20,
                    "type": "PS_NAME",
                    "relation": 0
                }
            ]
        },
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 0,
                    "key_begin": 0,
                    "id": 0,
                    "label": "NP_AJT",
                    "text": "1961년",
                    "head_phrase": 4,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 2,
                    "key_begin": 1,
                    "id": 1,
                    "label": "NP_AJT",
                    "text": "아이다호 주에서",
                    "head_phrase": 4,
                    "begin": 1,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 3,
                    "key_begin": 3,
                    "id": 2,
                    "label": "NP_AJT",
                    "text": "엽총으로",
                    "head_phrase": 4,
                    "begin": 3,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 5,
                    "key_begin": 4,
                    "id": 3,
                    "label": "NP_AJT",
                    "text": "62세의 나이에",
                    "head_phrase": 4,
                    "begin": 4,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 6,
                    "key_begin": 6,
                    "id": 4,
                    "label": "VP",
                    "text": "P#0@AJT년 P#1@AJT에서 P#2@AJT으로 P#3@AJT에 자살했다.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [
                        0,
                        1,
                        2,
                        3
                    ],
                    "element": []
                }
            ],
            "dependency": [
                {
                    "head": 6,
                    "mod": [],
                    "weight": 0.67311,
                    "id": 0,
                    "text": "1961년",
                    "label": "NP_AJT"
                },
                {
                    "head": 2,
                    "mod": [],
                    "weight": 0.688133,
                    "id": 1,
                    "text": "아이다호",
                    "label": "NP"
                },
                {
                    "head": 6,
                    "mod": [
                        1
                    ],
                    "weight": 0.829736,
                    "id": 2,
                    "text": "주에서",
                    "label": "NP_AJT"
                },
                {
                    "head": 6,
                    "mod": [],
                    "weight": 0.83624,
                    "id": 3,
                    "text": "엽총으로",
                    "label": "NP_AJT"
                },
                {
                    "head": 5,
                    "mod": [],
                    "weight": 0.616312,
                    "id": 4,
                    "text": "62세의",
                    "label": "NP_MOD"
                },
                {
                    "head": 6,
                    "mod": [
                        4
                    ],
                    "weight": 0.833619,
                    "id": 5,
                    "text": "나이에",
                    "label": "NP_AJT"
                },
                {
                    "head": -1,
                    "mod": [
                        0,
                        2,
                        3,
                        5
                    ],
                    "weight": 0.133396,
                    "id": 6,
                    "text": "자살했다.",
                    "label": "VP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 0,
                    "id": 0,
                    "text": "1961",
                    "position": 278,
                    "type": "SN",
                    "begin": 0
                },
                {
                    "scode": "02",
                    "weight": 2.2,
                    "end": 1,
                    "id": 1,
                    "text": "년",
                    "position": 282,
                    "type": "NNB",
                    "begin": 1
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 2,
                    "id": 2,
                    "text": "아이다호",
                    "position": 286,
                    "type": "NNP",
                    "begin": 2
                },
                {
                    "scode": "05",
                    "weight": 3.3,
                    "end": 3,
                    "id": 3,
                    "text": "주",
                    "position": 299,
                    "type": "NNG",
                    "begin": 3
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 4,
                    "id": 4,
                    "text": "에서",
                    "position": 302,
                    "type": "JKB",
                    "begin": 4
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 5,
                    "id": 5,
                    "text": "엽총",
                    "position": 309,
                    "type": "NNG",
                    "begin": 5
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 6,
                    "id": 6,
                    "text": "으로",
                    "position": 315,
                    "type": "JKB",
                    "begin": 6
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 7,
                    "id": 7,
                    "text": "62",
                    "position": 322,
                    "type": "SN",
                    "begin": 7
                },
                {
                    "scode": "13",
                    "weight": 4.18947,
                    "end": 8,
                    "id": 8,
                    "text": "세",
                    "position": 324,
                    "type": "NNB",
                    "begin": 8
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 9,
                    "id": 9,
                    "text": "의",
                    "position": 327,
                    "type": "JKG",
                    "begin": 9
                },
                {
                    "scode": "01",
                    "weight": 1,
                    "end": 10,
                    "id": 10,
                    "text": "나이",
                    "position": 331,
                    "type": "NNG",
                    "begin": 10
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 11,
                    "id": 11,
                    "text": "에",
                    "position": 337,
                    "type": "JKB",
                    "begin": 11
                },
                {
                    "scode": "01",
                    "weight": 1,
                    "end": 13,
                    "id": 12,
                    "text": "자살하",
                    "position": 341,
                    "type": "VV",
                    "begin": 12
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 14,
                    "id": 13,
                    "text": "었",
                    "position": 347,
                    "type": "EP",
                    "begin": 14
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 15,
                    "id": 14,
                    "text": "다",
                    "position": 350,
                    "type": "EF",
                    "begin": 15
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 16,
                    "id": 15,
                    "text": ".",
                    "position": 353,
                    "type": "SF",
                    "begin": 16
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "1961/SN+년/NNB",
                    "word_id": 0,
                    "m_end": 1,
                    "id": 0,
                    "target": "1961년",
                    "m_begin": 0
                },
                {
                    "result": "아이다호/NNG",
                    "word_id": 1,
                    "m_end": 2,
                    "id": 1,
                    "target": "아이다호",
                    "m_begin": 2
                },
                {
                    "result": "주/NNG+에서/JKB",
                    "word_id": 2,
                    "m_end": 4,
                    "id": 2,
                    "target": "주에서",
                    "m_begin": 3
                },
                {
                    "result": "엽총/NNG+으로/JKB",
                    "word_id": 3,
                    "m_end": 6,
                    "id": 3,
                    "target": "엽총으로",
                    "m_begin": 5
                },
                {
                    "result": "62/SN+세/NNB+의/JKG",
                    "word_id": 4,
                    "m_end": 9,
                    "id": 4,
                    "target": "62세의",
                    "m_begin": 7
                },
                {
                    "result": "나이/NNG+에/JKB",
                    "word_id": 5,
                    "m_end": 11,
                    "id": 5,
                    "target": "나이에",
                    "m_begin": 10
                },
                {
                    "result": "자살하/VV+었/EP+다/EF+./SF",
                    "word_id": 6,
                    "m_end": 16,
                    "id": 6,
                    "target": "자살했다.",
                    "m_begin": 12
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [
                    {
                        "indirect": 0,
                        "confidence": 0.9819454045719849,
                        "link": 0,
                        "end_offset": 12,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://www.ontologydesignpatterns.org/ont/d0.owl#Location",
                            "http://dbpedia.org/ontology/AdministrativeRegion",
                            "http://dbpedia.org/ontology/Place",
                            "http://dbpedia.org/ontology/PopulatedPlace",
                            "http://dbpedia.org/ontology/Region",
                            "http://dbpedia.org/ontology/Wikidata:Q532",
                            "http://schema.org/AdministrativeArea",
                            "http://schema.org/Place",
                            "http://www.wikidata.org/entity/Q3455524",
                            "http://www.wikidata.org/entity/Q486972",
                            "http://dbpedia.org/ontology/Location"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/아이다호_주",
                        "relation": 0,
                        "score": 2.167317334748176,
                        "en_entity": "Idaho",
                        "text": "아이다호주",
                        "start_offset": 6,
                        "id": 325056
                    }
                ],
                "d_entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 5,
                        "text": "1961년",
                        "start_offset": 0,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 17,
                        "text": "엽총",
                        "start_offset": 15,
                        "source": "DE",
                        "type": "AF_WEAPON",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 23,
                        "text": "62세",
                        "start_offset": 20,
                        "source": "DE",
                        "type": "QT_AGE",
                        "uri": "",
                        "relation": 0
                    }
                ],
                "merge": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 5,
                        "text": "1961년",
                        "start_offset": 0,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 2.167317334748176,
                        "indirect": 0,
                        "confidence": 0.9819454045719849,
                        "link": 0,
                        "end_offset": 12,
                        "text": "아이다호주",
                        "start_offset": 6,
                        "id": 325056,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://www.ontologydesignpatterns.org/ont/d0.owl#Location",
                            "http://dbpedia.org/ontology/AdministrativeRegion",
                            "http://dbpedia.org/ontology/Place",
                            "http://dbpedia.org/ontology/PopulatedPlace",
                            "http://dbpedia.org/ontology/Region",
                            "http://dbpedia.org/ontology/Wikidata:Q532",
                            "http://schema.org/AdministrativeArea",
                            "http://schema.org/Place",
                            "http://www.wikidata.org/entity/Q3455524",
                            "http://www.wikidata.org/entity/Q486972",
                            "http://dbpedia.org/ontology/Location"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/아이다호_주",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 17,
                        "text": "엽총",
                        "start_offset": 15,
                        "source": "DE",
                        "type": "AF_WEAPON",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 23,
                        "text": "62세",
                        "start_offset": 20,
                        "source": "DE",
                        "type": "QT_AGE",
                        "uri": "",
                        "relation": 0
                    }
                ]
            },
            "morp": [
                {
                    "lemma": "1961",
                    "weight": 1,
                    "id": 0,
                    "position": 278,
                    "type": "SN"
                },
                {
                    "lemma": "년",
                    "weight": 0.414343,
                    "id": 1,
                    "position": 282,
                    "type": "NNB"
                },
                {
                    "lemma": "아이다호",
                    "weight": 0.2,
                    "id": 2,
                    "position": 286,
                    "type": "NNP"
                },
                {
                    "lemma": "주",
                    "weight": 0.0177845,
                    "id": 3,
                    "position": 299,
                    "type": "NNG"
                },
                {
                    "lemma": "에서",
                    "weight": 0.153407,
                    "id": 4,
                    "position": 302,
                    "type": "JKB"
                },
                {
                    "lemma": "엽총",
                    "weight": 0.9,
                    "id": 5,
                    "position": 309,
                    "type": "NNG"
                },
                {
                    "lemma": "으로",
                    "weight": 0.153406,
                    "id": 6,
                    "position": 315,
                    "type": "JKB"
                },
                {
                    "lemma": "62",
                    "weight": 1,
                    "id": 7,
                    "position": 322,
                    "type": "SN"
                },
                {
                    "lemma": "세",
                    "weight": 0.0850602,
                    "id": 8,
                    "position": 324,
                    "type": "NNB"
                },
                {
                    "lemma": "의",
                    "weight": 0.0520933,
                    "id": 9,
                    "position": 327,
                    "type": "JKG"
                },
                {
                    "lemma": "나이",
                    "weight": 0.9,
                    "id": 10,
                    "position": 331,
                    "type": "NNG"
                },
                {
                    "lemma": "에",
                    "weight": 0.153364,
                    "id": 11,
                    "position": 337,
                    "type": "JKB"
                },
                {
                    "lemma": "자살",
                    "weight": 0.9,
                    "id": 12,
                    "position": 341,
                    "type": "NNG"
                },
                {
                    "lemma": "하",
                    "weight": 0.0001,
                    "id": 13,
                    "position": 347,
                    "type": "XSV"
                },
                {
                    "lemma": "었",
                    "weight": 0.9,
                    "id": 14,
                    "position": 347,
                    "type": "EP"
                },
                {
                    "lemma": "다",
                    "weight": 0.640954,
                    "id": 15,
                    "position": 350,
                    "type": "EF"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 16,
                    "position": 353,
                    "type": "SF"
                }
            ],
            "NE": [
                {
                    "weight": 0.840442,
                    "end": 1,
                    "id": 0,
                    "text": "1961년",
                    "type": "DT_YEAR",
                    "begin": 0,
                    "common_noun": 0
                },
                {
                    "weight": 0.436933,
                    "end": 3,
                    "id": 1,
                    "text": "아이다호 주",
                    "type": "LCP_PROVINCE",
                    "begin": 2,
                    "common_noun": 0
                },
                {
                    "weight": 0.188854,
                    "end": 5,
                    "id": 2,
                    "text": "엽총",
                    "type": "AF_WEAPON",
                    "begin": 5,
                    "common_noun": 0
                },
                {
                    "weight": 0.65715,
                    "end": 8,
                    "id": 3,
                    "text": "62세",
                    "type": "QT_AGE",
                    "begin": 7,
                    "common_noun": 0
                }
            ],
            "id": 4,
            "text": " 1961년 아이다호 주에서 엽총으로 62세의 나이에 자살했다.",
            "word": [
                {
                    "end": 1,
                    "id": 0,
                    "text": "1961년",
                    "type": "",
                    "begin": 0
                },
                {
                    "end": 2,
                    "id": 1,
                    "text": "아이다호",
                    "type": "",
                    "begin": 2
                },
                {
                    "end": 4,
                    "id": 2,
                    "text": "주에서",
                    "type": "",
                    "begin": 3
                },
                {
                    "end": 6,
                    "id": 3,
                    "text": "엽총으로",
                    "type": "",
                    "begin": 5
                },
                {
                    "end": 9,
                    "id": 4,
                    "text": "62세의",
                    "type": "",
                    "begin": 7
                },
                {
                    "end": 11,
                    "id": 5,
                    "text": "나이에",
                    "type": "",
                    "begin": 10
                },
                {
                    "end": 16,
                    "id": 6,
                    "text": "자살했다.",
                    "type": "",
                    "begin": 12
                }
            ],
            "mod_NE": [
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 5,
                    "text": "1961년",
                    "start_offset": 0,
                    "type": "DT_YEAR",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 12,
                    "text": "아이다호 주",
                    "start_offset": 6,
                    "type": "LCP_PROVINCE",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 17,
                    "text": "엽총",
                    "start_offset": 15,
                    "type": "AF_WEAPON",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 23,
                    "text": "62세",
                    "start_offset": 20,
                    "type": "QT_AGE",
                    "relation": 0
                }
            ]
        },
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 0,
                    "key_begin": 0,
                    "id": 0,
                    "label": "X",
                    "text": "-",
                    "head_phrase": 2,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 1,
                    "key_begin": 1,
                    "id": 1,
                    "label": "NP_AJT",
                    "text": "1926년",
                    "head_phrase": 2,
                    "begin": 1,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 8,
                    "key_begin": 2,
                    "id": 2,
                    "label": "NP",
                    "text": "P#0@X- P#1@AJT년 《해는 또다시 떠오른다》 The Sun Also Rises.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [
                        0,
                        1
                    ],
                    "element": []
                }
            ],
            "dependency": [
                {
                    "head": 8,
                    "mod": [],
                    "weight": 0.625414,
                    "id": 0,
                    "text": "-",
                    "label": "X"
                },
                {
                    "head": 4,
                    "mod": [],
                    "weight": 0.382789,
                    "id": 1,
                    "text": "1926년",
                    "label": "NP_AJT"
                },
                {
                    "head": 4,
                    "mod": [],
                    "weight": 0.623137,
                    "id": 2,
                    "text": "《해는",
                    "label": "NP_SBJ"
                },
                {
                    "head": 4,
                    "mod": [],
                    "weight": 0.851397,
                    "id": 3,
                    "text": "또다시",
                    "label": "AP"
                },
                {
                    "head": 8,
                    "mod": [
                        1,
                        2,
                        3
                    ],
                    "weight": 0.590195,
                    "id": 4,
                    "text": "떠오른다》",
                    "label": "VP"
                },
                {
                    "head": 6,
                    "mod": [],
                    "weight": 0.775376,
                    "id": 5,
                    "text": "The",
                    "label": "NP"
                },
                {
                    "head": 7,
                    "mod": [
                        5
                    ],
                    "weight": 0.295614,
                    "id": 6,
                    "text": "Sun",
                    "label": "NP"
                },
                {
                    "head": 8,
                    "mod": [
                        6
                    ],
                    "weight": 0.778055,
                    "id": 7,
                    "text": "Also",
                    "label": "NP"
                },
                {
                    "head": -1,
                    "mod": [
                        0,
                        4,
                        7
                    ],
                    "weight": 0.0109335,
                    "id": 8,
                    "text": "Rises.",
                    "label": "NP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 0,
                    "id": 0,
                    "text": "-",
                    "position": 354,
                    "type": "SO",
                    "begin": 0
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 1,
                    "id": 1,
                    "text": "1926",
                    "position": 356,
                    "type": "SN",
                    "begin": 1
                },
                {
                    "scode": "02",
                    "weight": 2.5,
                    "end": 2,
                    "id": 2,
                    "text": "년",
                    "position": 360,
                    "type": "NNB",
                    "begin": 2
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 3,
                    "id": 3,
                    "text": "《",
                    "position": 364,
                    "type": "SS",
                    "begin": 3
                },
                {
                    "scode": "12",
                    "weight": 1,
                    "end": 4,
                    "id": 4,
                    "text": "해",
                    "position": 367,
                    "type": "NNP",
                    "begin": 4
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 5,
                    "id": 5,
                    "text": "는",
                    "position": 370,
                    "type": "JX",
                    "begin": 5
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 6,
                    "id": 6,
                    "text": "또다시",
                    "position": 374,
                    "type": "MAG",
                    "begin": 6
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 7,
                    "id": 7,
                    "text": "떠오르",
                    "position": 384,
                    "type": "VV",
                    "begin": 7
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 8,
                    "id": 8,
                    "text": "ㄴ다",
                    "position": 390,
                    "type": "EF",
                    "begin": 8
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 9,
                    "id": 9,
                    "text": "》",
                    "position": 396,
                    "type": "SS",
                    "begin": 9
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 10,
                    "id": 10,
                    "text": "The",
                    "position": 400,
                    "type": "SL",
                    "begin": 10
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 11,
                    "id": 11,
                    "text": "Sun",
                    "position": 404,
                    "type": "SL",
                    "begin": 11
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 12,
                    "id": 12,
                    "text": "Also",
                    "position": 408,
                    "type": "SL",
                    "begin": 12
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 13,
                    "id": 13,
                    "text": "Rises",
                    "position": 413,
                    "type": "SL",
                    "begin": 13
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 14,
                    "id": 14,
                    "text": ".",
                    "position": 418,
                    "type": "SF",
                    "begin": 14
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "-/SO",
                    "word_id": 0,
                    "m_end": 0,
                    "id": 0,
                    "target": "-",
                    "m_begin": 0
                },
                {
                    "result": "1926/SN+년/NNB",
                    "word_id": 1,
                    "m_end": 2,
                    "id": 1,
                    "target": "1926년",
                    "m_begin": 1
                },
                {
                    "result": "《/SS+해/NNG+는/JX",
                    "word_id": 2,
                    "m_end": 5,
                    "id": 2,
                    "target": "《해는",
                    "m_begin": 3
                },
                {
                    "result": "또다시/MAG",
                    "word_id": 3,
                    "m_end": 6,
                    "id": 3,
                    "target": "또다시",
                    "m_begin": 6
                },
                {
                    "result": "떠오르/VV+ㄴ다/EF+》/SS",
                    "word_id": 4,
                    "m_end": 9,
                    "id": 4,
                    "target": "떠오른다》",
                    "m_begin": 7
                },
                {
                    "result": "The/SL",
                    "word_id": 5,
                    "m_end": 10,
                    "id": 5,
                    "target": "The",
                    "m_begin": 10
                },
                {
                    "result": "Sun/SL",
                    "word_id": 6,
                    "m_end": 11,
                    "id": 6,
                    "target": "Sun",
                    "m_begin": 11
                },
                {
                    "result": "Also/SL",
                    "word_id": 7,
                    "m_end": 12,
                    "id": 7,
                    "target": "Also",
                    "m_begin": 12
                },
                {
                    "result": "Rises/SL+./SF",
                    "word_id": 8,
                    "m_end": 14,
                    "id": 8,
                    "target": "Rises.",
                    "m_begin": 13
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [],
                "d_entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 7,
                        "text": "1926년",
                        "start_offset": 2,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 20,
                        "text": "해는 또다시 떠오른다",
                        "start_offset": 9,
                        "source": "DE",
                        "type": "AFW_DOCUMENT",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 29,
                        "text": "The Sun",
                        "start_offset": 22,
                        "source": "DE",
                        "type": "OGG_MEDIA",
                        "uri": "",
                        "relation": 0
                    }
                ],
                "merge": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 7,
                        "text": "1926년",
                        "start_offset": 2,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 20,
                        "text": "해는 또다시 떠오른다",
                        "start_offset": 9,
                        "source": "DE",
                        "type": "AFW_DOCUMENT",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 29,
                        "text": "The Sun",
                        "start_offset": 22,
                        "source": "DE",
                        "type": "OGG_MEDIA",
                        "uri": "",
                        "relation": 0
                    }
                ]
            },
            "morp": [
                {
                    "lemma": "-",
                    "weight": 1,
                    "id": 0,
                    "position": 354,
                    "type": "SO"
                },
                {
                    "lemma": "1926",
                    "weight": 1,
                    "id": 1,
                    "position": 356,
                    "type": "SN"
                },
                {
                    "lemma": "년",
                    "weight": 0.414343,
                    "id": 2,
                    "position": 360,
                    "type": "NNB"
                },
                {
                    "lemma": "《",
                    "weight": 1,
                    "id": 3,
                    "position": 364,
                    "type": "SS"
                },
                {
                    "lemma": "해",
                    "weight": 0.000103867,
                    "id": 4,
                    "position": 367,
                    "type": "NNP"
                },
                {
                    "lemma": "는",
                    "weight": 0.0332677,
                    "id": 5,
                    "position": 370,
                    "type": "JX"
                },
                {
                    "lemma": "또다시",
                    "weight": 0.9,
                    "id": 6,
                    "position": 374,
                    "type": "MAG"
                },
                {
                    "lemma": "떠오르",
                    "weight": 0.9,
                    "id": 7,
                    "position": 384,
                    "type": "VV"
                },
                {
                    "lemma": "ㄴ다",
                    "weight": 0.0793196,
                    "id": 8,
                    "position": 390,
                    "type": "EF"
                },
                {
                    "lemma": "》",
                    "weight": 1,
                    "id": 9,
                    "position": 396,
                    "type": "SS"
                },
                {
                    "lemma": "The",
                    "weight": 1,
                    "id": 10,
                    "position": 400,
                    "type": "SL"
                },
                {
                    "lemma": "Sun",
                    "weight": 1,
                    "id": 11,
                    "position": 404,
                    "type": "SL"
                },
                {
                    "lemma": "Also",
                    "weight": 1,
                    "id": 12,
                    "position": 408,
                    "type": "SL"
                },
                {
                    "lemma": "Rises",
                    "weight": 1,
                    "id": 13,
                    "position": 413,
                    "type": "SL"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 14,
                    "position": 418,
                    "type": "SF"
                }
            ],
            "NE": [
                {
                    "weight": 0.682946,
                    "end": 2,
                    "id": 0,
                    "text": "1926년",
                    "type": "DT_YEAR",
                    "begin": 1,
                    "common_noun": 0
                },
                {
                    "weight": 0.944267,
                    "end": 8,
                    "id": 1,
                    "text": "해는 또다시 떠오른다",
                    "type": "AFW_DOCUMENT",
                    "begin": 4,
                    "common_noun": 0
                },
                {
                    "weight": 0.112072,
                    "end": 11,
                    "id": 2,
                    "text": "The Sun",
                    "type": "OGG_MEDIA",
                    "begin": 10,
                    "common_noun": 0
                }
            ],
            "id": 5,
            "text": "- 1926년 《해는 또다시 떠오른다》 The Sun Also Rises.",
            "word": [
                {
                    "end": 0,
                    "id": 0,
                    "text": "-",
                    "type": "",
                    "begin": 0
                },
                {
                    "end": 2,
                    "id": 1,
                    "text": "1926년",
                    "type": "",
                    "begin": 1
                },
                {
                    "end": 5,
                    "id": 2,
                    "text": "《해는",
                    "type": "",
                    "begin": 3
                },
                {
                    "end": 6,
                    "id": 3,
                    "text": "또다시",
                    "type": "",
                    "begin": 6
                },
                {
                    "end": 9,
                    "id": 4,
                    "text": "떠오른다》",
                    "type": "",
                    "begin": 7
                },
                {
                    "end": 10,
                    "id": 5,
                    "text": "The",
                    "type": "",
                    "begin": 10
                },
                {
                    "end": 11,
                    "id": 6,
                    "text": "Sun",
                    "type": "",
                    "begin": 11
                },
                {
                    "end": 12,
                    "id": 7,
                    "text": "Also",
                    "type": "",
                    "begin": 12
                },
                {
                    "end": 14,
                    "id": 8,
                    "text": "Rises.",
                    "type": "",
                    "begin": 13
                }
            ],
            "mod_NE": [
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 7,
                    "text": "1926년",
                    "start_offset": 2,
                    "type": "DT_YEAR",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 20,
                    "text": "해는 또다시 떠오른다",
                    "start_offset": 9,
                    "type": "AFW_DOCUMENT",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 29,
                    "text": "The Sun",
                    "start_offset": 22,
                    "type": "OGG_MEDIA",
                    "relation": 0
                }
            ]
        },
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 0,
                    "key_begin": 0,
                    "id": 0,
                    "label": "X",
                    "text": "-",
                    "head_phrase": 2,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 1,
                    "key_begin": 1,
                    "id": 1,
                    "label": "NP_AJT",
                    "text": "1929년",
                    "head_phrase": 2,
                    "begin": 1,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 8,
                    "key_begin": 2,
                    "id": 2,
                    "label": "NP",
                    "text": "P#0@X- P#1@AJT년 《무기여 잘 있거라》 A Farewell to Arms.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [
                        0,
                        1
                    ],
                    "element": []
                }
            ],
            "dependency": [
                {
                    "head": 8,
                    "mod": [],
                    "weight": 0.652819,
                    "id": 0,
                    "text": "-",
                    "label": "X"
                },
                {
                    "head": 4,
                    "mod": [],
                    "weight": 0.0516055,
                    "id": 1,
                    "text": "1929년",
                    "label": "NP_AJT"
                },
                {
                    "head": 4,
                    "mod": [],
                    "weight": 0.0213844,
                    "id": 2,
                    "text": "《무기여",
                    "label": "NP_SBJ"
                },
                {
                    "head": 4,
                    "mod": [],
                    "weight": 0.752902,
                    "id": 3,
                    "text": "잘",
                    "label": "AP"
                },
                {
                    "head": 8,
                    "mod": [
                        1,
                        2,
                        3
                    ],
                    "weight": 0.645219,
                    "id": 4,
                    "text": "있거라》",
                    "label": "VP"
                },
                {
                    "head": 6,
                    "mod": [],
                    "weight": 0.297697,
                    "id": 5,
                    "text": "A",
                    "label": "NP"
                },
                {
                    "head": 7,
                    "mod": [
                        5
                    ],
                    "weight": 0.417261,
                    "id": 6,
                    "text": "Farewell",
                    "label": "NP"
                },
                {
                    "head": 8,
                    "mod": [
                        6
                    ],
                    "weight": 0.746958,
                    "id": 7,
                    "text": "to",
                    "label": "NP"
                },
                {
                    "head": -1,
                    "mod": [
                        0,
                        4,
                        7
                    ],
                    "weight": 0.0000264244,
                    "id": 8,
                    "text": "Arms.",
                    "label": "NP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 0,
                    "id": 0,
                    "text": "-",
                    "position": 419,
                    "type": "SO",
                    "begin": 0
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 1,
                    "id": 1,
                    "text": "1929",
                    "position": 421,
                    "type": "SN",
                    "begin": 1
                },
                {
                    "scode": "02",
                    "weight": 4.30476,
                    "end": 2,
                    "id": 2,
                    "text": "년",
                    "position": 425,
                    "type": "NNB",
                    "begin": 2
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 3,
                    "id": 3,
                    "text": "《",
                    "position": 429,
                    "type": "SS",
                    "begin": 3
                },
                {
                    "scode": "05",
                    "weight": 3.55,
                    "end": 4,
                    "id": 4,
                    "text": "무기",
                    "position": 432,
                    "type": "NNG",
                    "begin": 4
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 5,
                    "id": 5,
                    "text": "여",
                    "position": 438,
                    "type": "JKV",
                    "begin": 5
                },
                {
                    "scode": "02",
                    "weight": 4.4,
                    "end": 6,
                    "id": 6,
                    "text": "잘",
                    "position": 442,
                    "type": "MAG",
                    "begin": 6
                },
                {
                    "scode": "01",
                    "weight": 4.4,
                    "end": 7,
                    "id": 7,
                    "text": "있",
                    "position": 446,
                    "type": "VA",
                    "begin": 7
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 8,
                    "id": 8,
                    "text": "거라",
                    "position": 449,
                    "type": "EF",
                    "begin": 8
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 9,
                    "id": 9,
                    "text": "》",
                    "position": 455,
                    "type": "SS",
                    "begin": 9
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 10,
                    "id": 10,
                    "text": "A",
                    "position": 459,
                    "type": "SL",
                    "begin": 10
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 11,
                    "id": 11,
                    "text": "Farewell",
                    "position": 461,
                    "type": "SL",
                    "begin": 11
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 12,
                    "id": 12,
                    "text": "to",
                    "position": 470,
                    "type": "SL",
                    "begin": 12
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 13,
                    "id": 13,
                    "text": "Arms",
                    "position": 473,
                    "type": "SL",
                    "begin": 13
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 14,
                    "id": 14,
                    "text": ".",
                    "position": 477,
                    "type": "SF",
                    "begin": 14
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "-/SO",
                    "word_id": 0,
                    "m_end": 0,
                    "id": 0,
                    "target": "-",
                    "m_begin": 0
                },
                {
                    "result": "1929/SN+년/NNB",
                    "word_id": 1,
                    "m_end": 2,
                    "id": 1,
                    "target": "1929년",
                    "m_begin": 1
                },
                {
                    "result": "《/SS+무기/NNG+여/JKV",
                    "word_id": 2,
                    "m_end": 5,
                    "id": 2,
                    "target": "《무기여",
                    "m_begin": 3
                },
                {
                    "result": "잘/MAG",
                    "word_id": 3,
                    "m_end": 6,
                    "id": 3,
                    "target": "잘",
                    "m_begin": 6
                },
                {
                    "result": "있/VA+거라/EF+》/SS",
                    "word_id": 4,
                    "m_end": 9,
                    "id": 4,
                    "target": "있거라》",
                    "m_begin": 7
                },
                {
                    "result": "A/SL",
                    "word_id": 5,
                    "m_end": 10,
                    "id": 5,
                    "target": "A",
                    "m_begin": 10
                },
                {
                    "result": "Farewell/SL",
                    "word_id": 6,
                    "m_end": 11,
                    "id": 6,
                    "target": "Farewell",
                    "m_begin": 11
                },
                {
                    "result": "to/SL",
                    "word_id": 7,
                    "m_end": 12,
                    "id": 7,
                    "target": "to",
                    "m_begin": 12
                },
                {
                    "result": "Arms/SL+./SF",
                    "word_id": 8,
                    "m_end": 14,
                    "id": 8,
                    "target": "Arms.",
                    "m_begin": 13
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "en_entity": "A_Farewell_to_Arms",
                        "link": 0,
                        "end_offset": 18,
                        "text": "무기여 잘 있거라",
                        "start_offset": 9,
                        "source": "NER",
                        "type": "AFW_DOCUMENT",
                        "uri": "http://ko.dbpedia.org/resource/무기여_잘_있거라",
                        "relation": 0
                    }
                ],
                "d_entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 7,
                        "text": "1929년",
                        "start_offset": 2,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    }
                ],
                "merge": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 7,
                        "text": "1929년",
                        "start_offset": 2,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 18,
                        "text": "무기여 잘 있거라",
                        "start_offset": 9,
                        "source": "NER",
                        "type": "AFW_DOCUMENT",
                        "uri": "http://ko.dbpedia.org/resource/무기여_잘_있거라",
                        "relation": 0
                    }
                ]
            },
            "morp": [
                {
                    "lemma": "-",
                    "weight": 1,
                    "id": 0,
                    "position": 419,
                    "type": "SO"
                },
                {
                    "lemma": "1929",
                    "weight": 1,
                    "id": 1,
                    "position": 421,
                    "type": "SN"
                },
                {
                    "lemma": "년",
                    "weight": 0.414343,
                    "id": 2,
                    "position": 425,
                    "type": "NNB"
                },
                {
                    "lemma": "《",
                    "weight": 1,
                    "id": 3,
                    "position": 429,
                    "type": "SS"
                },
                {
                    "lemma": "무기",
                    "weight": 0.199771,
                    "id": 4,
                    "position": 432,
                    "type": "NNG"
                },
                {
                    "lemma": "여",
                    "weight": 0.0001,
                    "id": 5,
                    "position": 438,
                    "type": "JKV"
                },
                {
                    "lemma": "잘",
                    "weight": 0.011005,
                    "id": 6,
                    "position": 442,
                    "type": "MAG"
                },
                {
                    "lemma": "있",
                    "weight": 0.0682304,
                    "id": 7,
                    "position": 446,
                    "type": "VA"
                },
                {
                    "lemma": "거라",
                    "weight": 0.120894,
                    "id": 8,
                    "position": 449,
                    "type": "EF"
                },
                {
                    "lemma": "》",
                    "weight": 1,
                    "id": 9,
                    "position": 455,
                    "type": "SS"
                },
                {
                    "lemma": "A",
                    "weight": 1,
                    "id": 10,
                    "position": 459,
                    "type": "SL"
                },
                {
                    "lemma": "Farewell",
                    "weight": 1,
                    "id": 11,
                    "position": 461,
                    "type": "SL"
                },
                {
                    "lemma": "to",
                    "weight": 1,
                    "id": 12,
                    "position": 470,
                    "type": "SL"
                },
                {
                    "lemma": "Arms",
                    "weight": 1,
                    "id": 13,
                    "position": 473,
                    "type": "SL"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 14,
                    "position": 477,
                    "type": "SF"
                }
            ],
            "NE": [
                {
                    "weight": 0.655542,
                    "end": 2,
                    "id": 0,
                    "text": "1929년",
                    "type": "DT_YEAR",
                    "begin": 1,
                    "common_noun": 0
                },
                {
                    "weight": 0.992118,
                    "end": 8,
                    "id": 1,
                    "text": "무기여 잘 있거라",
                    "type": "AFW_DOCUMENT",
                    "begin": 4,
                    "common_noun": 0
                }
            ],
            "id": 6,
            "text": "- 1929년 《무기여 잘 있거라》 A Farewell to Arms.",
            "word": [
                {
                    "end": 0,
                    "id": 0,
                    "text": "-",
                    "type": "",
                    "begin": 0
                },
                {
                    "end": 2,
                    "id": 1,
                    "text": "1929년",
                    "type": "",
                    "begin": 1
                },
                {
                    "end": 5,
                    "id": 2,
                    "text": "《무기여",
                    "type": "",
                    "begin": 3
                },
                {
                    "end": 6,
                    "id": 3,
                    "text": "잘",
                    "type": "",
                    "begin": 6
                },
                {
                    "end": 9,
                    "id": 4,
                    "text": "있거라》",
                    "type": "",
                    "begin": 7
                },
                {
                    "end": 10,
                    "id": 5,
                    "text": "A",
                    "type": "",
                    "begin": 10
                },
                {
                    "end": 11,
                    "id": 6,
                    "text": "Farewell",
                    "type": "",
                    "begin": 11
                },
                {
                    "end": 12,
                    "id": 7,
                    "text": "to",
                    "type": "",
                    "begin": 12
                },
                {
                    "end": 14,
                    "id": 8,
                    "text": "Arms.",
                    "type": "",
                    "begin": 13
                }
            ],
            "mod_NE": [
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 7,
                    "text": "1929년",
                    "start_offset": 2,
                    "type": "DT_YEAR",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 18,
                    "text": "무기여 잘 있거라",
                    "start_offset": 9,
                    "type": "AFW_DOCUMENT",
                    "relation": 0
                }
            ]
        },
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 9,
                    "key_begin": 0,
                    "id": 0,
                    "label": "NP",
                    "text": "- 1940년 《누구를 위하여 종은 울리나》For Whom the Bell Tolls.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": []
                }
            ],
            "dependency": [
                {
                    "head": 1,
                    "mod": [],
                    "weight": 0.0340594,
                    "id": 0,
                    "text": "-",
                    "label": "X"
                },
                {
                    "head": 9,
                    "mod": [
                        0
                    ],
                    "weight": 0.283356,
                    "id": 1,
                    "text": "1940년",
                    "label": "NP"
                },
                {
                    "head": 3,
                    "mod": [],
                    "weight": 0.675865,
                    "id": 2,
                    "text": "《누구를",
                    "label": "NP_OBJ"
                },
                {
                    "head": 5,
                    "mod": [
                        2
                    ],
                    "weight": 0.744506,
                    "id": 3,
                    "text": "위하여",
                    "label": "VP"
                },
                {
                    "head": 5,
                    "mod": [],
                    "weight": 0.617308,
                    "id": 4,
                    "text": "종은",
                    "label": "NP_SBJ"
                },
                {
                    "head": 7,
                    "mod": [
                        3,
                        4
                    ],
                    "weight": 0.577894,
                    "id": 5,
                    "text": "울리나》For",
                    "label": "NP"
                },
                {
                    "head": 7,
                    "mod": [],
                    "weight": 0.707969,
                    "id": 6,
                    "text": "Whom",
                    "label": "NP"
                },
                {
                    "head": 8,
                    "mod": [
                        5,
                        6
                    ],
                    "weight": 0.702517,
                    "id": 7,
                    "text": "the",
                    "label": "NP"
                },
                {
                    "head": 9,
                    "mod": [
                        7
                    ],
                    "weight": 0.762587,
                    "id": 8,
                    "text": "Bell",
                    "label": "NP"
                },
                {
                    "head": -1,
                    "mod": [
                        1,
                        8
                    ],
                    "weight": 0.00053499,
                    "id": 9,
                    "text": "Tolls.",
                    "label": "NP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 0,
                    "id": 0,
                    "text": "-",
                    "position": 478,
                    "type": "SO",
                    "begin": 0
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 1,
                    "id": 1,
                    "text": "1940",
                    "position": 480,
                    "type": "SN",
                    "begin": 1
                },
                {
                    "scode": "02",
                    "weight": 2.16296,
                    "end": 2,
                    "id": 2,
                    "text": "년",
                    "position": 484,
                    "type": "NNB",
                    "begin": 2
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 3,
                    "id": 3,
                    "text": "《",
                    "position": 488,
                    "type": "SS",
                    "begin": 3
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 4,
                    "id": 4,
                    "text": "누구",
                    "position": 491,
                    "type": "NP",
                    "begin": 4
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 5,
                    "id": 5,
                    "text": "를",
                    "position": 497,
                    "type": "JKO",
                    "begin": 5
                },
                {
                    "scode": "01",
                    "weight": 4.4,
                    "end": 6,
                    "id": 6,
                    "text": "위하",
                    "position": 501,
                    "type": "VV",
                    "begin": 6
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 7,
                    "id": 7,
                    "text": "어",
                    "position": 507,
                    "type": "EC",
                    "begin": 7
                },
                {
                    "scode": "13",
                    "weight": 6.12988,
                    "end": 8,
                    "id": 8,
                    "text": "종",
                    "position": 511,
                    "type": "NNG",
                    "begin": 8
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 9,
                    "id": 9,
                    "text": "은",
                    "position": 514,
                    "type": "JX",
                    "begin": 9
                },
                {
                    "scode": "01",
                    "weight": 4.09676,
                    "end": 10,
                    "id": 10,
                    "text": "울리",
                    "position": 518,
                    "type": "VV",
                    "begin": 10
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 11,
                    "id": 11,
                    "text": "나",
                    "position": 524,
                    "type": "EF",
                    "begin": 11
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 12,
                    "id": 12,
                    "text": "》",
                    "position": 527,
                    "type": "SS",
                    "begin": 12
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 13,
                    "id": 13,
                    "text": "For",
                    "position": 530,
                    "type": "SL",
                    "begin": 13
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 14,
                    "id": 14,
                    "text": "Whom",
                    "position": 534,
                    "type": "SL",
                    "begin": 14
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 15,
                    "id": 15,
                    "text": "the",
                    "position": 539,
                    "type": "SL",
                    "begin": 15
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 16,
                    "id": 16,
                    "text": "Bell",
                    "position": 543,
                    "type": "SL",
                    "begin": 16
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 17,
                    "id": 17,
                    "text": "Tolls",
                    "position": 548,
                    "type": "SL",
                    "begin": 17
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 18,
                    "id": 18,
                    "text": ".",
                    "position": 553,
                    "type": "SF",
                    "begin": 18
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "-/SO",
                    "word_id": 0,
                    "m_end": 0,
                    "id": 0,
                    "target": "-",
                    "m_begin": 0
                },
                {
                    "result": "1940/SN+년/NNB",
                    "word_id": 1,
                    "m_end": 2,
                    "id": 1,
                    "target": "1940년",
                    "m_begin": 1
                },
                {
                    "result": "《/SS+누구/NP+를/JKO",
                    "word_id": 2,
                    "m_end": 5,
                    "id": 2,
                    "target": "《누구를",
                    "m_begin": 3
                },
                {
                    "result": "위하/VV+어/EC",
                    "word_id": 3,
                    "m_end": 7,
                    "id": 3,
                    "target": "위하여",
                    "m_begin": 6
                },
                {
                    "result": "종/NNG+은/JX",
                    "word_id": 4,
                    "m_end": 9,
                    "id": 4,
                    "target": "종은",
                    "m_begin": 8
                },
                {
                    "result": "울리/VV+나/EF+》/SS+For/SL",
                    "word_id": 5,
                    "m_end": 13,
                    "id": 5,
                    "target": "울리나》For",
                    "m_begin": 10
                },
                {
                    "result": "Whom/SL",
                    "word_id": 6,
                    "m_end": 14,
                    "id": 6,
                    "target": "Whom",
                    "m_begin": 14
                },
                {
                    "result": "the/SL",
                    "word_id": 7,
                    "m_end": 15,
                    "id": 7,
                    "target": "the",
                    "m_begin": 15
                },
                {
                    "result": "Bell/SL",
                    "word_id": 8,
                    "m_end": 16,
                    "id": 8,
                    "target": "Bell",
                    "m_begin": 16
                },
                {
                    "result": "Tolls/SL+./SF",
                    "word_id": 9,
                    "m_end": 18,
                    "id": 9,
                    "target": "Tolls.",
                    "m_begin": 17
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "en_entity": "For_Whom_the_Bell_Tolls",
                        "link": 0,
                        "end_offset": 23,
                        "text": "누구를 위하여 종은 울리나",
                        "start_offset": 9,
                        "source": "NER",
                        "type": "AFW_DOCUMENT",
                        "uri": "http://ko.dbpedia.org/resource/누구를_위하여_종은_울리나",
                        "relation": 0
                    }
                ],
                "d_entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 7,
                        "text": "1940년",
                        "start_offset": 2,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 36,
                        "text": "For Whom the",
                        "start_offset": 24,
                        "source": "DE",
                        "type": "AFW_DOCUMENT",
                        "uri": "",
                        "relation": 0
                    }
                ],
                "merge": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 7,
                        "text": "1940년",
                        "start_offset": 2,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 23,
                        "text": "누구를 위하여 종은 울리나",
                        "start_offset": 9,
                        "source": "NER",
                        "type": "AFW_DOCUMENT",
                        "uri": "http://ko.dbpedia.org/resource/누구를_위하여_종은_울리나",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 36,
                        "text": "For Whom the",
                        "start_offset": 24,
                        "source": "DE",
                        "type": "AFW_DOCUMENT",
                        "uri": "",
                        "relation": 0
                    }
                ]
            },
            "morp": [
                {
                    "lemma": "-",
                    "weight": 1,
                    "id": 0,
                    "position": 478,
                    "type": "SO"
                },
                {
                    "lemma": "1940",
                    "weight": 1,
                    "id": 1,
                    "position": 480,
                    "type": "SN"
                },
                {
                    "lemma": "년",
                    "weight": 0.414343,
                    "id": 2,
                    "position": 484,
                    "type": "NNB"
                },
                {
                    "lemma": "《",
                    "weight": 1,
                    "id": 3,
                    "position": 488,
                    "type": "SS"
                },
                {
                    "lemma": "누구",
                    "weight": 0.9,
                    "id": 4,
                    "position": 491,
                    "type": "NP"
                },
                {
                    "lemma": "를",
                    "weight": 0.0808985,
                    "id": 5,
                    "position": 497,
                    "type": "JKO"
                },
                {
                    "lemma": "위하",
                    "weight": 0.778555,
                    "id": 6,
                    "position": 501,
                    "type": "VV"
                },
                {
                    "lemma": "어",
                    "weight": 0.41831,
                    "id": 7,
                    "position": 507,
                    "type": "EC"
                },
                {
                    "lemma": "종",
                    "weight": 0.213242,
                    "id": 8,
                    "position": 511,
                    "type": "NNG"
                },
                {
                    "lemma": "은",
                    "weight": 0.0449928,
                    "id": 9,
                    "position": 514,
                    "type": "JX"
                },
                {
                    "lemma": "울리",
                    "weight": 0.147105,
                    "id": 10,
                    "position": 518,
                    "type": "VV"
                },
                {
                    "lemma": "나",
                    "weight": 0.00177268,
                    "id": 11,
                    "position": 524,
                    "type": "EF"
                },
                {
                    "lemma": "》",
                    "weight": 1,
                    "id": 12,
                    "position": 527,
                    "type": "SS"
                },
                {
                    "lemma": "For",
                    "weight": 1,
                    "id": 13,
                    "position": 530,
                    "type": "SL"
                },
                {
                    "lemma": "Whom",
                    "weight": 1,
                    "id": 14,
                    "position": 534,
                    "type": "SL"
                },
                {
                    "lemma": "the",
                    "weight": 1,
                    "id": 15,
                    "position": 539,
                    "type": "SL"
                },
                {
                    "lemma": "Bell",
                    "weight": 1,
                    "id": 16,
                    "position": 543,
                    "type": "SL"
                },
                {
                    "lemma": "Tolls",
                    "weight": 1,
                    "id": 17,
                    "position": 548,
                    "type": "SL"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 18,
                    "position": 553,
                    "type": "SF"
                }
            ],
            "NE": [
                {
                    "weight": 0.680672,
                    "end": 2,
                    "id": 0,
                    "text": "1940년",
                    "type": "DT_YEAR",
                    "begin": 1,
                    "common_noun": 0
                },
                {
                    "weight": 0.990549,
                    "end": 11,
                    "id": 1,
                    "text": "누구를 위하여 종은 울리나",
                    "type": "AFW_DOCUMENT",
                    "begin": 4,
                    "common_noun": 0
                },
                {
                    "weight": 0.251799,
                    "end": 15,
                    "id": 2,
                    "text": "For Whom the",
                    "type": "AFW_DOCUMENT",
                    "begin": 13,
                    "common_noun": 0
                }
            ],
            "id": 7,
            "text": "- 1940년 《누구를 위하여 종은 울리나》For Whom the Bell Tolls.",
            "word": [
                {
                    "end": 0,
                    "id": 0,
                    "text": "-",
                    "type": "",
                    "begin": 0
                },
                {
                    "end": 2,
                    "id": 1,
                    "text": "1940년",
                    "type": "",
                    "begin": 1
                },
                {
                    "end": 5,
                    "id": 2,
                    "text": "《누구를",
                    "type": "",
                    "begin": 3
                },
                {
                    "end": 7,
                    "id": 3,
                    "text": "위하여",
                    "type": "",
                    "begin": 6
                },
                {
                    "end": 9,
                    "id": 4,
                    "text": "종은",
                    "type": "",
                    "begin": 8
                },
                {
                    "end": 13,
                    "id": 5,
                    "text": "울리나》For",
                    "type": "",
                    "begin": 10
                },
                {
                    "end": 14,
                    "id": 6,
                    "text": "Whom",
                    "type": "",
                    "begin": 14
                },
                {
                    "end": 15,
                    "id": 7,
                    "text": "the",
                    "type": "",
                    "begin": 15
                },
                {
                    "end": 16,
                    "id": 8,
                    "text": "Bell",
                    "type": "",
                    "begin": 16
                },
                {
                    "end": 18,
                    "id": 9,
                    "text": "Tolls.",
                    "type": "",
                    "begin": 17
                }
            ],
            "mod_NE": [
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 7,
                    "text": "1940년",
                    "start_offset": 2,
                    "type": "DT_YEAR",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 23,
                    "text": "누구를 위하여 종은 울리나",
                    "start_offset": 9,
                    "type": "AFW_DOCUMENT",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 36,
                    "text": "For Whom the",
                    "start_offset": 24,
                    "type": "AFW_DOCUMENT",
                    "relation": 0
                }
            ]
        },
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 0,
                    "key_begin": 0,
                    "id": 0,
                    "label": "X",
                    "text": "-",
                    "head_phrase": 3,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 1,
                    "key_begin": 1,
                    "id": 1,
                    "label": "NP",
                    "text": "1950년",
                    "head_phrase": 3,
                    "begin": 1,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 4,
                    "key_begin": 2,
                    "id": 2,
                    "label": "NP_AJT",
                    "text": "《강 건너 숲속으로》",
                    "head_phrase": 3,
                    "begin": 2,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 11,
                    "key_begin": 5,
                    "id": 3,
                    "label": "NP",
                    "text": "P#0@X- P#1@NP년 P#2@AJT으로》 Across the River and Into the Trees.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [
                        0,
                        1,
                        2
                    ],
                    "element": []
                }
            ],
            "dependency": [
                {
                    "head": 11,
                    "mod": [],
                    "weight": 0.66501,
                    "id": 0,
                    "text": "-",
                    "label": "X"
                },
                {
                    "head": 11,
                    "mod": [],
                    "weight": 0.280293,
                    "id": 1,
                    "text": "1950년",
                    "label": "NP"
                },
                {
                    "head": 3,
                    "mod": [],
                    "weight": 0.627813,
                    "id": 2,
                    "text": "《강",
                    "label": "NP"
                },
                {
                    "head": 4,
                    "mod": [
                        2
                    ],
                    "weight": 0.458358,
                    "id": 3,
                    "text": "건너",
                    "label": "NP"
                },
                {
                    "head": 11,
                    "mod": [
                        3
                    ],
                    "weight": 0.20469,
                    "id": 4,
                    "text": "숲속으로》",
                    "label": "NP_AJT"
                },
                {
                    "head": 6,
                    "mod": [],
                    "weight": 0.159777,
                    "id": 5,
                    "text": "Across",
                    "label": "NP"
                },
                {
                    "head": 7,
                    "mod": [
                        5
                    ],
                    "weight": 0.0563774,
                    "id": 6,
                    "text": "the",
                    "label": "NP"
                },
                {
                    "head": 8,
                    "mod": [
                        6
                    ],
                    "weight": 0.422287,
                    "id": 7,
                    "text": "River",
                    "label": "NP"
                },
                {
                    "head": 11,
                    "mod": [
                        7
                    ],
                    "weight": 0.80587,
                    "id": 8,
                    "text": "and",
                    "label": "NP"
                },
                {
                    "head": 10,
                    "mod": [],
                    "weight": 0.0947232,
                    "id": 9,
                    "text": "Into",
                    "label": "NP"
                },
                {
                    "head": 11,
                    "mod": [
                        9
                    ],
                    "weight": 0.77664,
                    "id": 10,
                    "text": "the",
                    "label": "NP"
                },
                {
                    "head": -1,
                    "mod": [
                        0,
                        1,
                        4,
                        8,
                        10
                    ],
                    "weight": 0.00000201952,
                    "id": 11,
                    "text": "Trees.",
                    "label": "NP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 0,
                    "id": 0,
                    "text": "-",
                    "position": 554,
                    "type": "SO",
                    "begin": 0
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 1,
                    "id": 1,
                    "text": "1950",
                    "position": 556,
                    "type": "SN",
                    "begin": 1
                },
                {
                    "scode": "02",
                    "weight": 5.5,
                    "end": 2,
                    "id": 2,
                    "text": "년",
                    "position": 560,
                    "type": "NNB",
                    "begin": 2
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 3,
                    "id": 3,
                    "text": "《",
                    "position": 564,
                    "type": "SS",
                    "begin": 3
                },
                {
                    "scode": "04",
                    "weight": 1,
                    "end": 4,
                    "id": 4,
                    "text": "강",
                    "position": 567,
                    "type": "NNP",
                    "begin": 4
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 5,
                    "id": 5,
                    "text": "건너",
                    "position": 571,
                    "type": "VV",
                    "begin": 5
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 6,
                    "id": 6,
                    "text": "어",
                    "position": 574,
                    "type": "EC",
                    "begin": 6
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 7,
                    "id": 7,
                    "text": "숲속",
                    "position": 578,
                    "type": "NNP",
                    "begin": 7
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 8,
                    "id": 8,
                    "text": "으로",
                    "position": 584,
                    "type": "JKB",
                    "begin": 8
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 9,
                    "id": 9,
                    "text": "》",
                    "position": 590,
                    "type": "SS",
                    "begin": 9
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 10,
                    "id": 10,
                    "text": "Across",
                    "position": 594,
                    "type": "SL",
                    "begin": 10
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 11,
                    "id": 11,
                    "text": "the",
                    "position": 601,
                    "type": "SL",
                    "begin": 11
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 12,
                    "id": 12,
                    "text": "River",
                    "position": 605,
                    "type": "SL",
                    "begin": 12
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 13,
                    "id": 13,
                    "text": "and",
                    "position": 611,
                    "type": "SL",
                    "begin": 13
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 14,
                    "id": 14,
                    "text": "Into",
                    "position": 615,
                    "type": "SL",
                    "begin": 14
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 15,
                    "id": 15,
                    "text": "the",
                    "position": 620,
                    "type": "SL",
                    "begin": 15
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 16,
                    "id": 16,
                    "text": "Trees",
                    "position": 624,
                    "type": "SL",
                    "begin": 16
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 17,
                    "id": 17,
                    "text": ".",
                    "position": 629,
                    "type": "SF",
                    "begin": 17
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "-/SO",
                    "word_id": 0,
                    "m_end": 0,
                    "id": 0,
                    "target": "-",
                    "m_begin": 0
                },
                {
                    "result": "1950/SN+년/NNB",
                    "word_id": 1,
                    "m_end": 2,
                    "id": 1,
                    "target": "1950년",
                    "m_begin": 1
                },
                {
                    "result": "《/SS+강/NNG",
                    "word_id": 2,
                    "m_end": 4,
                    "id": 2,
                    "target": "《강",
                    "m_begin": 3
                },
                {
                    "result": "건너/VV+어/EC",
                    "word_id": 3,
                    "m_end": 6,
                    "id": 3,
                    "target": "건너",
                    "m_begin": 5
                },
                {
                    "result": "숲속/NNG+으로/JKB+》/SS",
                    "word_id": 4,
                    "m_end": 9,
                    "id": 4,
                    "target": "숲속으로》",
                    "m_begin": 7
                },
                {
                    "result": "Across/SL",
                    "word_id": 5,
                    "m_end": 10,
                    "id": 5,
                    "target": "Across",
                    "m_begin": 10
                },
                {
                    "result": "the/SL",
                    "word_id": 6,
                    "m_end": 11,
                    "id": 6,
                    "target": "the",
                    "m_begin": 11
                },
                {
                    "result": "River/SL",
                    "word_id": 7,
                    "m_end": 12,
                    "id": 7,
                    "target": "River",
                    "m_begin": 12
                },
                {
                    "result": "and/SL",
                    "word_id": 8,
                    "m_end": 13,
                    "id": 8,
                    "target": "and",
                    "m_begin": 13
                },
                {
                    "result": "Into/SL",
                    "word_id": 9,
                    "m_end": 14,
                    "id": 9,
                    "target": "Into",
                    "m_begin": 14
                },
                {
                    "result": "the/SL",
                    "word_id": 10,
                    "m_end": 15,
                    "id": 10,
                    "target": "the",
                    "m_begin": 15
                },
                {
                    "result": "Trees/SL+./SF",
                    "word_id": 11,
                    "m_end": 17,
                    "id": 11,
                    "target": "Trees.",
                    "m_begin": 16
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [],
                "d_entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 7,
                        "text": "1950년",
                        "start_offset": 2,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 18,
                        "text": "강 건너 숲속으로",
                        "start_offset": 9,
                        "source": "DE",
                        "type": "AFW_DOCUMENT",
                        "uri": "",
                        "relation": 0
                    }
                ],
                "merge": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 7,
                        "text": "1950년",
                        "start_offset": 2,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 18,
                        "text": "강 건너 숲속으로",
                        "start_offset": 9,
                        "source": "DE",
                        "type": "AFW_DOCUMENT",
                        "uri": "",
                        "relation": 0
                    }
                ]
            },
            "morp": [
                {
                    "lemma": "-",
                    "weight": 1,
                    "id": 0,
                    "position": 554,
                    "type": "SO"
                },
                {
                    "lemma": "1950",
                    "weight": 1,
                    "id": 1,
                    "position": 556,
                    "type": "SN"
                },
                {
                    "lemma": "년",
                    "weight": 0.414343,
                    "id": 2,
                    "position": 560,
                    "type": "NNB"
                },
                {
                    "lemma": "《",
                    "weight": 1,
                    "id": 3,
                    "position": 564,
                    "type": "SS"
                },
                {
                    "lemma": "강",
                    "weight": 0.0100594,
                    "id": 4,
                    "position": 567,
                    "type": "NNP"
                },
                {
                    "lemma": "건너",
                    "weight": 0.00214735,
                    "id": 5,
                    "position": 571,
                    "type": "VV"
                },
                {
                    "lemma": "어",
                    "weight": 0.41831,
                    "id": 6,
                    "position": 574,
                    "type": "EC"
                },
                {
                    "lemma": "숲속",
                    "weight": 0.05,
                    "id": 7,
                    "position": 578,
                    "type": "NNP"
                },
                {
                    "lemma": "으로",
                    "weight": 0.0823853,
                    "id": 8,
                    "position": 584,
                    "type": "JKB"
                },
                {
                    "lemma": "》",
                    "weight": 1,
                    "id": 9,
                    "position": 590,
                    "type": "SS"
                },
                {
                    "lemma": "Across",
                    "weight": 1,
                    "id": 10,
                    "position": 594,
                    "type": "SL"
                },
                {
                    "lemma": "the",
                    "weight": 1,
                    "id": 11,
                    "position": 601,
                    "type": "SL"
                },
                {
                    "lemma": "River",
                    "weight": 1,
                    "id": 12,
                    "position": 605,
                    "type": "SL"
                },
                {
                    "lemma": "and",
                    "weight": 1,
                    "id": 13,
                    "position": 611,
                    "type": "SL"
                },
                {
                    "lemma": "Into",
                    "weight": 1,
                    "id": 14,
                    "position": 615,
                    "type": "SL"
                },
                {
                    "lemma": "the",
                    "weight": 1,
                    "id": 15,
                    "position": 620,
                    "type": "SL"
                },
                {
                    "lemma": "Trees",
                    "weight": 1,
                    "id": 16,
                    "position": 624,
                    "type": "SL"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 17,
                    "position": 629,
                    "type": "SF"
                }
            ],
            "NE": [
                {
                    "weight": 0.707948,
                    "end": 2,
                    "id": 0,
                    "text": "1950년",
                    "type": "DT_YEAR",
                    "begin": 1,
                    "common_noun": 0
                },
                {
                    "weight": 0.381219,
                    "end": 8,
                    "id": 1,
                    "text": "강 건너 숲속으로",
                    "type": "AFW_DOCUMENT",
                    "begin": 4,
                    "common_noun": 0
                }
            ],
            "id": 8,
            "text": "- 1950년 《강 건너 숲속으로》 Across the River and Into the Trees.",
            "word": [
                {
                    "end": 0,
                    "id": 0,
                    "text": "-",
                    "type": "",
                    "begin": 0
                },
                {
                    "end": 2,
                    "id": 1,
                    "text": "1950년",
                    "type": "",
                    "begin": 1
                },
                {
                    "end": 4,
                    "id": 2,
                    "text": "《강",
                    "type": "",
                    "begin": 3
                },
                {
                    "end": 6,
                    "id": 3,
                    "text": "건너",
                    "type": "",
                    "begin": 5
                },
                {
                    "end": 9,
                    "id": 4,
                    "text": "숲속으로》",
                    "type": "",
                    "begin": 7
                },
                {
                    "end": 10,
                    "id": 5,
                    "text": "Across",
                    "type": "",
                    "begin": 10
                },
                {
                    "end": 11,
                    "id": 6,
                    "text": "the",
                    "type": "",
                    "begin": 11
                },
                {
                    "end": 12,
                    "id": 7,
                    "text": "River",
                    "type": "",
                    "begin": 12
                },
                {
                    "end": 13,
                    "id": 8,
                    "text": "and",
                    "type": "",
                    "begin": 13
                },
                {
                    "end": 14,
                    "id": 9,
                    "text": "Into",
                    "type": "",
                    "begin": 14
                },
                {
                    "end": 15,
                    "id": 10,
                    "text": "the",
                    "type": "",
                    "begin": 15
                },
                {
                    "end": 17,
                    "id": 11,
                    "text": "Trees.",
                    "type": "",
                    "begin": 16
                }
            ],
            "mod_NE": [
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 7,
                    "text": "1950년",
                    "start_offset": 2,
                    "type": "DT_YEAR",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 18,
                    "text": "강 건너 숲속으로",
                    "start_offset": 9,
                    "type": "AFW_DOCUMENT",
                    "relation": 0
                }
            ]
        },
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 9,
                    "key_begin": 0,
                    "id": 0,
                    "label": "NP",
                    "text": "- 1952년 《노인과 바다》 The Old Man and the Sea.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": []
                }
            ],
            "dependency": [
                {
                    "head": 9,
                    "mod": [],
                    "weight": 0.66501,
                    "id": 0,
                    "text": "-",
                    "label": "X"
                },
                {
                    "head": 9,
                    "mod": [],
                    "weight": 0.254698,
                    "id": 1,
                    "text": "1952년",
                    "label": "NP"
                },
                {
                    "head": 3,
                    "mod": [],
                    "weight": 0.702344,
                    "id": 2,
                    "text": "《노인과",
                    "label": "NP_CNJ"
                },
                {
                    "head": 9,
                    "mod": [
                        2
                    ],
                    "weight": 0.70341,
                    "id": 3,
                    "text": "바다》",
                    "label": "NP"
                },
                {
                    "head": 5,
                    "mod": [],
                    "weight": 0.168505,
                    "id": 4,
                    "text": "The",
                    "label": "NP"
                },
                {
                    "head": 6,
                    "mod": [
                        4
                    ],
                    "weight": 0.018956,
                    "id": 5,
                    "text": "Old",
                    "label": "NP"
                },
                {
                    "head": 7,
                    "mod": [
                        5
                    ],
                    "weight": 0.517177,
                    "id": 6,
                    "text": "Man",
                    "label": "NP"
                },
                {
                    "head": 9,
                    "mod": [
                        6
                    ],
                    "weight": 0.81094,
                    "id": 7,
                    "text": "and",
                    "label": "NP"
                },
                {
                    "head": 9,
                    "mod": [],
                    "weight": 0.791522,
                    "id": 8,
                    "text": "the",
                    "label": "NP"
                },
                {
                    "head": -1,
                    "mod": [
                        0,
                        1,
                        3,
                        7,
                        8
                    ],
                    "weight": 0.0000725042,
                    "id": 9,
                    "text": "Sea.",
                    "label": "NP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 0,
                    "id": 0,
                    "text": "-",
                    "position": 630,
                    "type": "SO",
                    "begin": 0
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 1,
                    "id": 1,
                    "text": "1952",
                    "position": 632,
                    "type": "SN",
                    "begin": 1
                },
                {
                    "scode": "02",
                    "weight": 3.2,
                    "end": 2,
                    "id": 2,
                    "text": "년",
                    "position": 636,
                    "type": "NNB",
                    "begin": 2
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 3,
                    "id": 3,
                    "text": "《",
                    "position": 640,
                    "type": "SS",
                    "begin": 3
                },
                {
                    "scode": "01",
                    "weight": 2.2,
                    "end": 4,
                    "id": 4,
                    "text": "노인",
                    "position": 643,
                    "type": "NNG",
                    "begin": 4
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 5,
                    "id": 5,
                    "text": "과",
                    "position": 649,
                    "type": "JC",
                    "begin": 5
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 6,
                    "id": 6,
                    "text": "바다",
                    "position": 653,
                    "type": "NNG",
                    "begin": 6
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 7,
                    "id": 7,
                    "text": "》",
                    "position": 659,
                    "type": "SS",
                    "begin": 7
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 8,
                    "id": 8,
                    "text": "The",
                    "position": 663,
                    "type": "SL",
                    "begin": 8
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 9,
                    "id": 9,
                    "text": "Old",
                    "position": 667,
                    "type": "SL",
                    "begin": 9
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 10,
                    "id": 10,
                    "text": "Man",
                    "position": 671,
                    "type": "SL",
                    "begin": 10
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 11,
                    "id": 11,
                    "text": "and",
                    "position": 675,
                    "type": "SL",
                    "begin": 11
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 12,
                    "id": 12,
                    "text": "the",
                    "position": 679,
                    "type": "SL",
                    "begin": 12
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 13,
                    "id": 13,
                    "text": "Sea",
                    "position": 683,
                    "type": "SL",
                    "begin": 13
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 14,
                    "id": 14,
                    "text": ".",
                    "position": 686,
                    "type": "SF",
                    "begin": 14
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "-/SO",
                    "word_id": 0,
                    "m_end": 0,
                    "id": 0,
                    "target": "-",
                    "m_begin": 0
                },
                {
                    "result": "1952/SN+년/NNB",
                    "word_id": 1,
                    "m_end": 2,
                    "id": 1,
                    "target": "1952년",
                    "m_begin": 1
                },
                {
                    "result": "《/SS+노인/NNG+과/JC",
                    "word_id": 2,
                    "m_end": 5,
                    "id": 2,
                    "target": "《노인과",
                    "m_begin": 3
                },
                {
                    "result": "바다/NNG+》/SS",
                    "word_id": 3,
                    "m_end": 7,
                    "id": 3,
                    "target": "바다》",
                    "m_begin": 6
                },
                {
                    "result": "The/SL",
                    "word_id": 4,
                    "m_end": 8,
                    "id": 4,
                    "target": "The",
                    "m_begin": 8
                },
                {
                    "result": "Old/SL",
                    "word_id": 5,
                    "m_end": 9,
                    "id": 5,
                    "target": "Old",
                    "m_begin": 9
                },
                {
                    "result": "Man/SL",
                    "word_id": 6,
                    "m_end": 10,
                    "id": 6,
                    "target": "Man",
                    "m_begin": 10
                },
                {
                    "result": "and/SL",
                    "word_id": 7,
                    "m_end": 11,
                    "id": 7,
                    "target": "and",
                    "m_begin": 11
                },
                {
                    "result": "the/SL",
                    "word_id": 8,
                    "m_end": 12,
                    "id": 8,
                    "target": "the",
                    "m_begin": 12
                },
                {
                    "result": "Sea/SL+./SF",
                    "word_id": 9,
                    "m_end": 14,
                    "id": 9,
                    "target": "Sea.",
                    "m_begin": 13
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "en_entity": "The_Old_Man_and_the_Sea",
                        "link": 0,
                        "end_offset": 15,
                        "text": "노인과 바다",
                        "start_offset": 9,
                        "source": "NER",
                        "type": "AFW_DOCUMENT",
                        "uri": "http://ko.dbpedia.org/resource/노인과_바다",
                        "relation": 0
                    }
                ],
                "d_entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 7,
                        "text": "1952년",
                        "start_offset": 2,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    }
                ],
                "merge": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 7,
                        "text": "1952년",
                        "start_offset": 2,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 15,
                        "text": "노인과 바다",
                        "start_offset": 9,
                        "source": "NER",
                        "type": "AFW_DOCUMENT",
                        "uri": "http://ko.dbpedia.org/resource/노인과_바다",
                        "relation": 0
                    }
                ]
            },
            "morp": [
                {
                    "lemma": "-",
                    "weight": 1,
                    "id": 0,
                    "position": 630,
                    "type": "SO"
                },
                {
                    "lemma": "1952",
                    "weight": 1,
                    "id": 1,
                    "position": 632,
                    "type": "SN"
                },
                {
                    "lemma": "년",
                    "weight": 0.414343,
                    "id": 2,
                    "position": 636,
                    "type": "NNB"
                },
                {
                    "lemma": "《",
                    "weight": 1,
                    "id": 3,
                    "position": 640,
                    "type": "SS"
                },
                {
                    "lemma": "노인",
                    "weight": 0.9,
                    "id": 4,
                    "position": 643,
                    "type": "NNG"
                },
                {
                    "lemma": "과",
                    "weight": 0.017569,
                    "id": 5,
                    "position": 649,
                    "type": "JC"
                },
                {
                    "lemma": "바다",
                    "weight": 0.774346,
                    "id": 6,
                    "position": 653,
                    "type": "NNG"
                },
                {
                    "lemma": "》",
                    "weight": 1,
                    "id": 7,
                    "position": 659,
                    "type": "SS"
                },
                {
                    "lemma": "The",
                    "weight": 1,
                    "id": 8,
                    "position": 663,
                    "type": "SL"
                },
                {
                    "lemma": "Old",
                    "weight": 1,
                    "id": 9,
                    "position": 667,
                    "type": "SL"
                },
                {
                    "lemma": "Man",
                    "weight": 1,
                    "id": 10,
                    "position": 671,
                    "type": "SL"
                },
                {
                    "lemma": "and",
                    "weight": 1,
                    "id": 11,
                    "position": 675,
                    "type": "SL"
                },
                {
                    "lemma": "the",
                    "weight": 1,
                    "id": 12,
                    "position": 679,
                    "type": "SL"
                },
                {
                    "lemma": "Sea",
                    "weight": 1,
                    "id": 13,
                    "position": 683,
                    "type": "SL"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 14,
                    "position": 686,
                    "type": "SF"
                }
            ],
            "NE": [
                {
                    "weight": 0.643216,
                    "end": 2,
                    "id": 0,
                    "text": "1952년",
                    "type": "DT_YEAR",
                    "begin": 1,
                    "common_noun": 0
                },
                {
                    "weight": 0.995433,
                    "end": 6,
                    "id": 1,
                    "text": "노인과 바다",
                    "type": "AFW_DOCUMENT",
                    "begin": 4,
                    "common_noun": 0
                }
            ],
            "id": 9,
            "text": "- 1952년 《노인과 바다》 The Old Man and the Sea.",
            "word": [
                {
                    "end": 0,
                    "id": 0,
                    "text": "-",
                    "type": "",
                    "begin": 0
                },
                {
                    "end": 2,
                    "id": 1,
                    "text": "1952년",
                    "type": "",
                    "begin": 1
                },
                {
                    "end": 5,
                    "id": 2,
                    "text": "《노인과",
                    "type": "",
                    "begin": 3
                },
                {
                    "end": 7,
                    "id": 3,
                    "text": "바다》",
                    "type": "",
                    "begin": 6
                },
                {
                    "end": 8,
                    "id": 4,
                    "text": "The",
                    "type": "",
                    "begin": 8
                },
                {
                    "end": 9,
                    "id": 5,
                    "text": "Old",
                    "type": "",
                    "begin": 9
                },
                {
                    "end": 10,
                    "id": 6,
                    "text": "Man",
                    "type": "",
                    "begin": 10
                },
                {
                    "end": 11,
                    "id": 7,
                    "text": "and",
                    "type": "",
                    "begin": 11
                },
                {
                    "end": 12,
                    "id": 8,
                    "text": "the",
                    "type": "",
                    "begin": 12
                },
                {
                    "end": 14,
                    "id": 9,
                    "text": "Sea.",
                    "type": "",
                    "begin": 13
                }
            ],
            "mod_NE": [
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 7,
                    "text": "1952년",
                    "start_offset": 2,
                    "type": "DT_YEAR",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 15,
                    "text": "노인과 바다",
                    "start_offset": 9,
                    "type": "AFW_DOCUMENT",
                    "relation": 0
                }
            ]
        }
    ]
};
var el_2 = {
    "sentence": [
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 4,
                    "key_begin": 0,
                    "id": 0,
                    "label": "NP_SBJ",
                    "text": "일본 태생의 소설가 가즈오 이시구로는",
                    "head_phrase": 3,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 5,
                    "key_begin": 5,
                    "id": 1,
                    "label": "NP_AJT",
                    "text": "1989년",
                    "head_phrase": 3,
                    "begin": 5,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 9,
                    "key_begin": 6,
                    "id": 2,
                    "label": "NP_OBJ",
                    "text": "맨부커상과 위니프레드 홀트비 기념상을",
                    "head_phrase": 3,
                    "begin": 6,
                    "sub_phrase": [],
                    "element": [
                        {
                            "end": 11,
                            "ne_type": "CV_PRIZE",
                            "text": "맨부커상",
                            "label": "NP_OBJ",
                            "begin": 10
                        },
                        {
                            "end": 16,
                            "ne_type": "CV_PRIZE",
                            "text": "위니프레드 홀트비 기념상",
                            "label": "NP_OBJ",
                            "begin": 13
                        }
                    ]
                },
                {
                    "weight": 0,
                    "end": 10,
                    "key_begin": 10,
                    "id": 3,
                    "label": "S",
                    "text": "P#0@SBJ는 P#1@AJT년 P#2@OBJ을 수상하였다.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [
                        0,
                        1,
                        2
                    ],
                    "element": []
                }
            ],
            "dependency": [
                {
                    "head": 1,
                    "mod": [],
                    "weight": 0.664185,
                    "id": 0,
                    "text": "일본",
                    "label": "NP"
                },
                {
                    "head": 2,
                    "mod": [
                        0
                    ],
                    "weight": 0.772654,
                    "id": 1,
                    "text": "태생의",
                    "label": "NP_MOD"
                },
                {
                    "head": 4,
                    "mod": [
                        1
                    ],
                    "weight": 0.549642,
                    "id": 2,
                    "text": "소설가",
                    "label": "NP"
                },
                {
                    "head": 4,
                    "mod": [],
                    "weight": 0.709933,
                    "id": 3,
                    "text": "가즈오",
                    "label": "NP"
                },
                {
                    "head": 10,
                    "mod": [
                        2,
                        3
                    ],
                    "weight": 0.817164,
                    "id": 4,
                    "text": "이시구로는",
                    "label": "NP_SBJ"
                },
                {
                    "head": 10,
                    "mod": [],
                    "weight": 0.758422,
                    "id": 5,
                    "text": "1989년",
                    "label": "NP_AJT"
                },
                {
                    "head": 9,
                    "mod": [],
                    "weight": 0.470633,
                    "id": 6,
                    "text": "맨부커상과",
                    "label": "NP_CNJ"
                },
                {
                    "head": 8,
                    "mod": [],
                    "weight": 0.0196141,
                    "id": 7,
                    "text": "위니프레드",
                    "label": "NP"
                },
                {
                    "head": 9,
                    "mod": [
                        7
                    ],
                    "weight": 0.798687,
                    "id": 8,
                    "text": "홀트비",
                    "label": "NP"
                },
                {
                    "head": 10,
                    "mod": [
                        6,
                        8
                    ],
                    "weight": 0.796672,
                    "id": 9,
                    "text": "기념상을",
                    "label": "NP_OBJ"
                },
                {
                    "head": -1,
                    "mod": [
                        4,
                        5,
                        9
                    ],
                    "weight": 0.000628158,
                    "id": 10,
                    "text": "수상하였다.",
                    "label": "VP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "02",
                    "weight": 4.4,
                    "end": 0,
                    "id": 0,
                    "text": "일본",
                    "position": 0,
                    "type": "NNP",
                    "begin": 0
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 1,
                    "id": 1,
                    "text": "태생",
                    "position": 7,
                    "type": "NNG",
                    "begin": 1
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 2,
                    "id": 2,
                    "text": "의",
                    "position": 13,
                    "type": "JKG",
                    "begin": 2
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 4,
                    "id": 3,
                    "text": "소설가",
                    "position": 17,
                    "type": "NNG",
                    "begin": 3
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 5,
                    "id": 4,
                    "text": "가즈오",
                    "position": 27,
                    "type": "NNP",
                    "begin": 5
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 6,
                    "id": 5,
                    "text": "이시구로",
                    "position": 37,
                    "type": "NNP",
                    "begin": 6
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 7,
                    "id": 6,
                    "text": "는",
                    "position": 49,
                    "type": "JX",
                    "begin": 7
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 8,
                    "id": 7,
                    "text": "1989",
                    "position": 53,
                    "type": "SN",
                    "begin": 8
                },
                {
                    "scode": "02",
                    "weight": 1,
                    "end": 9,
                    "id": 8,
                    "text": "년",
                    "position": 57,
                    "type": "NNB",
                    "begin": 9
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 10,
                    "id": 9,
                    "text": "맨부",
                    "position": 61,
                    "type": "NNP",
                    "begin": 10
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 11,
                    "id": 10,
                    "text": "커상",
                    "position": 67,
                    "type": "NNP",
                    "begin": 11
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 12,
                    "id": 11,
                    "text": "과",
                    "position": 73,
                    "type": "JC",
                    "begin": 12
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 13,
                    "id": 12,
                    "text": "위니프레드",
                    "position": 77,
                    "type": "NNP",
                    "begin": 13
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 14,
                    "id": 13,
                    "text": "홀트비",
                    "position": 93,
                    "type": "NNP",
                    "begin": 14
                },
                {
                    "scode": "02",
                    "weight": 1,
                    "end": 16,
                    "id": 14,
                    "text": "기념상",
                    "position": 103,
                    "type": "NNG",
                    "begin": 15
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 17,
                    "id": 15,
                    "text": "을",
                    "position": 112,
                    "type": "JKO",
                    "begin": 17
                },
                {
                    "scode": "03",
                    "weight": 2.2,
                    "end": 19,
                    "id": 16,
                    "text": "수상하",
                    "position": 116,
                    "type": "VV",
                    "begin": 18
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 20,
                    "id": 17,
                    "text": "었",
                    "position": 125,
                    "type": "EP",
                    "begin": 20
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 21,
                    "id": 18,
                    "text": "다",
                    "position": 128,
                    "type": "EF",
                    "begin": 21
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 22,
                    "id": 19,
                    "text": ".",
                    "position": 131,
                    "type": "SF",
                    "begin": 22
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "일본/NNG",
                    "word_id": 0,
                    "m_end": 0,
                    "id": 0,
                    "target": "일본",
                    "m_begin": 0
                },
                {
                    "result": "태생/NNG+의/JKG",
                    "word_id": 1,
                    "m_end": 2,
                    "id": 1,
                    "target": "태생의",
                    "m_begin": 1
                },
                {
                    "result": "소설가/NNG",
                    "word_id": 2,
                    "m_end": 4,
                    "id": 2,
                    "target": "소설가",
                    "m_begin": 3
                },
                {
                    "result": "가즈오/NNG",
                    "word_id": 3,
                    "m_end": 5,
                    "id": 3,
                    "target": "가즈오",
                    "m_begin": 5
                },
                {
                    "result": "이시구로/NNG+는/JX",
                    "word_id": 4,
                    "m_end": 7,
                    "id": 4,
                    "target": "이시구로는",
                    "m_begin": 6
                },
                {
                    "result": "1989/SN+년/NNB",
                    "word_id": 5,
                    "m_end": 9,
                    "id": 5,
                    "target": "1989년",
                    "m_begin": 8
                },
                {
                    "result": "맨부커상/NNG+과/JC",
                    "word_id": 6,
                    "m_end": 12,
                    "id": 6,
                    "target": "맨부커상과",
                    "m_begin": 10
                },
                {
                    "result": "위니프레드/NNG",
                    "word_id": 7,
                    "m_end": 13,
                    "id": 7,
                    "target": "위니프레드",
                    "m_begin": 13
                },
                {
                    "result": "홀트비/NNG",
                    "word_id": 8,
                    "m_end": 14,
                    "id": 8,
                    "target": "홀트비",
                    "m_begin": 14
                },
                {
                    "result": "기념상/NNG+을/JKO",
                    "word_id": 9,
                    "m_end": 17,
                    "id": 9,
                    "target": "기념상을",
                    "m_begin": 15
                },
                {
                    "result": "수상하/VV+었/EP+다/EF+./SF",
                    "word_id": 10,
                    "m_end": 22,
                    "id": 10,
                    "target": "수상하였다.",
                    "m_begin": 18
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [
                    {
                        "indirect": 0,
                        "confidence": -0.9994045182549816,
                        "link": 8,
                        "end_offset": 2,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/일본",
                        "relation": 2,
                        "score": 4.4048337166199385,
                        "en_entity": "Japan",
                        "text": "일본",
                        "start_offset": 0,
                        "id": 325142
                    },
                    {
                        "indirect": 0,
                        "confidence": 0.962658630191314,
                        "link": 11,
                        "end_offset": 19,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://wikidata.dbpedia.org/resource/Q5",
                            "http://xmlns.com/foaf/0.1/Person",
                            "http://dbpedia.org/ontology/Agent",
                            "http://dbpedia.org/ontology/Artist",
                            "http://dbpedia.org/ontology/Person",
                            "http://dbpedia.org/ontology/Writer",
                            "http://schema.org/Person",
                            "http://wikidata.dbpedia.org/resource/Q215627",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson",
                            "http://www.wikidata.org/entity/Q36180",
                            "http://www.wikidata.org/entity/Q5",
                            "http://www.wikidata.org/entity/Q215627"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/이시구로_가즈오",
                        "relation": 9,
                        "score": 0.9542425094393249,
                        "en_entity": "Kazuo_Ishiguro",
                        "text": "가즈오이시구로",
                        "start_offset": 11,
                        "id": 325143
                    },
                    {
                        "indirect": 0,
                        "confidence": 0.9707706272097973,
                        "link": 3,
                        "end_offset": 31,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/맨_부커상",
                        "relation": 3,
                        "score": 1.5314789170422551,
                        "en_entity": null,
                        "text": "맨부커상",
                        "start_offset": 27,
                        "id": 325144
                    }
                ],
                "d_entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 10,
                        "text": "소설가",
                        "start_offset": 7,
                        "source": "DE",
                        "type": "CV_OCCUPATION",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 26,
                        "text": "1989년",
                        "start_offset": 21,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 46,
                        "text": "위니프레드 홀트비 기념상",
                        "start_offset": 33,
                        "source": "DE",
                        "type": "CV_PRIZE",
                        "uri": "",
                        "relation": 0
                    }
                ],
                "merge": [
                    {
                        "score": 4.4048337166199385,
                        "indirect": 0,
                        "confidence": -0.9994045182549816,
                        "link": 8,
                        "end_offset": 2,
                        "text": "일본",
                        "start_offset": 0,
                        "id": 325142,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/일본",
                        "relation": 2
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 10,
                        "text": "소설가",
                        "start_offset": 7,
                        "source": "DE",
                        "type": "CV_OCCUPATION",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0.9542425094393249,
                        "indirect": 0,
                        "confidence": 0.962658630191314,
                        "link": 11,
                        "end_offset": 19,
                        "text": "가즈오이시구로",
                        "start_offset": 11,
                        "id": 325143,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://wikidata.dbpedia.org/resource/Q5",
                            "http://xmlns.com/foaf/0.1/Person",
                            "http://dbpedia.org/ontology/Agent",
                            "http://dbpedia.org/ontology/Artist",
                            "http://dbpedia.org/ontology/Person",
                            "http://dbpedia.org/ontology/Writer",
                            "http://schema.org/Person",
                            "http://wikidata.dbpedia.org/resource/Q215627",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson",
                            "http://www.wikidata.org/entity/Q36180",
                            "http://www.wikidata.org/entity/Q5",
                            "http://www.wikidata.org/entity/Q215627"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/이시구로_가즈오",
                        "relation": 9
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 26,
                        "text": "1989년",
                        "start_offset": 21,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 1.5314789170422551,
                        "indirect": 0,
                        "confidence": 0.9707706272097973,
                        "link": 3,
                        "end_offset": 31,
                        "text": "맨부커상",
                        "start_offset": 27,
                        "id": 325144,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/맨_부커상",
                        "relation": 3
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 46,
                        "text": "위니프레드 홀트비 기념상",
                        "start_offset": 33,
                        "source": "DE",
                        "type": "CV_PRIZE",
                        "uri": "",
                        "relation": 0
                    }
                ]
            },
            "morp": [
                {
                    "lemma": "일본",
                    "weight": 0.0892936,
                    "id": 0,
                    "position": 0,
                    "type": "NNP"
                },
                {
                    "lemma": "태생",
                    "weight": 0.9,
                    "id": 1,
                    "position": 7,
                    "type": "NNG"
                },
                {
                    "lemma": "의",
                    "weight": 0.0694213,
                    "id": 2,
                    "position": 13,
                    "type": "JKG"
                },
                {
                    "lemma": "소설",
                    "weight": 0.9,
                    "id": 3,
                    "position": 17,
                    "type": "NNG"
                },
                {
                    "lemma": "가",
                    "weight": 0.000115417,
                    "id": 4,
                    "position": 23,
                    "type": "XSN"
                },
                {
                    "lemma": "가즈오",
                    "weight": 0.8,
                    "id": 5,
                    "position": 27,
                    "type": "NNP"
                },
                {
                    "lemma": "이시구로",
                    "weight": 0.05,
                    "id": 6,
                    "position": 37,
                    "type": "NNP"
                },
                {
                    "lemma": "는",
                    "weight": 0.0332677,
                    "id": 7,
                    "position": 49,
                    "type": "JX"
                },
                {
                    "lemma": "1989",
                    "weight": 1,
                    "id": 8,
                    "position": 53,
                    "type": "SN"
                },
                {
                    "lemma": "년",
                    "weight": 0.414343,
                    "id": 9,
                    "position": 57,
                    "type": "NNB"
                },
                {
                    "lemma": "맨부",
                    "weight": 0.6,
                    "id": 10,
                    "position": 61,
                    "type": "NNP"
                },
                {
                    "lemma": "커상",
                    "weight": 0.6,
                    "id": 11,
                    "position": 67,
                    "type": "NNP"
                },
                {
                    "lemma": "과",
                    "weight": 0.0108215,
                    "id": 12,
                    "position": 73,
                    "type": "JC"
                },
                {
                    "lemma": "위니프레드",
                    "weight": 0.6,
                    "id": 13,
                    "position": 77,
                    "type": "NNP"
                },
                {
                    "lemma": "홀트비",
                    "weight": 0.6,
                    "id": 14,
                    "position": 93,
                    "type": "NNP"
                },
                {
                    "lemma": "기념",
                    "weight": 0.9,
                    "id": 15,
                    "position": 103,
                    "type": "NNG"
                },
                {
                    "lemma": "상",
                    "weight": 0.0834075,
                    "id": 16,
                    "position": 109,
                    "type": "NNG"
                },
                {
                    "lemma": "을",
                    "weight": 0.129611,
                    "id": 17,
                    "position": 112,
                    "type": "JKO"
                },
                {
                    "lemma": "수상",
                    "weight": 0.9,
                    "id": 18,
                    "position": 116,
                    "type": "NNG"
                },
                {
                    "lemma": "하",
                    "weight": 0.0001,
                    "id": 19,
                    "position": 122,
                    "type": "XSV"
                },
                {
                    "lemma": "었",
                    "weight": 0.9,
                    "id": 20,
                    "position": 125,
                    "type": "EP"
                },
                {
                    "lemma": "다",
                    "weight": 0.640954,
                    "id": 21,
                    "position": 128,
                    "type": "EF"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 22,
                    "position": 131,
                    "type": "SF"
                }
            ],
            "NE": [
                {
                    "weight": 0.687992,
                    "end": 0,
                    "id": 0,
                    "text": "일본",
                    "type": "LCP_COUNTRY",
                    "begin": 0,
                    "common_noun": 0
                },
                {
                    "weight": 0.577155,
                    "end": 4,
                    "id": 1,
                    "text": "소설가",
                    "type": "CV_OCCUPATION",
                    "begin": 3,
                    "common_noun": 0
                },
                {
                    "weight": 0.208192,
                    "end": 6,
                    "id": 2,
                    "text": "가즈오 이시구로",
                    "type": "PS_NAME",
                    "begin": 5,
                    "common_noun": 0
                },
                {
                    "weight": 0.786893,
                    "end": 9,
                    "id": 3,
                    "text": "1989년",
                    "type": "DT_YEAR",
                    "begin": 8,
                    "common_noun": 0
                },
                {
                    "weight": 0.547651,
                    "end": 11,
                    "id": 4,
                    "text": "맨부커상",
                    "type": "CV_PRIZE",
                    "begin": 10,
                    "common_noun": 0
                },
                {
                    "weight": 0.131005,
                    "end": 16,
                    "id": 5,
                    "text": "위니프레드 홀트비 기념상",
                    "type": "CV_PRIZE",
                    "begin": 13,
                    "common_noun": 0
                }
            ],
            "id": 0,
            "text": "일본 태생의 소설가 가즈오 이시구로는 1989년 맨부커상과 위니프레드 홀트비 기념상을 수상하였다.",
            "word": [
                {
                    "end": 0,
                    "id": 0,
                    "text": "일본",
                    "type": "",
                    "begin": 0
                },
                {
                    "end": 2,
                    "id": 1,
                    "text": "태생의",
                    "type": "",
                    "begin": 1
                },
                {
                    "end": 4,
                    "id": 2,
                    "text": "소설가",
                    "type": "",
                    "begin": 3
                },
                {
                    "end": 5,
                    "id": 3,
                    "text": "가즈오",
                    "type": "",
                    "begin": 5
                },
                {
                    "end": 7,
                    "id": 4,
                    "text": "이시구로는",
                    "type": "",
                    "begin": 6
                },
                {
                    "end": 9,
                    "id": 5,
                    "text": "1989년",
                    "type": "",
                    "begin": 8
                },
                {
                    "end": 12,
                    "id": 6,
                    "text": "맨부커상과",
                    "type": "",
                    "begin": 10
                },
                {
                    "end": 13,
                    "id": 7,
                    "text": "위니프레드",
                    "type": "",
                    "begin": 13
                },
                {
                    "end": 14,
                    "id": 8,
                    "text": "홀트비",
                    "type": "",
                    "begin": 14
                },
                {
                    "end": 17,
                    "id": 9,
                    "text": "기념상을",
                    "type": "",
                    "begin": 15
                },
                {
                    "end": 22,
                    "id": 10,
                    "text": "수상하였다.",
                    "type": "",
                    "begin": 18
                }
            ],
            "mod_NE": [
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 2,
                    "text": "일본",
                    "start_offset": 0,
                    "type": "LCP_COUNTRY",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 10,
                    "text": "소설가",
                    "start_offset": 7,
                    "type": "CV_OCCUPATION",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 19,
                    "text": "가즈오 이시구로",
                    "start_offset": 11,
                    "type": "PS_NAME",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 26,
                    "text": "1989년",
                    "start_offset": 21,
                    "type": "DT_YEAR",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 31,
                    "text": "맨부커상",
                    "start_offset": 27,
                    "type": "CV_PRIZE",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 46,
                    "text": "위니프레드 홀트비 기념상",
                    "start_offset": 33,
                    "type": "CV_PRIZE",
                    "relation": 0
                }
            ]
        },
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 1,
                    "key_begin": 0,
                    "id": 0,
                    "label": "NP_SBJ",
                    "text": "가즈오 이시구로는",
                    "head_phrase": 3,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 5,
                    "key_begin": 2,
                    "id": 1,
                    "label": "NP_AJT",
                    "text": "켄트 대학교와 이스트앵글리아 대학교에서",
                    "head_phrase": 3,
                    "begin": 2,
                    "sub_phrase": [],
                    "element": [
                        {
                            "end": 5,
                            "ne_type": "OGG_EDUCATION",
                            "text": "켄트 대학교",
                            "label": "NP_AJT",
                            "begin": 3
                        },
                        {
                            "end": 10,
                            "ne_type": "OGG_EDUCATION",
                            "text": "이스트앵글리아 대학교",
                            "label": "NP_AJT",
                            "begin": 7
                        }
                    ]
                },
                {
                    "weight": 0,
                    "end": 6,
                    "key_begin": 6,
                    "id": 2,
                    "label": "NP_OBJ",
                    "text": "석사를",
                    "head_phrase": 3,
                    "begin": 6,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 7,
                    "key_begin": 7,
                    "id": 3,
                    "label": "S",
                    "text": "P#0@SBJ는 P#1@AJT에서 P#2@OBJ를 받았다.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [
                        0,
                        1,
                        2
                    ],
                    "element": []
                }
            ],
            "dependency": [
                {
                    "head": 1,
                    "mod": [],
                    "weight": 0.708752,
                    "id": 0,
                    "text": "가즈오",
                    "label": "NP"
                },
                {
                    "head": 7,
                    "mod": [
                        0
                    ],
                    "weight": 0.753755,
                    "id": 1,
                    "text": "이시구로는",
                    "label": "NP_SBJ"
                },
                {
                    "head": 3,
                    "mod": [],
                    "weight": 0.684393,
                    "id": 2,
                    "text": "켄트",
                    "label": "NP"
                },
                {
                    "head": 5,
                    "mod": [
                        2
                    ],
                    "weight": 0.524931,
                    "id": 3,
                    "text": "대학교와",
                    "label": "NP_CNJ"
                },
                {
                    "head": 5,
                    "mod": [],
                    "weight": 0.573413,
                    "id": 4,
                    "text": "이스트앵글리아",
                    "label": "NP"
                },
                {
                    "head": 7,
                    "mod": [
                        3,
                        4
                    ],
                    "weight": 0.834215,
                    "id": 5,
                    "text": "대학교에서",
                    "label": "NP_AJT"
                },
                {
                    "head": 7,
                    "mod": [],
                    "weight": 0.807735,
                    "id": 6,
                    "text": "석사를",
                    "label": "NP_OBJ"
                },
                {
                    "head": -1,
                    "mod": [
                        1,
                        5,
                        6
                    ],
                    "weight": 0.0531208,
                    "id": 7,
                    "text": "받았다.",
                    "label": "VP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 0,
                    "id": 0,
                    "text": "가즈오",
                    "position": 133,
                    "type": "NNP",
                    "begin": 0
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 1,
                    "id": 1,
                    "text": "이시구로",
                    "position": 143,
                    "type": "NNP",
                    "begin": 1
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 2,
                    "id": 2,
                    "text": "는",
                    "position": 155,
                    "type": "JX",
                    "begin": 2
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 3,
                    "id": 3,
                    "text": "켄트",
                    "position": 159,
                    "type": "NNP",
                    "begin": 3
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 5,
                    "id": 4,
                    "text": "대학교",
                    "position": 166,
                    "type": "NNG",
                    "begin": 4
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 6,
                    "id": 5,
                    "text": "와",
                    "position": 175,
                    "type": "JC",
                    "begin": 6
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 7,
                    "id": 6,
                    "text": "이스트",
                    "position": 179,
                    "type": "NNG",
                    "begin": 7
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 8,
                    "id": 7,
                    "text": "앵글리아",
                    "position": 188,
                    "type": "NNP",
                    "begin": 8
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 10,
                    "id": 8,
                    "text": "대학교",
                    "position": 201,
                    "type": "NNG",
                    "begin": 9
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 11,
                    "id": 9,
                    "text": "에서",
                    "position": 210,
                    "type": "JKB",
                    "begin": 11
                },
                {
                    "scode": "01",
                    "weight": 4.2,
                    "end": 12,
                    "id": 10,
                    "text": "석사",
                    "position": 217,
                    "type": "NNG",
                    "begin": 12
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 13,
                    "id": 11,
                    "text": "를",
                    "position": 223,
                    "type": "JKO",
                    "begin": 13
                },
                {
                    "scode": "01",
                    "weight": 4.4,
                    "end": 14,
                    "id": 12,
                    "text": "받",
                    "position": 227,
                    "type": "VV",
                    "begin": 14
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 15,
                    "id": 13,
                    "text": "았",
                    "position": 230,
                    "type": "EP",
                    "begin": 15
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 16,
                    "id": 14,
                    "text": "다",
                    "position": 233,
                    "type": "EF",
                    "begin": 16
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 17,
                    "id": 15,
                    "text": ".",
                    "position": 236,
                    "type": "SF",
                    "begin": 17
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "가즈오/NNG",
                    "word_id": 0,
                    "m_end": 0,
                    "id": 0,
                    "target": "가즈오",
                    "m_begin": 0
                },
                {
                    "result": "이시구로/NNG+는/JX",
                    "word_id": 1,
                    "m_end": 2,
                    "id": 1,
                    "target": "이시구로는",
                    "m_begin": 1
                },
                {
                    "result": "켄트/NNG",
                    "word_id": 2,
                    "m_end": 3,
                    "id": 2,
                    "target": "켄트",
                    "m_begin": 3
                },
                {
                    "result": "대학교/NNG+와/JC",
                    "word_id": 3,
                    "m_end": 6,
                    "id": 3,
                    "target": "대학교와",
                    "m_begin": 4
                },
                {
                    "result": "이스트앵글리아/NNG",
                    "word_id": 4,
                    "m_end": 8,
                    "id": 4,
                    "target": "이스트앵글리아",
                    "m_begin": 7
                },
                {
                    "result": "대학교/NNG+에서/JKB",
                    "word_id": 5,
                    "m_end": 11,
                    "id": 5,
                    "target": "대학교에서",
                    "m_begin": 9
                },
                {
                    "result": "석사/NNG+를/JKO",
                    "word_id": 6,
                    "m_end": 13,
                    "id": 6,
                    "target": "석사를",
                    "m_begin": 12
                },
                {
                    "result": "받/VV+었/EP+다/EF+./SF",
                    "word_id": 7,
                    "m_end": 17,
                    "id": 7,
                    "target": "받았다.",
                    "m_begin": 14
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [
                    {
                        "indirect": 0,
                        "confidence": 0.962658630191314,
                        "link": 11,
                        "end_offset": 8,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://wikidata.dbpedia.org/resource/Q5",
                            "http://xmlns.com/foaf/0.1/Person",
                            "http://dbpedia.org/ontology/Agent",
                            "http://dbpedia.org/ontology/Artist",
                            "http://dbpedia.org/ontology/Person",
                            "http://dbpedia.org/ontology/Writer",
                            "http://schema.org/Person",
                            "http://wikidata.dbpedia.org/resource/Q215627",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson",
                            "http://www.wikidata.org/entity/Q36180",
                            "http://www.wikidata.org/entity/Q5",
                            "http://www.wikidata.org/entity/Q215627"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/이시구로_가즈오",
                        "relation": 9,
                        "score": 0.9542425094393249,
                        "en_entity": "Kazuo_Ishiguro",
                        "text": "가즈오이시구로",
                        "start_offset": 0,
                        "id": 325145
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "en_entity": "University_of_East_Anglia",
                        "link": 0,
                        "end_offset": 29,
                        "text": "이스트앵글리아 대학교",
                        "start_offset": 18,
                        "source": "NER",
                        "type": "OGG_EDUCATION",
                        "uri": "http://ko.dbpedia.org/resource/이스트앵글리아_대학교",
                        "relation": 0
                    },
                    {
                        "indirect": 0,
                        "confidence": 0.9932188095674834,
                        "link": 0,
                        "end_offset": 34,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/석사",
                        "relation": 0,
                        "score": 2.7307822756663893,
                        "en_entity": "Master's_degree",
                        "text": "석사",
                        "start_offset": 32,
                        "id": 325146
                    }
                ],
                "d_entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 16,
                        "text": "켄트 대학교",
                        "start_offset": 10,
                        "source": "DE",
                        "type": "OGG_EDUCATION",
                        "uri": "",
                        "relation": 0
                    }
                ],
                "merge": [
                    {
                        "score": 0.9542425094393249,
                        "indirect": 0,
                        "confidence": 0.962658630191314,
                        "link": 11,
                        "end_offset": 8,
                        "text": "가즈오이시구로",
                        "start_offset": 0,
                        "id": 325145,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://wikidata.dbpedia.org/resource/Q5",
                            "http://xmlns.com/foaf/0.1/Person",
                            "http://dbpedia.org/ontology/Agent",
                            "http://dbpedia.org/ontology/Artist",
                            "http://dbpedia.org/ontology/Person",
                            "http://dbpedia.org/ontology/Writer",
                            "http://schema.org/Person",
                            "http://wikidata.dbpedia.org/resource/Q215627",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson",
                            "http://www.wikidata.org/entity/Q36180",
                            "http://www.wikidata.org/entity/Q5",
                            "http://www.wikidata.org/entity/Q215627"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/이시구로_가즈오",
                        "relation": 9
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 16,
                        "text": "켄트 대학교",
                        "start_offset": 10,
                        "source": "DE",
                        "type": "OGG_EDUCATION",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 29,
                        "text": "이스트앵글리아 대학교",
                        "start_offset": 18,
                        "source": "NER",
                        "type": "OGG_EDUCATION",
                        "uri": "http://ko.dbpedia.org/resource/이스트앵글리아_대학교",
                        "relation": 0
                    },
                    {
                        "score": 2.7307822756663893,
                        "indirect": 0,
                        "confidence": 0.9932188095674834,
                        "link": 0,
                        "end_offset": 34,
                        "text": "석사",
                        "start_offset": 32,
                        "id": 325146,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/석사",
                        "relation": 0
                    }
                ]
            },
            "morp": [
                {
                    "lemma": "가즈오",
                    "weight": 0.8,
                    "id": 0,
                    "position": 133,
                    "type": "NNP"
                },
                {
                    "lemma": "이시구로",
                    "weight": 0.05,
                    "id": 1,
                    "position": 143,
                    "type": "NNP"
                },
                {
                    "lemma": "는",
                    "weight": 0.0332677,
                    "id": 2,
                    "position": 155,
                    "type": "JX"
                },
                {
                    "lemma": "켄트",
                    "weight": 0.45,
                    "id": 3,
                    "position": 159,
                    "type": "NNP"
                },
                {
                    "lemma": "대",
                    "weight": 0.000103476,
                    "id": 4,
                    "position": 166,
                    "type": "XPN"
                },
                {
                    "lemma": "학교",
                    "weight": 0.473729,
                    "id": 5,
                    "position": 169,
                    "type": "NNG"
                },
                {
                    "lemma": "와",
                    "weight": 0.0169714,
                    "id": 6,
                    "position": 175,
                    "type": "JC"
                },
                {
                    "lemma": "이스트",
                    "weight": 0.665408,
                    "id": 7,
                    "position": 179,
                    "type": "NNG"
                },
                {
                    "lemma": "앵글리아",
                    "weight": 0.05,
                    "id": 8,
                    "position": 188,
                    "type": "NNP"
                },
                {
                    "lemma": "대",
                    "weight": 0.000103476,
                    "id": 9,
                    "position": 201,
                    "type": "XPN"
                },
                {
                    "lemma": "학교",
                    "weight": 0.473729,
                    "id": 10,
                    "position": 204,
                    "type": "NNG"
                },
                {
                    "lemma": "에서",
                    "weight": 0.153407,
                    "id": 11,
                    "position": 210,
                    "type": "JKB"
                },
                {
                    "lemma": "석사",
                    "weight": 0.203967,
                    "id": 12,
                    "position": 217,
                    "type": "NNG"
                },
                {
                    "lemma": "를",
                    "weight": 0.137686,
                    "id": 13,
                    "position": 223,
                    "type": "JKO"
                },
                {
                    "lemma": "받",
                    "weight": 0.765648,
                    "id": 14,
                    "position": 227,
                    "type": "VV"
                },
                {
                    "lemma": "았",
                    "weight": 0.9,
                    "id": 15,
                    "position": 230,
                    "type": "EP"
                },
                {
                    "lemma": "다",
                    "weight": 0.640954,
                    "id": 16,
                    "position": 233,
                    "type": "EF"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 17,
                    "position": 236,
                    "type": "SF"
                }
            ],
            "NE": [
                {
                    "weight": 0.0822767,
                    "end": 1,
                    "id": 0,
                    "text": "가즈오 이시구로",
                    "type": "PS_NAME",
                    "begin": 0,
                    "common_noun": 0
                },
                {
                    "weight": 0.604187,
                    "end": 5,
                    "id": 1,
                    "text": "켄트 대학교",
                    "type": "OGG_EDUCATION",
                    "begin": 3,
                    "common_noun": 0
                },
                {
                    "weight": 0.855454,
                    "end": 10,
                    "id": 2,
                    "text": "이스트앵글리아 대학교",
                    "type": "OGG_EDUCATION",
                    "begin": 7,
                    "common_noun": 0
                },
                {
                    "weight": 0.41899,
                    "end": 12,
                    "id": 3,
                    "text": "석사",
                    "type": "CV_POSITION",
                    "begin": 12,
                    "common_noun": 0
                }
            ],
            "id": 1,
            "text": " 가즈오 이시구로는 켄트 대학교와 이스트앵글리아 대학교에서 석사를 받았다.",
            "word": [
                {
                    "end": 0,
                    "id": 0,
                    "text": "가즈오",
                    "type": "",
                    "begin": 0
                },
                {
                    "end": 2,
                    "id": 1,
                    "text": "이시구로는",
                    "type": "",
                    "begin": 1
                },
                {
                    "end": 3,
                    "id": 2,
                    "text": "켄트",
                    "type": "",
                    "begin": 3
                },
                {
                    "end": 6,
                    "id": 3,
                    "text": "대학교와",
                    "type": "",
                    "begin": 4
                },
                {
                    "end": 8,
                    "id": 4,
                    "text": "이스트앵글리아",
                    "type": "",
                    "begin": 7
                },
                {
                    "end": 11,
                    "id": 5,
                    "text": "대학교에서",
                    "type": "",
                    "begin": 9
                },
                {
                    "end": 13,
                    "id": 6,
                    "text": "석사를",
                    "type": "",
                    "begin": 12
                },
                {
                    "end": 17,
                    "id": 7,
                    "text": "받았다.",
                    "type": "",
                    "begin": 14
                }
            ],
            "mod_NE": [
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 8,
                    "text": "가즈오 이시구로",
                    "start_offset": 0,
                    "type": "PS_NAME",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 16,
                    "text": "켄트 대학교",
                    "start_offset": 10,
                    "type": "OGG_EDUCATION",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 29,
                    "text": "이스트앵글리아 대학교",
                    "start_offset": 18,
                    "type": "OGG_EDUCATION",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 34,
                    "text": "석사",
                    "start_offset": 32,
                    "type": "CV_POSITION",
                    "relation": 0
                }
            ]
        },
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 0,
                    "key_begin": 0,
                    "id": 0,
                    "label": "NP",
                    "text": "수상이력.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": []
                }
            ],
            "dependency": [
                {
                    "head": -1,
                    "mod": [],
                    "weight": 0.659212,
                    "id": 0,
                    "text": "수상이력.",
                    "label": "NP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "07",
                    "weight": 1,
                    "end": 0,
                    "id": 0,
                    "text": "수상",
                    "position": 237,
                    "type": "NNG",
                    "begin": 0
                },
                {
                    "scode": "03",
                    "weight": 1,
                    "end": 1,
                    "id": 1,
                    "text": "이력",
                    "position": 243,
                    "type": "NNG",
                    "begin": 1
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 2,
                    "id": 2,
                    "text": ".",
                    "position": 249,
                    "type": "SF",
                    "begin": 2
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "수상이력/NNG+./SF",
                    "word_id": 0,
                    "m_end": 2,
                    "id": 0,
                    "target": "수상이력.",
                    "m_begin": 0
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [],
                "d_entities": [],
                "merge": []
            },
            "morp": [
                {
                    "lemma": "수상",
                    "weight": 0.9,
                    "id": 0,
                    "position": 237,
                    "type": "NNG"
                },
                {
                    "lemma": "이력",
                    "weight": 0.9,
                    "id": 1,
                    "position": 243,
                    "type": "NNG"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 2,
                    "position": 249,
                    "type": "SF"
                }
            ],
            "NE": [],
            "id": 2,
            "text": "수상이력.",
            "word": [
                {
                    "end": 2,
                    "id": 0,
                    "text": "수상이력.",
                    "type": "",
                    "begin": 0
                }
            ],
            "mod_NE": []
        },
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 3,
                    "key_begin": 0,
                    "id": 0,
                    "label": "NP",
                    "text": "- 1989년 맨 부커상.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": []
                }
            ],
            "dependency": [
                {
                    "head": 1,
                    "mod": [],
                    "weight": 0.151275,
                    "id": 0,
                    "text": "-",
                    "label": "X"
                },
                {
                    "head": 3,
                    "mod": [
                        0
                    ],
                    "weight": 0.601389,
                    "id": 1,
                    "text": "1989년",
                    "label": "NP"
                },
                {
                    "head": 3,
                    "mod": [],
                    "weight": 0.604896,
                    "id": 2,
                    "text": "맨",
                    "label": "DP"
                },
                {
                    "head": -1,
                    "mod": [
                        1,
                        2
                    ],
                    "weight": 0.0301653,
                    "id": 3,
                    "text": "부커상.",
                    "label": "NP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 0,
                    "id": 0,
                    "text": "-",
                    "position": 250,
                    "type": "SO",
                    "begin": 0
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 1,
                    "id": 1,
                    "text": "1989",
                    "position": 252,
                    "type": "SN",
                    "begin": 1
                },
                {
                    "scode": "02",
                    "weight": 1,
                    "end": 2,
                    "id": 2,
                    "text": "년",
                    "position": 256,
                    "type": "NNB",
                    "begin": 2
                },
                {
                    "scode": "01",
                    "weight": 1,
                    "end": 3,
                    "id": 3,
                    "text": "맨",
                    "position": 260,
                    "type": "MM",
                    "begin": 3
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 4,
                    "id": 4,
                    "text": "부커상",
                    "position": 264,
                    "type": "NNP",
                    "begin": 4
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 5,
                    "id": 5,
                    "text": ".",
                    "position": 273,
                    "type": "SF",
                    "begin": 5
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "-/SO",
                    "word_id": 0,
                    "m_end": 0,
                    "id": 0,
                    "target": "-",
                    "m_begin": 0
                },
                {
                    "result": "1989/SN+년/NNB",
                    "word_id": 1,
                    "m_end": 2,
                    "id": 1,
                    "target": "1989년",
                    "m_begin": 1
                },
                {
                    "result": "맨/MM",
                    "word_id": 2,
                    "m_end": 3,
                    "id": 2,
                    "target": "맨",
                    "m_begin": 3
                },
                {
                    "result": "부커상/NNG+./SF",
                    "word_id": 3,
                    "m_end": 5,
                    "id": 3,
                    "target": "부커상.",
                    "m_begin": 4
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [],
                "d_entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 7,
                        "text": "1989년",
                        "start_offset": 2,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 13,
                        "text": "맨 부커상",
                        "start_offset": 8,
                        "source": "DE",
                        "type": "CV_PRIZE",
                        "uri": "",
                        "relation": 0
                    }
                ],
                "merge": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 7,
                        "text": "1989년",
                        "start_offset": 2,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 13,
                        "text": "맨 부커상",
                        "start_offset": 8,
                        "source": "DE",
                        "type": "CV_PRIZE",
                        "uri": "",
                        "relation": 0
                    }
                ]
            },
            "morp": [
                {
                    "lemma": "-",
                    "weight": 1,
                    "id": 0,
                    "position": 250,
                    "type": "SO"
                },
                {
                    "lemma": "1989",
                    "weight": 1,
                    "id": 1,
                    "position": 252,
                    "type": "SN"
                },
                {
                    "lemma": "년",
                    "weight": 0.414343,
                    "id": 2,
                    "position": 256,
                    "type": "NNB"
                },
                {
                    "lemma": "맨",
                    "weight": 0.00464208,
                    "id": 3,
                    "position": 260,
                    "type": "MM"
                },
                {
                    "lemma": "부커상",
                    "weight": 0.6,
                    "id": 4,
                    "position": 264,
                    "type": "NNP"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 5,
                    "position": 273,
                    "type": "SF"
                }
            ],
            "NE": [
                {
                    "weight": 0.703163,
                    "end": 2,
                    "id": 0,
                    "text": "1989년",
                    "type": "DT_YEAR",
                    "begin": 1,
                    "common_noun": 0
                },
                {
                    "weight": 0.216671,
                    "end": 4,
                    "id": 1,
                    "text": "맨 부커상",
                    "type": "CV_PRIZE",
                    "begin": 3,
                    "common_noun": 0
                }
            ],
            "id": 3,
            "text": "- 1989년 맨 부커상.",
            "word": [
                {
                    "end": 0,
                    "id": 0,
                    "text": "-",
                    "type": "",
                    "begin": 0
                },
                {
                    "end": 2,
                    "id": 1,
                    "text": "1989년",
                    "type": "",
                    "begin": 1
                },
                {
                    "end": 3,
                    "id": 2,
                    "text": "맨",
                    "type": "",
                    "begin": 3
                },
                {
                    "end": 5,
                    "id": 3,
                    "text": "부커상.",
                    "type": "",
                    "begin": 4
                }
            ],
            "mod_NE": [
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 7,
                    "text": "1989년",
                    "start_offset": 2,
                    "type": "DT_YEAR",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 13,
                    "text": "맨 부커상",
                    "start_offset": 8,
                    "type": "CV_PRIZE",
                    "relation": 0
                }
            ]
        },
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 3,
                    "key_begin": 0,
                    "id": 0,
                    "label": "NP",
                    "text": "- 2017년 노벨 문학상.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": []
                }
            ],
            "dependency": [
                {
                    "head": 1,
                    "mod": [],
                    "weight": 0.108036,
                    "id": 0,
                    "text": "-",
                    "label": "X"
                },
                {
                    "head": 3,
                    "mod": [
                        0
                    ],
                    "weight": 0.560742,
                    "id": 1,
                    "text": "2017년",
                    "label": "NP"
                },
                {
                    "head": 3,
                    "mod": [],
                    "weight": 0.824942,
                    "id": 2,
                    "text": "노벨",
                    "label": "NP"
                },
                {
                    "head": -1,
                    "mod": [
                        1,
                        2
                    ],
                    "weight": 0.0405758,
                    "id": 3,
                    "text": "문학상.",
                    "label": "NP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 0,
                    "id": 0,
                    "text": "-",
                    "position": 274,
                    "type": "SO",
                    "begin": 0
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 1,
                    "id": 1,
                    "text": "2017",
                    "position": 276,
                    "type": "SN",
                    "begin": 1
                },
                {
                    "scode": "02",
                    "weight": 7.7,
                    "end": 2,
                    "id": 2,
                    "text": "년",
                    "position": 280,
                    "type": "NNB",
                    "begin": 2
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 3,
                    "id": 3,
                    "text": "노벨",
                    "position": 284,
                    "type": "NNP",
                    "begin": 3
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 5,
                    "id": 4,
                    "text": "문학상",
                    "position": 291,
                    "type": "NNG",
                    "begin": 4
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 6,
                    "id": 5,
                    "text": ".",
                    "position": 300,
                    "type": "SF",
                    "begin": 6
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "-/SO",
                    "word_id": 0,
                    "m_end": 0,
                    "id": 0,
                    "target": "-",
                    "m_begin": 0
                },
                {
                    "result": "2017/SN+년/NNB",
                    "word_id": 1,
                    "m_end": 2,
                    "id": 1,
                    "target": "2017년",
                    "m_begin": 1
                },
                {
                    "result": "노벨/NNG",
                    "word_id": 2,
                    "m_end": 3,
                    "id": 2,
                    "target": "노벨",
                    "m_begin": 3
                },
                {
                    "result": "문학상/NNG+./SF",
                    "word_id": 3,
                    "m_end": 6,
                    "id": 3,
                    "target": "문학상.",
                    "m_begin": 4
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [
                    {
                        "indirect": 0,
                        "confidence": 0.9874095348186018,
                        "link": 2,
                        "end_offset": 14,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/노벨_문학상",
                        "relation": 0,
                        "score": 2.423245873936808,
                        "en_entity": "Nobel_Prize_in_Literature",
                        "text": "노벨문학상",
                        "start_offset": 8,
                        "id": 325148
                    }
                ],
                "d_entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 7,
                        "text": "2017년",
                        "start_offset": 2,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    }
                ],
                "merge": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 7,
                        "text": "2017년",
                        "start_offset": 2,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 2.423245873936808,
                        "indirect": 0,
                        "confidence": 0.9874095348186018,
                        "link": 2,
                        "end_offset": 14,
                        "text": "노벨문학상",
                        "start_offset": 8,
                        "id": 325148,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/노벨_문학상",
                        "relation": 0
                    }
                ]
            },
            "morp": [
                {
                    "lemma": "-",
                    "weight": 1,
                    "id": 0,
                    "position": 274,
                    "type": "SO"
                },
                {
                    "lemma": "2017",
                    "weight": 1,
                    "id": 1,
                    "position": 276,
                    "type": "SN"
                },
                {
                    "lemma": "년",
                    "weight": 0.414343,
                    "id": 2,
                    "position": 280,
                    "type": "NNB"
                },
                {
                    "lemma": "노벨",
                    "weight": 0.9,
                    "id": 3,
                    "position": 284,
                    "type": "NNP"
                },
                {
                    "lemma": "문학",
                    "weight": 0.27891,
                    "id": 4,
                    "position": 291,
                    "type": "NNG"
                },
                {
                    "lemma": "상",
                    "weight": 0.0834075,
                    "id": 5,
                    "position": 297,
                    "type": "NNG"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 6,
                    "position": 300,
                    "type": "SF"
                }
            ],
            "NE": [
                {
                    "weight": 0.70523,
                    "end": 2,
                    "id": 0,
                    "text": "2017년",
                    "type": "DT_YEAR",
                    "begin": 1,
                    "common_noun": 0
                },
                {
                    "weight": 0.939958,
                    "end": 5,
                    "id": 1,
                    "text": "노벨 문학상",
                    "type": "CV_PRIZE",
                    "begin": 3,
                    "common_noun": 0
                }
            ],
            "id": 4,
            "text": "- 2017년 노벨 문학상.",
            "word": [
                {
                    "end": 0,
                    "id": 0,
                    "text": "-",
                    "type": "",
                    "begin": 0
                },
                {
                    "end": 2,
                    "id": 1,
                    "text": "2017년",
                    "type": "",
                    "begin": 1
                },
                {
                    "end": 3,
                    "id": 2,
                    "text": "노벨",
                    "type": "",
                    "begin": 3
                },
                {
                    "end": 6,
                    "id": 3,
                    "text": "문학상.",
                    "type": "",
                    "begin": 4
                }
            ],
            "mod_NE": [
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 7,
                    "text": "2017년",
                    "start_offset": 2,
                    "type": "DT_YEAR",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 14,
                    "text": "노벨 문학상",
                    "start_offset": 8,
                    "type": "CV_PRIZE",
                    "relation": 0
                }
            ]
        }
    ]
};
var el_3 = {
    "sentence": [
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 2,
                    "key_begin": 0,
                    "id": 0,
                    "label": "NP_SBJ",
                    "text": "월트 디즈니 컴퍼니는",
                    "head_phrase": 2,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 4,
                    "key_begin": 3,
                    "id": 1,
                    "label": "VP_MOD",
                    "text": "미국의 거대한",
                    "head_phrase": 2,
                    "begin": 3,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 10,
                    "key_begin": 5,
                    "id": 2,
                    "label": "S",
                    "text": "P#0@SBJ는 P#1@MODㄴ 대중 매체 산업 관련 그룹 집단이며,",
                    "head_phrase": 4,
                    "begin": 0,
                    "sub_phrase": [
                        0,
                        1
                    ],
                    "element": [
                        {
                            "end": 14,
                            "ne_type": "",
                            "text": "대중 매체 산업 관련 그룹 집단",
                            "label": "NP",
                            "begin": 9
                        },
                        {
                            "end": 17,
                            "ne_type": "",
                            "text": "이며,",
                            "label": "VP",
                            "begin": 15
                        }
                    ]
                },
                {
                    "weight": 0,
                    "end": 11,
                    "key_begin": 11,
                    "id": 3,
                    "label": "AP",
                    "text": "가장",
                    "head_phrase": 4,
                    "begin": 11,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 12,
                    "key_begin": 12,
                    "id": 4,
                    "label": "S_MOD",
                    "text": "S#2@S며, P#3@AP가장 큰",
                    "head_phrase": 5,
                    "begin": 0,
                    "sub_phrase": [
                        2,
                        3
                    ],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 14,
                    "key_begin": 13,
                    "id": 5,
                    "label": "S",
                    "text": "S#4@MODㄴ 할리우드 스튜디오이다.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [
                        4
                    ],
                    "element": [
                        {
                            "end": 22,
                            "ne_type": "",
                            "text": "할리우드 스튜디오",
                            "label": "NP",
                            "begin": 21
                        },
                        {
                            "end": 25,
                            "ne_type": "",
                            "text": "이다.",
                            "label": "VP",
                            "begin": 23
                        }
                    ]
                }
            ],
            "dependency": [
                {
                    "head": 1,
                    "mod": [],
                    "weight": 0.0244853,
                    "id": 0,
                    "text": "월트",
                    "label": "NP"
                },
                {
                    "head": 2,
                    "mod": [
                        0
                    ],
                    "weight": 0.722038,
                    "id": 1,
                    "text": "디즈니",
                    "label": "NP"
                },
                {
                    "head": 10,
                    "mod": [
                        1
                    ],
                    "weight": 0.751617,
                    "id": 2,
                    "text": "컴퍼니는",
                    "label": "NP_SBJ"
                },
                {
                    "head": 4,
                    "mod": [],
                    "weight": 0.161314,
                    "id": 3,
                    "text": "미국의",
                    "label": "NP_MOD"
                },
                {
                    "head": 10,
                    "mod": [
                        3
                    ],
                    "weight": 0.809522,
                    "id": 4,
                    "text": "거대한",
                    "label": "VP_MOD"
                },
                {
                    "head": 6,
                    "mod": [],
                    "weight": 0.811577,
                    "id": 5,
                    "text": "대중",
                    "label": "NP"
                },
                {
                    "head": 10,
                    "mod": [
                        5
                    ],
                    "weight": 0.204936,
                    "id": 6,
                    "text": "매체",
                    "label": "NP"
                },
                {
                    "head": 8,
                    "mod": [],
                    "weight": 0.434215,
                    "id": 7,
                    "text": "산업",
                    "label": "NP"
                },
                {
                    "head": 9,
                    "mod": [
                        7
                    ],
                    "weight": 0.0527453,
                    "id": 8,
                    "text": "관련",
                    "label": "NP"
                },
                {
                    "head": 10,
                    "mod": [
                        8
                    ],
                    "weight": 0.813781,
                    "id": 9,
                    "text": "그룹",
                    "label": "NP"
                },
                {
                    "head": 12,
                    "mod": [
                        2,
                        4,
                        6,
                        9
                    ],
                    "weight": 0.587657,
                    "id": 10,
                    "text": "집단이며,",
                    "label": "VNP"
                },
                {
                    "head": 12,
                    "mod": [],
                    "weight": 0.815157,
                    "id": 11,
                    "text": "가장",
                    "label": "AP"
                },
                {
                    "head": 14,
                    "mod": [
                        10,
                        11
                    ],
                    "weight": 0.76375,
                    "id": 12,
                    "text": "큰",
                    "label": "VP_MOD"
                },
                {
                    "head": 14,
                    "mod": [],
                    "weight": 0.812614,
                    "id": 13,
                    "text": "할리우드",
                    "label": "NP"
                },
                {
                    "head": -1,
                    "mod": [
                        12,
                        13
                    ],
                    "weight": 0.00000132297,
                    "id": 14,
                    "text": "스튜디오이다.",
                    "label": "VNP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 0,
                    "id": 0,
                    "text": "월트",
                    "position": 0,
                    "type": "NNP",
                    "begin": 0
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 1,
                    "id": 1,
                    "text": "디즈니",
                    "position": 7,
                    "type": "NNP",
                    "begin": 1
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 2,
                    "id": 2,
                    "text": "컴퍼니",
                    "position": 17,
                    "type": "NNG",
                    "begin": 2
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 3,
                    "id": 3,
                    "text": "는",
                    "position": 26,
                    "type": "JX",
                    "begin": 3
                },
                {
                    "scode": "03",
                    "weight": 4.2,
                    "end": 4,
                    "id": 4,
                    "text": "미국",
                    "position": 30,
                    "type": "NNP",
                    "begin": 4
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 5,
                    "id": 5,
                    "text": "의",
                    "position": 36,
                    "type": "JKG",
                    "begin": 5
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 7,
                    "id": 6,
                    "text": "거대하",
                    "position": 40,
                    "type": "VA",
                    "begin": 6
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 8,
                    "id": 7,
                    "text": "ㄴ",
                    "position": 46,
                    "type": "ETM",
                    "begin": 8
                },
                {
                    "scode": "02",
                    "weight": 7.5,
                    "end": 9,
                    "id": 8,
                    "text": "대중",
                    "position": 50,
                    "type": "NNG",
                    "begin": 9
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 10,
                    "id": 9,
                    "text": "매체",
                    "position": 57,
                    "type": "NNG",
                    "begin": 10
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 11,
                    "id": 10,
                    "text": "산업",
                    "position": 64,
                    "type": "NNG",
                    "begin": 11
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 12,
                    "id": 11,
                    "text": "관련",
                    "position": 71,
                    "type": "NNG",
                    "begin": 12
                },
                {
                    "scode": "01",
                    "weight": 4,
                    "end": 13,
                    "id": 12,
                    "text": "그룹",
                    "position": 78,
                    "type": "NNG",
                    "begin": 13
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 14,
                    "id": 13,
                    "text": "집단",
                    "position": 85,
                    "type": "NNG",
                    "begin": 14
                },
                {
                    "scode": "01",
                    "weight": 1,
                    "end": 15,
                    "id": 14,
                    "text": "이",
                    "position": 91,
                    "type": "VCP",
                    "begin": 15
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 16,
                    "id": 15,
                    "text": "며",
                    "position": 94,
                    "type": "EC",
                    "begin": 16
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 17,
                    "id": 16,
                    "text": ",",
                    "position": 97,
                    "type": "SP",
                    "begin": 17
                },
                {
                    "scode": "01",
                    "weight": 5.4,
                    "end": 18,
                    "id": 17,
                    "text": "가장",
                    "position": 99,
                    "type": "MAG",
                    "begin": 18
                },
                {
                    "scode": "01",
                    "weight": 3.2,
                    "end": 19,
                    "id": 18,
                    "text": "크",
                    "position": 106,
                    "type": "VA",
                    "begin": 19
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 20,
                    "id": 19,
                    "text": "ㄴ",
                    "position": 106,
                    "type": "ETM",
                    "begin": 20
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 21,
                    "id": 20,
                    "text": "할리우드",
                    "position": 110,
                    "type": "NNP",
                    "begin": 21
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 22,
                    "id": 21,
                    "text": "스튜디오",
                    "position": 123,
                    "type": "NNG",
                    "begin": 22
                },
                {
                    "scode": "01",
                    "weight": 1,
                    "end": 23,
                    "id": 22,
                    "text": "이",
                    "position": 135,
                    "type": "VCP",
                    "begin": 23
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 24,
                    "id": 23,
                    "text": "다",
                    "position": 138,
                    "type": "EF",
                    "begin": 24
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 25,
                    "id": 24,
                    "text": ".",
                    "position": 141,
                    "type": "SF",
                    "begin": 25
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "월트/NNG",
                    "word_id": 0,
                    "m_end": 0,
                    "id": 0,
                    "target": "월트",
                    "m_begin": 0
                },
                {
                    "result": "디즈니/NNG",
                    "word_id": 1,
                    "m_end": 1,
                    "id": 1,
                    "target": "디즈니",
                    "m_begin": 1
                },
                {
                    "result": "컴퍼니/NNG+는/JX",
                    "word_id": 2,
                    "m_end": 3,
                    "id": 2,
                    "target": "컴퍼니는",
                    "m_begin": 2
                },
                {
                    "result": "미국/NNG+의/JKG",
                    "word_id": 3,
                    "m_end": 5,
                    "id": 3,
                    "target": "미국의",
                    "m_begin": 4
                },
                {
                    "result": "거대하/VA+ㄴ/ETM",
                    "word_id": 4,
                    "m_end": 8,
                    "id": 4,
                    "target": "거대한",
                    "m_begin": 6
                },
                {
                    "result": "대중/NNG",
                    "word_id": 5,
                    "m_end": 9,
                    "id": 5,
                    "target": "대중",
                    "m_begin": 9
                },
                {
                    "result": "매체/NNG",
                    "word_id": 6,
                    "m_end": 10,
                    "id": 6,
                    "target": "매체",
                    "m_begin": 10
                },
                {
                    "result": "산업/NNG",
                    "word_id": 7,
                    "m_end": 11,
                    "id": 7,
                    "target": "산업",
                    "m_begin": 11
                },
                {
                    "result": "관련/NNG",
                    "word_id": 8,
                    "m_end": 12,
                    "id": 8,
                    "target": "관련",
                    "m_begin": 12
                },
                {
                    "result": "그룹/NNG",
                    "word_id": 9,
                    "m_end": 13,
                    "id": 9,
                    "target": "그룹",
                    "m_begin": 13
                },
                {
                    "result": "집단/NNG+이/VCP+며/EC+,/SP",
                    "word_id": 10,
                    "m_end": 17,
                    "id": 10,
                    "target": "집단이며,",
                    "m_begin": 14
                },
                {
                    "result": "가장/MAG",
                    "word_id": 11,
                    "m_end": 18,
                    "id": 11,
                    "target": "가장",
                    "m_begin": 18
                },
                {
                    "result": "크/VA+ㄴ/ETM",
                    "word_id": 12,
                    "m_end": 20,
                    "id": 12,
                    "target": "큰",
                    "m_begin": 19
                },
                {
                    "result": "할리우드/NNG",
                    "word_id": 13,
                    "m_end": 21,
                    "id": 13,
                    "target": "할리우드",
                    "m_begin": 21
                },
                {
                    "result": "스튜디오/NNG+이/VCP+다/EF+./SF",
                    "word_id": 14,
                    "m_end": 25,
                    "id": 14,
                    "target": "스튜디오이다.",
                    "m_begin": 22
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "en_entity": "The_Walt_Disney_Company",
                        "link": 0,
                        "end_offset": 10,
                        "text": "월트 디즈니 컴퍼니",
                        "start_offset": 0,
                        "source": "NER",
                        "type": "OGG_ECONOMY",
                        "uri": "http://ko.dbpedia.org/resource/월트_디즈니_컴퍼니",
                        "relation": 0
                    },
                    {
                        "indirect": 0,
                        "confidence": 1.043900196769544,
                        "link": 46,
                        "end_offset": 14,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/미국",
                        "relation": 23,
                        "score": 4.473720477419829,
                        "en_entity": "United_States",
                        "text": "미국",
                        "start_offset": 12,
                        "id": 325178
                    },
                    {
                        "indirect": 0,
                        "confidence": 0.9681364533258932,
                        "link": 0,
                        "end_offset": 55,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/스튜디오",
                        "relation": 0,
                        "score": 1.4771212547196624,
                        "en_entity": "Studio",
                        "text": "스튜디오",
                        "start_offset": 51,
                        "id": 325179
                    }
                ],
                "d_entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 50,
                        "text": "할리우드",
                        "start_offset": 46,
                        "source": "DE",
                        "type": "LC_OTHERS",
                        "uri": "",
                        "relation": 0
                    }
                ],
                "merge": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 10,
                        "text": "월트 디즈니 컴퍼니",
                        "start_offset": 0,
                        "source": "NER",
                        "type": "OGG_ECONOMY",
                        "uri": "http://ko.dbpedia.org/resource/월트_디즈니_컴퍼니",
                        "relation": 0
                    },
                    {
                        "score": 4.473720477419829,
                        "indirect": 0,
                        "confidence": 1.043900196769544,
                        "link": 46,
                        "end_offset": 14,
                        "text": "미국",
                        "start_offset": 12,
                        "id": 325178,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/미국",
                        "relation": 23
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 50,
                        "text": "할리우드",
                        "start_offset": 46,
                        "source": "DE",
                        "type": "LC_OTHERS",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 1.4771212547196624,
                        "indirect": 0,
                        "confidence": 0.9681364533258932,
                        "link": 0,
                        "end_offset": 55,
                        "text": "스튜디오",
                        "start_offset": 51,
                        "id": 325179,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/스튜디오",
                        "relation": 0
                    }
                ]
            },
            "morp": [
                {
                    "lemma": "월트",
                    "weight": 0.4,
                    "id": 0,
                    "position": 0,
                    "type": "NNP"
                },
                {
                    "lemma": "디즈니",
                    "weight": 0.9,
                    "id": 1,
                    "position": 7,
                    "type": "NNP"
                },
                {
                    "lemma": "컴퍼니",
                    "weight": 0.9,
                    "id": 2,
                    "position": 17,
                    "type": "NNG"
                },
                {
                    "lemma": "는",
                    "weight": 0.0287565,
                    "id": 3,
                    "position": 26,
                    "type": "JX"
                },
                {
                    "lemma": "미국",
                    "weight": 0.0448659,
                    "id": 4,
                    "position": 30,
                    "type": "NNP"
                },
                {
                    "lemma": "의",
                    "weight": 0.0987295,
                    "id": 5,
                    "position": 36,
                    "type": "JKG"
                },
                {
                    "lemma": "거대",
                    "weight": 0.9,
                    "id": 6,
                    "position": 40,
                    "type": "NNG"
                },
                {
                    "lemma": "하",
                    "weight": 0.0001,
                    "id": 7,
                    "position": 46,
                    "type": "XSA"
                },
                {
                    "lemma": "ㄴ",
                    "weight": 0.488779,
                    "id": 8,
                    "position": 46,
                    "type": "ETM"
                },
                {
                    "lemma": "대중",
                    "weight": 0.656567,
                    "id": 9,
                    "position": 50,
                    "type": "NNG"
                },
                {
                    "lemma": "매체",
                    "weight": 0.9,
                    "id": 10,
                    "position": 57,
                    "type": "NNG"
                },
                {
                    "lemma": "산업",
                    "weight": 0.184753,
                    "id": 11,
                    "position": 64,
                    "type": "NNG"
                },
                {
                    "lemma": "관련",
                    "weight": 0.9,
                    "id": 12,
                    "position": 71,
                    "type": "NNG"
                },
                {
                    "lemma": "그룹",
                    "weight": 0.184738,
                    "id": 13,
                    "position": 78,
                    "type": "NNG"
                },
                {
                    "lemma": "집단",
                    "weight": 0.9,
                    "id": 14,
                    "position": 85,
                    "type": "NNG"
                },
                {
                    "lemma": "이",
                    "weight": 0.0177525,
                    "id": 15,
                    "position": 91,
                    "type": "VCP"
                },
                {
                    "lemma": "며",
                    "weight": 0.250555,
                    "id": 16,
                    "position": 94,
                    "type": "EC"
                },
                {
                    "lemma": ",",
                    "weight": 1,
                    "id": 17,
                    "position": 97,
                    "type": "SP"
                },
                {
                    "lemma": "가장",
                    "weight": 0.0564166,
                    "id": 18,
                    "position": 99,
                    "type": "MAG"
                },
                {
                    "lemma": "크",
                    "weight": 0.131358,
                    "id": 19,
                    "position": 106,
                    "type": "VA"
                },
                {
                    "lemma": "ㄴ",
                    "weight": 0.430446,
                    "id": 20,
                    "position": 106,
                    "type": "ETM"
                },
                {
                    "lemma": "할리우드",
                    "weight": 0.9,
                    "id": 21,
                    "position": 110,
                    "type": "NNP"
                },
                {
                    "lemma": "스튜디오",
                    "weight": 0.281036,
                    "id": 22,
                    "position": 123,
                    "type": "NNG"
                },
                {
                    "lemma": "이",
                    "weight": 0.0177525,
                    "id": 23,
                    "position": 135,
                    "type": "VCP"
                },
                {
                    "lemma": "다",
                    "weight": 0.353579,
                    "id": 24,
                    "position": 138,
                    "type": "EF"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 25,
                    "position": 141,
                    "type": "SF"
                }
            ],
            "NE": [
                {
                    "weight": 0.472852,
                    "end": 2,
                    "id": 0,
                    "text": "월트 디즈니 컴퍼니",
                    "type": "OGG_ECONOMY",
                    "begin": 0,
                    "common_noun": 0
                },
                {
                    "weight": 0.912929,
                    "end": 4,
                    "id": 1,
                    "text": "미국",
                    "type": "LCP_COUNTRY",
                    "begin": 4,
                    "common_noun": 0
                },
                {
                    "weight": 0.752472,
                    "end": 21,
                    "id": 2,
                    "text": "할리우드",
                    "type": "LC_OTHERS",
                    "begin": 21,
                    "common_noun": 0
                }
            ],
            "id": 0,
            "text": "월트 디즈니 컴퍼니는 미국의 거대한 대중 매체 산업 관련 그룹 집단이며, 가장 큰 할리우드 스튜디오이다.",
            "word": [
                {
                    "end": 0,
                    "id": 0,
                    "text": "월트",
                    "type": "",
                    "begin": 0
                },
                {
                    "end": 1,
                    "id": 1,
                    "text": "디즈니",
                    "type": "",
                    "begin": 1
                },
                {
                    "end": 3,
                    "id": 2,
                    "text": "컴퍼니는",
                    "type": "",
                    "begin": 2
                },
                {
                    "end": 5,
                    "id": 3,
                    "text": "미국의",
                    "type": "",
                    "begin": 4
                },
                {
                    "end": 8,
                    "id": 4,
                    "text": "거대한",
                    "type": "",
                    "begin": 6
                },
                {
                    "end": 9,
                    "id": 5,
                    "text": "대중",
                    "type": "",
                    "begin": 9
                },
                {
                    "end": 10,
                    "id": 6,
                    "text": "매체",
                    "type": "",
                    "begin": 10
                },
                {
                    "end": 11,
                    "id": 7,
                    "text": "산업",
                    "type": "",
                    "begin": 11
                },
                {
                    "end": 12,
                    "id": 8,
                    "text": "관련",
                    "type": "",
                    "begin": 12
                },
                {
                    "end": 13,
                    "id": 9,
                    "text": "그룹",
                    "type": "",
                    "begin": 13
                },
                {
                    "end": 17,
                    "id": 10,
                    "text": "집단이며,",
                    "type": "",
                    "begin": 14
                },
                {
                    "end": 18,
                    "id": 11,
                    "text": "가장",
                    "type": "",
                    "begin": 18
                },
                {
                    "end": 20,
                    "id": 12,
                    "text": "큰",
                    "type": "",
                    "begin": 19
                },
                {
                    "end": 21,
                    "id": 13,
                    "text": "할리우드",
                    "type": "",
                    "begin": 21
                },
                {
                    "end": 25,
                    "id": 14,
                    "text": "스튜디오이다.",
                    "type": "",
                    "begin": 22
                }
            ],
            "mod_NE": [
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 10,
                    "text": "월트 디즈니 컴퍼니",
                    "start_offset": 0,
                    "type": "OGG_ECONOMY",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 14,
                    "text": "미국",
                    "start_offset": 12,
                    "type": "LCP_COUNTRY",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 50,
                    "text": "할리우드",
                    "start_offset": 46,
                    "type": "LC_OTHERS",
                    "relation": 0
                }
            ]
        },
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 3,
                    "key_begin": 0,
                    "id": 0,
                    "label": "NP_SBJ",
                    "text": "본사와 주요 제작 시설은",
                    "head_phrase": 2,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": [
                        {
                            "end": 0,
                            "ne_type": "",
                            "text": "본사",
                            "label": "NP_SBJ",
                            "begin": 0
                        },
                        {
                            "end": 4,
                            "ne_type": "",
                            "text": "주요 제작 시설",
                            "label": "NP_SBJ",
                            "begin": 2
                        }
                    ]
                },
                {
                    "weight": 0,
                    "end": 9,
                    "key_begin": 4,
                    "id": 1,
                    "label": "NP_AJT",
                    "text": "캘리포니아 주 버뱅크의 월트 디즈니 스튜디오에",
                    "head_phrase": 2,
                    "begin": 4,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 11,
                    "key_begin": 10,
                    "id": 2,
                    "label": "S",
                    "text": "P#0@SBJ은 P#1@AJT에 위치하고 있다.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [
                        0,
                        1
                    ],
                    "element": []
                }
            ],
            "dependency": [
                {
                    "head": 3,
                    "mod": [],
                    "weight": 0.836943,
                    "id": 0,
                    "text": "본사와",
                    "label": "NP_CNJ"
                },
                {
                    "head": 2,
                    "mod": [],
                    "weight": 0.284919,
                    "id": 1,
                    "text": "주요",
                    "label": "NP"
                },
                {
                    "head": 3,
                    "mod": [
                        1
                    ],
                    "weight": 0.750624,
                    "id": 2,
                    "text": "제작",
                    "label": "NP"
                },
                {
                    "head": 10,
                    "mod": [
                        0,
                        2
                    ],
                    "weight": 0.744244,
                    "id": 3,
                    "text": "시설은",
                    "label": "NP_SBJ"
                },
                {
                    "head": 5,
                    "mod": [],
                    "weight": 0.745695,
                    "id": 4,
                    "text": "캘리포니아",
                    "label": "NP"
                },
                {
                    "head": 6,
                    "mod": [
                        4
                    ],
                    "weight": 0.612015,
                    "id": 5,
                    "text": "주",
                    "label": "NP"
                },
                {
                    "head": 9,
                    "mod": [
                        5
                    ],
                    "weight": 0.741858,
                    "id": 6,
                    "text": "버뱅크의",
                    "label": "NP_MOD"
                },
                {
                    "head": 8,
                    "mod": [],
                    "weight": 0.455206,
                    "id": 7,
                    "text": "월트",
                    "label": "NP"
                },
                {
                    "head": 9,
                    "mod": [
                        7
                    ],
                    "weight": 0.738787,
                    "id": 8,
                    "text": "디즈니",
                    "label": "NP"
                },
                {
                    "head": 10,
                    "mod": [
                        6,
                        8
                    ],
                    "weight": 0.731426,
                    "id": 9,
                    "text": "스튜디오에",
                    "label": "NP_AJT"
                },
                {
                    "head": 11,
                    "mod": [
                        3,
                        9
                    ],
                    "weight": 0.74322,
                    "id": 10,
                    "text": "위치하고",
                    "label": "VP"
                },
                {
                    "head": -1,
                    "mod": [
                        10
                    ],
                    "weight": 0.00654677,
                    "id": 11,
                    "text": "있다.",
                    "label": "VP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "03",
                    "weight": 1,
                    "end": 0,
                    "id": 0,
                    "text": "본사",
                    "position": 143,
                    "type": "NNG",
                    "begin": 0
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 1,
                    "id": 1,
                    "text": "와",
                    "position": 149,
                    "type": "JC",
                    "begin": 1
                },
                {
                    "scode": "01",
                    "weight": 2.2,
                    "end": 2,
                    "id": 2,
                    "text": "주요",
                    "position": 153,
                    "type": "NNG",
                    "begin": 2
                },
                {
                    "scode": "02",
                    "weight": 2,
                    "end": 3,
                    "id": 3,
                    "text": "제작",
                    "position": 160,
                    "type": "NNG",
                    "begin": 3
                },
                {
                    "scode": "03",
                    "weight": 3.2,
                    "end": 4,
                    "id": 4,
                    "text": "시설",
                    "position": 167,
                    "type": "NNG",
                    "begin": 4
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 5,
                    "id": 5,
                    "text": "은",
                    "position": 173,
                    "type": "JX",
                    "begin": 5
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 6,
                    "id": 6,
                    "text": "캘리포니아",
                    "position": 177,
                    "type": "NNP",
                    "begin": 6
                },
                {
                    "scode": "05",
                    "weight": 3.3,
                    "end": 7,
                    "id": 7,
                    "text": "주",
                    "position": 193,
                    "type": "NNG",
                    "begin": 7
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 8,
                    "id": 8,
                    "text": "버뱅크",
                    "position": 197,
                    "type": "NNP",
                    "begin": 8
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 9,
                    "id": 9,
                    "text": "의",
                    "position": 206,
                    "type": "JKG",
                    "begin": 9
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 10,
                    "id": 10,
                    "text": "월트",
                    "position": 210,
                    "type": "NNP",
                    "begin": 10
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 11,
                    "id": 11,
                    "text": "디즈니",
                    "position": 217,
                    "type": "NNP",
                    "begin": 11
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 12,
                    "id": 12,
                    "text": "스튜디오",
                    "position": 227,
                    "type": "NNG",
                    "begin": 12
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 13,
                    "id": 13,
                    "text": "에",
                    "position": 239,
                    "type": "JKB",
                    "begin": 13
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 15,
                    "id": 14,
                    "text": "위치하",
                    "position": 243,
                    "type": "VV",
                    "begin": 14
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 16,
                    "id": 15,
                    "text": "고",
                    "position": 252,
                    "type": "EC",
                    "begin": 16
                },
                {
                    "scode": "01",
                    "weight": 4.4,
                    "end": 17,
                    "id": 16,
                    "text": "있",
                    "position": 256,
                    "type": "VX",
                    "begin": 17
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 18,
                    "id": 17,
                    "text": "다",
                    "position": 259,
                    "type": "EF",
                    "begin": 18
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 19,
                    "id": 18,
                    "text": ".",
                    "position": 262,
                    "type": "SF",
                    "begin": 19
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "본사/NNG+와/JC",
                    "word_id": 0,
                    "m_end": 1,
                    "id": 0,
                    "target": "본사와",
                    "m_begin": 0
                },
                {
                    "result": "주요/NNG",
                    "word_id": 1,
                    "m_end": 2,
                    "id": 1,
                    "target": "주요",
                    "m_begin": 2
                },
                {
                    "result": "제작/NNG",
                    "word_id": 2,
                    "m_end": 3,
                    "id": 2,
                    "target": "제작",
                    "m_begin": 3
                },
                {
                    "result": "시설/NNG+은/JX",
                    "word_id": 3,
                    "m_end": 5,
                    "id": 3,
                    "target": "시설은",
                    "m_begin": 4
                },
                {
                    "result": "캘리포니아/NNG",
                    "word_id": 4,
                    "m_end": 6,
                    "id": 4,
                    "target": "캘리포니아",
                    "m_begin": 6
                },
                {
                    "result": "주/NNG",
                    "word_id": 5,
                    "m_end": 7,
                    "id": 5,
                    "target": "주",
                    "m_begin": 7
                },
                {
                    "result": "버뱅크/NNG+의/JKG",
                    "word_id": 6,
                    "m_end": 9,
                    "id": 6,
                    "target": "버뱅크의",
                    "m_begin": 8
                },
                {
                    "result": "월트/NNG",
                    "word_id": 7,
                    "m_end": 10,
                    "id": 7,
                    "target": "월트",
                    "m_begin": 10
                },
                {
                    "result": "디즈니/NNG",
                    "word_id": 8,
                    "m_end": 11,
                    "id": 8,
                    "target": "디즈니",
                    "m_begin": 11
                },
                {
                    "result": "스튜디오/NNG+에/JKB",
                    "word_id": 9,
                    "m_end": 13,
                    "id": 9,
                    "target": "스튜디오에",
                    "m_begin": 12
                },
                {
                    "result": "위치하/VV+고/EC",
                    "word_id": 10,
                    "m_end": 16,
                    "id": 10,
                    "target": "위치하고",
                    "m_begin": 14
                },
                {
                    "result": "있/VX+다/EF+./SF",
                    "word_id": 11,
                    "m_end": 19,
                    "id": 11,
                    "target": "있다.",
                    "m_begin": 17
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [
                    {
                        "indirect": 0,
                        "confidence": 1.01119701025744,
                        "link": 111,
                        "end_offset": 21,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing",
                            "http://www.ontologydesignpatterns.org/ont/d0.owl#Location",
                            "http://dbpedia.org/ontology/AdministrativeRegion",
                            "http://dbpedia.org/ontology/Place",
                            "http://dbpedia.org/ontology/PopulatedPlace",
                            "http://dbpedia.org/ontology/Region",
                            "http://dbpedia.org/ontology/Wikidata:Q532",
                            "http://schema.org/AdministrativeArea",
                            "http://schema.org/Place",
                            "http://www.wikidata.org/entity/Q3455524",
                            "http://www.wikidata.org/entity/Q486972",
                            "http://dbpedia.org/ontology/Location"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/캘리포니아_주",
                        "relation": 69,
                        "score": 3.787672964687493,
                        "en_entity": "California",
                        "text": "캘리포니아주",
                        "start_offset": 14,
                        "id": 325181
                    },
                    {
                        "indirect": 0,
                        "confidence": 0.9781416494211386,
                        "link": 8,
                        "end_offset": 25,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/버뱅크_(캘리포니아_주)",
                        "relation": 0,
                        "score": 1.9084850188786497,
                        "en_entity": "Burbank,_California",
                        "text": "버뱅크",
                        "start_offset": 22,
                        "id": 325183
                    },
                    {
                        "indirect": 0,
                        "confidence": 0.9875979613960006,
                        "link": 35,
                        "end_offset": 38,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/월트_디즈니_스튜디오_모션_픽처스",
                        "relation": 0,
                        "score": 2.1492191126553797,
                        "en_entity": null,
                        "text": "월트디즈니스튜디오",
                        "start_offset": 27,
                        "id": 325186
                    },
                    {
                        "indirect": 0,
                        "confidence": 0.9481291659949829,
                        "link": 0,
                        "end_offset": 42,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/위치_(잡지)",
                        "relation": 0,
                        "score": 0.47712125471966244,
                        "en_entity": null,
                        "text": "위치",
                        "start_offset": 40,
                        "id": 325188
                    }
                ],
                "d_entities": [],
                "merge": [
                    {
                        "score": 3.787672964687493,
                        "indirect": 0,
                        "confidence": 1.01119701025744,
                        "link": 111,
                        "end_offset": 21,
                        "text": "캘리포니아주",
                        "start_offset": 14,
                        "id": 325181,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing",
                            "http://www.ontologydesignpatterns.org/ont/d0.owl#Location",
                            "http://dbpedia.org/ontology/AdministrativeRegion",
                            "http://dbpedia.org/ontology/Place",
                            "http://dbpedia.org/ontology/PopulatedPlace",
                            "http://dbpedia.org/ontology/Region",
                            "http://dbpedia.org/ontology/Wikidata:Q532",
                            "http://schema.org/AdministrativeArea",
                            "http://schema.org/Place",
                            "http://www.wikidata.org/entity/Q3455524",
                            "http://www.wikidata.org/entity/Q486972",
                            "http://dbpedia.org/ontology/Location"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/캘리포니아_주",
                        "relation": 69
                    },
                    {
                        "score": 1.9084850188786497,
                        "indirect": 0,
                        "confidence": 0.9781416494211386,
                        "link": 8,
                        "end_offset": 25,
                        "text": "버뱅크",
                        "start_offset": 22,
                        "id": 325183,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/버뱅크_(캘리포니아_주)",
                        "relation": 0
                    },
                    {
                        "score": 2.1492191126553797,
                        "indirect": 0,
                        "confidence": 0.9875979613960006,
                        "link": 35,
                        "end_offset": 38,
                        "text": "월트디즈니스튜디오",
                        "start_offset": 27,
                        "id": 325186,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/월트_디즈니_스튜디오_모션_픽처스",
                        "relation": 0
                    },
                    {
                        "score": 0.47712125471966244,
                        "indirect": 0,
                        "confidence": 0.9481291659949829,
                        "link": 0,
                        "end_offset": 42,
                        "text": "위치",
                        "start_offset": 40,
                        "id": 325188,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/위치_(잡지)",
                        "relation": 0
                    }
                ]
            },
            "morp": [
                {
                    "lemma": "본사",
                    "weight": 0.9,
                    "id": 0,
                    "position": 143,
                    "type": "NNG"
                },
                {
                    "lemma": "와",
                    "weight": 0.0169714,
                    "id": 1,
                    "position": 149,
                    "type": "JC"
                },
                {
                    "lemma": "주요",
                    "weight": 0.9,
                    "id": 2,
                    "position": 153,
                    "type": "NNG"
                },
                {
                    "lemma": "제작",
                    "weight": 0.9,
                    "id": 3,
                    "position": 160,
                    "type": "NNG"
                },
                {
                    "lemma": "시설",
                    "weight": 0.9,
                    "id": 4,
                    "position": 167,
                    "type": "NNG"
                },
                {
                    "lemma": "은",
                    "weight": 0.0449928,
                    "id": 5,
                    "position": 173,
                    "type": "JX"
                },
                {
                    "lemma": "캘리포니아",
                    "weight": 0.9,
                    "id": 6,
                    "position": 177,
                    "type": "NNP"
                },
                {
                    "lemma": "주",
                    "weight": 0.0177845,
                    "id": 7,
                    "position": 193,
                    "type": "NNG"
                },
                {
                    "lemma": "버뱅크",
                    "weight": 0.1,
                    "id": 8,
                    "position": 197,
                    "type": "NNP"
                },
                {
                    "lemma": "의",
                    "weight": 0.0987295,
                    "id": 9,
                    "position": 206,
                    "type": "JKG"
                },
                {
                    "lemma": "월트",
                    "weight": 0.4,
                    "id": 10,
                    "position": 210,
                    "type": "NNP"
                },
                {
                    "lemma": "디즈니",
                    "weight": 0.9,
                    "id": 11,
                    "position": 217,
                    "type": "NNP"
                },
                {
                    "lemma": "스튜디오",
                    "weight": 0.281036,
                    "id": 12,
                    "position": 227,
                    "type": "NNG"
                },
                {
                    "lemma": "에",
                    "weight": 0.153364,
                    "id": 13,
                    "position": 239,
                    "type": "JKB"
                },
                {
                    "lemma": "위치",
                    "weight": 0.207864,
                    "id": 14,
                    "position": 243,
                    "type": "NNG"
                },
                {
                    "lemma": "하",
                    "weight": 0.0001,
                    "id": 15,
                    "position": 249,
                    "type": "XSV"
                },
                {
                    "lemma": "고",
                    "weight": 0.359917,
                    "id": 16,
                    "position": 252,
                    "type": "EC"
                },
                {
                    "lemma": "있",
                    "weight": 0.125953,
                    "id": 17,
                    "position": 256,
                    "type": "VX"
                },
                {
                    "lemma": "다",
                    "weight": 0.180366,
                    "id": 18,
                    "position": 259,
                    "type": "EF"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 19,
                    "position": 262,
                    "type": "SF"
                }
            ],
            "NE": [
                {
                    "weight": 0.742656,
                    "end": 7,
                    "id": 0,
                    "text": "캘리포니아 주",
                    "type": "LCP_PROVINCE",
                    "begin": 6,
                    "common_noun": 0
                },
                {
                    "weight": 0.396645,
                    "end": 8,
                    "id": 1,
                    "text": "버뱅크",
                    "type": "LCP_CITY",
                    "begin": 8,
                    "common_noun": 0
                },
                {
                    "weight": 0.105765,
                    "end": 12,
                    "id": 2,
                    "text": "월트 디즈니 스튜디오",
                    "type": "OGG_ECONOMY",
                    "begin": 10,
                    "common_noun": 0
                }
            ],
            "id": 1,
            "text": " 본사와 주요 제작 시설은 캘리포니아 주 버뱅크의 월트 디즈니 스튜디오에 위치하고 있다.",
            "word": [
                {
                    "end": 1,
                    "id": 0,
                    "text": "본사와",
                    "type": "",
                    "begin": 0
                },
                {
                    "end": 2,
                    "id": 1,
                    "text": "주요",
                    "type": "",
                    "begin": 2
                },
                {
                    "end": 3,
                    "id": 2,
                    "text": "제작",
                    "type": "",
                    "begin": 3
                },
                {
                    "end": 5,
                    "id": 3,
                    "text": "시설은",
                    "type": "",
                    "begin": 4
                },
                {
                    "end": 6,
                    "id": 4,
                    "text": "캘리포니아",
                    "type": "",
                    "begin": 6
                },
                {
                    "end": 7,
                    "id": 5,
                    "text": "주",
                    "type": "",
                    "begin": 7
                },
                {
                    "end": 9,
                    "id": 6,
                    "text": "버뱅크의",
                    "type": "",
                    "begin": 8
                },
                {
                    "end": 10,
                    "id": 7,
                    "text": "월트",
                    "type": "",
                    "begin": 10
                },
                {
                    "end": 11,
                    "id": 8,
                    "text": "디즈니",
                    "type": "",
                    "begin": 11
                },
                {
                    "end": 13,
                    "id": 9,
                    "text": "스튜디오에",
                    "type": "",
                    "begin": 12
                },
                {
                    "end": 16,
                    "id": 10,
                    "text": "위치하고",
                    "type": "",
                    "begin": 14
                },
                {
                    "end": 19,
                    "id": 11,
                    "text": "있다.",
                    "type": "",
                    "begin": 17
                }
            ],
            "mod_NE": [
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 21,
                    "text": "캘리포니아 주",
                    "start_offset": 14,
                    "type": "LCP_PROVINCE",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 25,
                    "text": "버뱅크",
                    "start_offset": 22,
                    "type": "LCP_CITY",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 38,
                    "text": "월트 디즈니 스튜디오",
                    "start_offset": 27,
                    "type": "OGG_ECONOMY",
                    "relation": 0
                }
            ]
        },
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 3,
                    "key_begin": 0,
                    "id": 0,
                    "label": "NP_SBJ",
                    "text": "월트 디즈니와 로이 디즈니가",
                    "head_phrase": 3,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": [
                        {
                            "end": 1,
                            "ne_type": "PS_NAME",
                            "text": "월트 디즈니",
                            "label": "NP_SBJ",
                            "begin": 0
                        },
                        {
                            "end": 4,
                            "ne_type": "PS_NAME",
                            "text": "로이 디즈니",
                            "label": "NP_SBJ",
                            "begin": 3
                        }
                    ]
                },
                {
                    "weight": 0,
                    "end": 4,
                    "key_begin": 4,
                    "id": 1,
                    "label": "AP",
                    "text": "함께",
                    "head_phrase": 3,
                    "begin": 4,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 5,
                    "key_begin": 5,
                    "id": 2,
                    "label": "NP_AJT",
                    "text": "1923년에",
                    "head_phrase": 3,
                    "begin": 5,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 6,
                    "key_begin": 6,
                    "id": 3,
                    "label": "S",
                    "text": "P#0@SBJ가 P#1@AP함께 P#2@AJT에 창립했고",
                    "head_phrase": 6,
                    "begin": 0,
                    "sub_phrase": [
                        0,
                        1,
                        2
                    ],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 7,
                    "key_begin": 7,
                    "id": 4,
                    "label": "AP",
                    "text": "꾸준히",
                    "head_phrase": 6,
                    "begin": 7,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 8,
                    "key_begin": 8,
                    "id": 5,
                    "label": "NP_OBJ",
                    "text": "애니메이션을",
                    "head_phrase": 6,
                    "begin": 8,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 10,
                    "key_begin": 9,
                    "id": 6,
                    "label": "S",
                    "text": "S#3@S고 P#4@AP꾸준히 P#5@OBJ을 제작하고 있다.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [
                        3,
                        4,
                        5
                    ],
                    "element": []
                }
            ],
            "dependency": [
                {
                    "head": 1,
                    "mod": [],
                    "weight": 0.732128,
                    "id": 0,
                    "text": "월트",
                    "label": "NP"
                },
                {
                    "head": 3,
                    "mod": [
                        0
                    ],
                    "weight": 0.661391,
                    "id": 1,
                    "text": "디즈니와",
                    "label": "NP_CNJ"
                },
                {
                    "head": 3,
                    "mod": [],
                    "weight": 0.76702,
                    "id": 2,
                    "text": "로이",
                    "label": "NP"
                },
                {
                    "head": 6,
                    "mod": [
                        1,
                        2
                    ],
                    "weight": 0.87072,
                    "id": 3,
                    "text": "디즈니가",
                    "label": "NP_SBJ"
                },
                {
                    "head": 6,
                    "mod": [],
                    "weight": 0.724541,
                    "id": 4,
                    "text": "함께",
                    "label": "AP"
                },
                {
                    "head": 6,
                    "mod": [],
                    "weight": 0.883817,
                    "id": 5,
                    "text": "1923년에",
                    "label": "NP_AJT"
                },
                {
                    "head": 9,
                    "mod": [
                        3,
                        4,
                        5
                    ],
                    "weight": 0.793586,
                    "id": 6,
                    "text": "창립했고",
                    "label": "VP"
                },
                {
                    "head": 9,
                    "mod": [],
                    "weight": 0.778196,
                    "id": 7,
                    "text": "꾸준히",
                    "label": "AP"
                },
                {
                    "head": 9,
                    "mod": [],
                    "weight": 0.786674,
                    "id": 8,
                    "text": "애니메이션을",
                    "label": "NP_OBJ"
                },
                {
                    "head": 10,
                    "mod": [
                        6,
                        7,
                        8
                    ],
                    "weight": 0.766022,
                    "id": 9,
                    "text": "제작하고",
                    "label": "VP"
                },
                {
                    "head": -1,
                    "mod": [
                        9
                    ],
                    "weight": 0.06296,
                    "id": 10,
                    "text": "있다.",
                    "label": "VP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 0,
                    "id": 0,
                    "text": "월트",
                    "position": 264,
                    "type": "NNP",
                    "begin": 0
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 1,
                    "id": 1,
                    "text": "디즈니",
                    "position": 271,
                    "type": "NNP",
                    "begin": 1
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 2,
                    "id": 2,
                    "text": "와",
                    "position": 280,
                    "type": "JC",
                    "begin": 2
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 3,
                    "id": 3,
                    "text": "로이",
                    "position": 284,
                    "type": "NNP",
                    "begin": 3
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 4,
                    "id": 4,
                    "text": "디즈니",
                    "position": 291,
                    "type": "NNP",
                    "begin": 4
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 5,
                    "id": 5,
                    "text": "가",
                    "position": 300,
                    "type": "JKS",
                    "begin": 5
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 6,
                    "id": 6,
                    "text": "함께",
                    "position": 304,
                    "type": "MAG",
                    "begin": 6
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 7,
                    "id": 7,
                    "text": "1923",
                    "position": 311,
                    "type": "SN",
                    "begin": 7
                },
                {
                    "scode": "02",
                    "weight": 9.88734,
                    "end": 8,
                    "id": 8,
                    "text": "년",
                    "position": 315,
                    "type": "NNB",
                    "begin": 8
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 9,
                    "id": 9,
                    "text": "에",
                    "position": 318,
                    "type": "JKB",
                    "begin": 9
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 11,
                    "id": 10,
                    "text": "창립하",
                    "position": 322,
                    "type": "VV",
                    "begin": 10
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 12,
                    "id": 11,
                    "text": "었",
                    "position": 328,
                    "type": "EP",
                    "begin": 12
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 13,
                    "id": 12,
                    "text": "고",
                    "position": 331,
                    "type": "EC",
                    "begin": 13
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 14,
                    "id": 13,
                    "text": "꾸준히",
                    "position": 335,
                    "type": "MAG",
                    "begin": 14
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 15,
                    "id": 14,
                    "text": "애니메이션",
                    "position": 345,
                    "type": "NNG",
                    "begin": 15
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 16,
                    "id": 15,
                    "text": "을",
                    "position": 360,
                    "type": "JKO",
                    "begin": 16
                },
                {
                    "scode": "02",
                    "weight": 1,
                    "end": 18,
                    "id": 16,
                    "text": "제작하",
                    "position": 364,
                    "type": "VV",
                    "begin": 17
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 19,
                    "id": 17,
                    "text": "고",
                    "position": 373,
                    "type": "EC",
                    "begin": 19
                },
                {
                    "scode": "01",
                    "weight": 3.2,
                    "end": 20,
                    "id": 18,
                    "text": "있",
                    "position": 377,
                    "type": "VX",
                    "begin": 20
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 21,
                    "id": 19,
                    "text": "다",
                    "position": 380,
                    "type": "EF",
                    "begin": 21
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 22,
                    "id": 20,
                    "text": ".",
                    "position": 383,
                    "type": "SF",
                    "begin": 22
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "월트/NNG",
                    "word_id": 0,
                    "m_end": 0,
                    "id": 0,
                    "target": "월트",
                    "m_begin": 0
                },
                {
                    "result": "디즈니/NNG+와/JC",
                    "word_id": 1,
                    "m_end": 2,
                    "id": 1,
                    "target": "디즈니와",
                    "m_begin": 1
                },
                {
                    "result": "로이/NNG",
                    "word_id": 2,
                    "m_end": 3,
                    "id": 2,
                    "target": "로이",
                    "m_begin": 3
                },
                {
                    "result": "디즈니/NNG+가/JKS",
                    "word_id": 3,
                    "m_end": 5,
                    "id": 3,
                    "target": "디즈니가",
                    "m_begin": 4
                },
                {
                    "result": "함께/MAG",
                    "word_id": 4,
                    "m_end": 6,
                    "id": 4,
                    "target": "함께",
                    "m_begin": 6
                },
                {
                    "result": "1923/SN+년/NNB+에/JKB",
                    "word_id": 5,
                    "m_end": 9,
                    "id": 5,
                    "target": "1923년에",
                    "m_begin": 7
                },
                {
                    "result": "창립하/VV+었/EP+고/EC",
                    "word_id": 6,
                    "m_end": 13,
                    "id": 6,
                    "target": "창립했고",
                    "m_begin": 10
                },
                {
                    "result": "꾸준히/MAG",
                    "word_id": 7,
                    "m_end": 14,
                    "id": 7,
                    "target": "꾸준히",
                    "m_begin": 14
                },
                {
                    "result": "애니메이션/NNG+을/JKO",
                    "word_id": 8,
                    "m_end": 16,
                    "id": 8,
                    "target": "애니메이션을",
                    "m_begin": 15
                },
                {
                    "result": "제작하/VV+고/EC",
                    "word_id": 9,
                    "m_end": 19,
                    "id": 9,
                    "target": "제작하고",
                    "m_begin": 17
                },
                {
                    "result": "있/VX+다/EF+./SF",
                    "word_id": 10,
                    "m_end": 22,
                    "id": 10,
                    "target": "있다.",
                    "m_begin": 20
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [
                    {
                        "indirect": 0,
                        "confidence": 1.0672927193953998,
                        "link": 309,
                        "end_offset": 6,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://wikidata.dbpedia.org/resource/Q5",
                            "http://xmlns.com/foaf/0.1/Person",
                            "http://dbpedia.org/ontology/Agent",
                            "http://dbpedia.org/ontology/Person",
                            "http://schema.org/Person",
                            "http://wikidata.dbpedia.org/resource/Q215627",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson",
                            "http://www.wikidata.org/entity/Q5",
                            "http://www.wikidata.org/entity/Q215627"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/월트_디즈니",
                        "relation": 90,
                        "score": 2.2329961103921536,
                        "en_entity": "Walt_Disney",
                        "text": "월트디즈니",
                        "start_offset": 0,
                        "id": 325189
                    },
                    {
                        "indirect": 0,
                        "confidence": 0.9535502515862024,
                        "link": 17,
                        "end_offset": 14,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/로이_디즈니",
                        "relation": 0,
                        "score": 0.6020599913279624,
                        "en_entity": "Roy_Disney",
                        "text": "로이디즈니",
                        "start_offset": 8,
                        "id": 325191
                    }
                ],
                "d_entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 24,
                        "text": "1923년",
                        "start_offset": 19,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 40,
                        "text": "애니메이션",
                        "start_offset": 35,
                        "source": "DE",
                        "type": "FD_ART",
                        "uri": "",
                        "relation": 0
                    }
                ],
                "merge": [
                    {
                        "score": 2.2329961103921536,
                        "indirect": 0,
                        "confidence": 1.0672927193953998,
                        "link": 309,
                        "end_offset": 6,
                        "text": "월트디즈니",
                        "start_offset": 0,
                        "id": 325189,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://wikidata.dbpedia.org/resource/Q5",
                            "http://xmlns.com/foaf/0.1/Person",
                            "http://dbpedia.org/ontology/Agent",
                            "http://dbpedia.org/ontology/Person",
                            "http://schema.org/Person",
                            "http://wikidata.dbpedia.org/resource/Q215627",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson",
                            "http://www.wikidata.org/entity/Q5",
                            "http://www.wikidata.org/entity/Q215627"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/월트_디즈니",
                        "relation": 90
                    },
                    {
                        "score": 0.6020599913279624,
                        "indirect": 0,
                        "confidence": 0.9535502515862024,
                        "link": 17,
                        "end_offset": 14,
                        "text": "로이디즈니",
                        "start_offset": 8,
                        "id": 325191,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/로이_디즈니",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 24,
                        "text": "1923년",
                        "start_offset": 19,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 40,
                        "text": "애니메이션",
                        "start_offset": 35,
                        "source": "DE",
                        "type": "FD_ART",
                        "uri": "",
                        "relation": 0
                    }
                ]
            },
            "morp": [
                {
                    "lemma": "월트",
                    "weight": 0.4,
                    "id": 0,
                    "position": 264,
                    "type": "NNP"
                },
                {
                    "lemma": "디즈니",
                    "weight": 0.9,
                    "id": 1,
                    "position": 271,
                    "type": "NNP"
                },
                {
                    "lemma": "와",
                    "weight": 0.0104534,
                    "id": 2,
                    "position": 280,
                    "type": "JC"
                },
                {
                    "lemma": "로이",
                    "weight": 0.0671538,
                    "id": 3,
                    "position": 284,
                    "type": "NNP"
                },
                {
                    "lemma": "디즈니",
                    "weight": 0.9,
                    "id": 4,
                    "position": 291,
                    "type": "NNP"
                },
                {
                    "lemma": "가",
                    "weight": 0.0431193,
                    "id": 5,
                    "position": 300,
                    "type": "JKS"
                },
                {
                    "lemma": "함께",
                    "weight": 0.9,
                    "id": 6,
                    "position": 304,
                    "type": "MAG"
                },
                {
                    "lemma": "1923",
                    "weight": 1,
                    "id": 7,
                    "position": 311,
                    "type": "SN"
                },
                {
                    "lemma": "년",
                    "weight": 0.414343,
                    "id": 8,
                    "position": 315,
                    "type": "NNB"
                },
                {
                    "lemma": "에",
                    "weight": 0.135559,
                    "id": 9,
                    "position": 318,
                    "type": "JKB"
                },
                {
                    "lemma": "창립",
                    "weight": 0.9,
                    "id": 10,
                    "position": 322,
                    "type": "NNG"
                },
                {
                    "lemma": "하",
                    "weight": 0.0001,
                    "id": 11,
                    "position": 328,
                    "type": "XSV"
                },
                {
                    "lemma": "었",
                    "weight": 0.9,
                    "id": 12,
                    "position": 328,
                    "type": "EP"
                },
                {
                    "lemma": "고",
                    "weight": 0.190901,
                    "id": 13,
                    "position": 331,
                    "type": "EC"
                },
                {
                    "lemma": "꾸준히",
                    "weight": 0.9,
                    "id": 14,
                    "position": 335,
                    "type": "MAG"
                },
                {
                    "lemma": "애니메이션",
                    "weight": 0.9,
                    "id": 15,
                    "position": 345,
                    "type": "NNG"
                },
                {
                    "lemma": "을",
                    "weight": 0.129611,
                    "id": 16,
                    "position": 360,
                    "type": "JKO"
                },
                {
                    "lemma": "제작",
                    "weight": 0.9,
                    "id": 17,
                    "position": 364,
                    "type": "NNG"
                },
                {
                    "lemma": "하",
                    "weight": 0.0001,
                    "id": 18,
                    "position": 370,
                    "type": "XSV"
                },
                {
                    "lemma": "고",
                    "weight": 0.359917,
                    "id": 19,
                    "position": 373,
                    "type": "EC"
                },
                {
                    "lemma": "있",
                    "weight": 0.125953,
                    "id": 20,
                    "position": 377,
                    "type": "VX"
                },
                {
                    "lemma": "다",
                    "weight": 0.180366,
                    "id": 21,
                    "position": 380,
                    "type": "EF"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 22,
                    "position": 383,
                    "type": "SF"
                }
            ],
            "NE": [
                {
                    "weight": 0.194171,
                    "end": 1,
                    "id": 0,
                    "text": "월트 디즈니",
                    "type": "PS_NAME",
                    "begin": 0,
                    "common_noun": 0
                },
                {
                    "weight": 0.401264,
                    "end": 4,
                    "id": 1,
                    "text": "로이 디즈니",
                    "type": "PS_NAME",
                    "begin": 3,
                    "common_noun": 0
                },
                {
                    "weight": 0.816161,
                    "end": 8,
                    "id": 2,
                    "text": "1923년",
                    "type": "DT_YEAR",
                    "begin": 7,
                    "common_noun": 0
                },
                {
                    "weight": 0.612391,
                    "end": 15,
                    "id": 3,
                    "text": "애니메이션",
                    "type": "FD_ART",
                    "begin": 15,
                    "common_noun": 0
                }
            ],
            "id": 2,
            "text": " 월트 디즈니와 로이 디즈니가 함께 1923년에 창립했고 꾸준히 애니메이션을 제작하고 있다.",
            "word": [
                {
                    "end": 0,
                    "id": 0,
                    "text": "월트",
                    "type": "",
                    "begin": 0
                },
                {
                    "end": 2,
                    "id": 1,
                    "text": "디즈니와",
                    "type": "",
                    "begin": 1
                },
                {
                    "end": 3,
                    "id": 2,
                    "text": "로이",
                    "type": "",
                    "begin": 3
                },
                {
                    "end": 5,
                    "id": 3,
                    "text": "디즈니가",
                    "type": "",
                    "begin": 4
                },
                {
                    "end": 6,
                    "id": 4,
                    "text": "함께",
                    "type": "",
                    "begin": 6
                },
                {
                    "end": 9,
                    "id": 5,
                    "text": "1923년에",
                    "type": "",
                    "begin": 7
                },
                {
                    "end": 13,
                    "id": 6,
                    "text": "창립했고",
                    "type": "",
                    "begin": 10
                },
                {
                    "end": 14,
                    "id": 7,
                    "text": "꾸준히",
                    "type": "",
                    "begin": 14
                },
                {
                    "end": 16,
                    "id": 8,
                    "text": "애니메이션을",
                    "type": "",
                    "begin": 15
                },
                {
                    "end": 19,
                    "id": 9,
                    "text": "제작하고",
                    "type": "",
                    "begin": 17
                },
                {
                    "end": 22,
                    "id": 10,
                    "text": "있다.",
                    "type": "",
                    "begin": 20
                }
            ],
            "mod_NE": [
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 6,
                    "text": "월트 디즈니",
                    "start_offset": 0,
                    "type": "PS_NAME",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 14,
                    "text": "로이 디즈니",
                    "start_offset": 8,
                    "type": "PS_NAME",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 24,
                    "text": "1923년",
                    "start_offset": 19,
                    "type": "DT_YEAR",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 40,
                    "text": "애니메이션",
                    "start_offset": 35,
                    "type": "FD_ART",
                    "relation": 0
                }
            ]
        },
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 2,
                    "key_begin": 0,
                    "id": 0,
                    "label": "NP_AJT",
                    "text": "1991년 5월 6일부터",
                    "head_phrase": 2,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 5,
                    "key_begin": 3,
                    "id": 1,
                    "label": "NP_AJT",
                    "text": "다우 존스 산업평균지수에",
                    "head_phrase": 2,
                    "begin": 3,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 6,
                    "key_begin": 6,
                    "id": 2,
                    "label": "VP",
                    "text": "P#0@AJT부터 P#1@AJT에 포함되었고",
                    "head_phrase": 14,
                    "begin": 0,
                    "sub_phrase": [
                        0,
                        1
                    ],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 26,
                    "key_begin": 7,
                    "id": 3,
                    "label": "NP_CNJ",
                    "text": "마블 엔터테인먼트, 루카스필름, 픽사, 월트 디즈니 픽처스, 터치스톤 픽처스, 할리우드 픽처스, 미라맥스, 디멘션 필름스 등의 영화 제작 및 배급 사업과",
                    "head_phrase": 9,
                    "begin": 7,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 28,
                    "key_begin": 27,
                    "id": 4,
                    "label": "NP_CNJ",
                    "text": "디즈니 채널,",
                    "head_phrase": 9,
                    "begin": 27,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 29,
                    "key_begin": 29,
                    "id": 5,
                    "label": "NP_CNJ",
                    "text": "ABC,",
                    "head_phrase": 9,
                    "begin": 29,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 30,
                    "key_begin": 30,
                    "id": 6,
                    "label": "NP_CNJ",
                    "text": "ESPN,",
                    "head_phrase": 9,
                    "begin": 30,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 32,
                    "key_begin": 31,
                    "id": 7,
                    "label": "NP_AJT",
                    "text": "디즈니 주니어에서",
                    "head_phrase": 8,
                    "begin": 31,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 33,
                    "key_begin": 33,
                    "id": 8,
                    "label": "VP_MOD",
                    "text": "P#7@AJT에서 방송된",
                    "head_phrase": 9,
                    "begin": 31,
                    "sub_phrase": [
                        7
                    ],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 34,
                    "key_begin": 34,
                    "id": 9,
                    "label": "NP_OBJ",
                    "text": "P#3@CNJ과 P#4@CNJ채널, P#5@CNJABC, P#6@CNJESPN, P#8@MODㄴ 프로그램을",
                    "head_phrase": 14,
                    "begin": 7,
                    "sub_phrase": [
                        3,
                        4,
                        5,
                        6,
                        8
                    ],
                    "element": [
                        {
                            "end": 45,
                            "ne_type": "",
                            "text": "마블 엔터테인먼트, 루카스필름, 픽사, 월트 디즈니 픽처스, 터치스톤 픽처스, 할리우드 픽처스, 미라맥스, 디멘션 필름스 등의 영화 제작 및 배급 사업",
                            "label": "NP_OBJ",
                            "begin": 17
                        },
                        {
                            "end": 48,
                            "ne_type": "OGG_MEDIA",
                            "text": "디즈니 채널",
                            "label": "NP_OBJ",
                            "begin": 47
                        },
                        {
                            "end": 50,
                            "ne_type": "OGG_MEDIA",
                            "text": "ABC",
                            "label": "NP_OBJ",
                            "begin": 50
                        },
                        {
                            "end": 52,
                            "ne_type": "OGG_MEDIA",
                            "text": "ESPN",
                            "label": "NP_OBJ",
                            "begin": 52
                        },
                        {
                            "end": 60,
                            "ne_type": "",
                            "text": "디즈니 주니어에서 방송된 프로그램",
                            "label": "NP_OBJ",
                            "begin": 54
                        }
                    ]
                },
                {
                    "weight": 0,
                    "end": 39,
                    "key_begin": 35,
                    "id": 10,
                    "label": "NP_CNJ",
                    "text": "제작 및 송출하는 방송 사업,",
                    "head_phrase": 13,
                    "begin": 35,
                    "sub_phrase": [],
                    "element": [
                        {
                            "end": 62,
                            "ne_type": "",
                            "text": "제작",
                            "label": "NP_CNJ",
                            "begin": 62
                        },
                        {
                            "end": 68,
                            "ne_type": "",
                            "text": "송출하는 방송 사업",
                            "label": "NP_CNJ",
                            "begin": 64
                        }
                    ]
                },
                {
                    "weight": 0,
                    "end": 40,
                    "key_begin": 40,
                    "id": 11,
                    "label": "NP_OBJ",
                    "text": "디즈니랜드를",
                    "head_phrase": 12,
                    "begin": 40,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 41,
                    "key_begin": 41,
                    "id": 12,
                    "label": "VP_MOD",
                    "text": "P#11@OBJ를 비롯한",
                    "head_phrase": 13,
                    "begin": 40,
                    "sub_phrase": [
                        11
                    ],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 46,
                    "key_begin": 42,
                    "id": 13,
                    "label": "NP_OBJ",
                    "text": "P#10@CNJ사업, P#12@MODㄴ 11개의 테마 파크 사업 등을",
                    "head_phrase": 14,
                    "begin": 35,
                    "sub_phrase": [
                        10,
                        12
                    ],
                    "element": [
                        {
                            "end": 68,
                            "ne_type": "",
                            "text": "제작 및 송출하는 방송 사업",
                            "label": "NP_OBJ",
                            "begin": 62
                        },
                        {
                            "end": 79,
                            "ne_type": "",
                            "text": "디즈니랜드를 비롯한 11개의 테마 파크 사업",
                            "label": "NP_OBJ",
                            "begin": 70
                        }
                    ]
                },
                {
                    "weight": 0,
                    "end": 49,
                    "key_begin": 47,
                    "id": 14,
                    "label": "VP",
                    "text": "P#2@VP고 P#9@OBJ을 P#13@OBJ을 소유, 운영하고 있다.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [
                        2,
                        9,
                        13
                    ],
                    "element": []
                }
            ],
            "dependency": [
                {
                    "head": 1,
                    "mod": [],
                    "weight": 0.548991,
                    "id": 0,
                    "text": "1991년",
                    "label": "NP"
                },
                {
                    "head": 2,
                    "mod": [
                        0
                    ],
                    "weight": 0.757443,
                    "id": 1,
                    "text": "5월",
                    "label": "NP"
                },
                {
                    "head": 6,
                    "mod": [
                        1
                    ],
                    "weight": 0.792104,
                    "id": 2,
                    "text": "6일부터",
                    "label": "NP_AJT"
                },
                {
                    "head": 4,
                    "mod": [],
                    "weight": 0.624878,
                    "id": 3,
                    "text": "다우",
                    "label": "NP"
                },
                {
                    "head": 5,
                    "mod": [
                        3
                    ],
                    "weight": 0.786363,
                    "id": 4,
                    "text": "존스",
                    "label": "NP"
                },
                {
                    "head": 6,
                    "mod": [
                        4
                    ],
                    "weight": 0.816001,
                    "id": 5,
                    "text": "산업평균지수에",
                    "label": "NP_AJT"
                },
                {
                    "head": 48,
                    "mod": [
                        2,
                        5
                    ],
                    "weight": 0.748794,
                    "id": 6,
                    "text": "포함되었고",
                    "label": "VP"
                },
                {
                    "head": 8,
                    "mod": [],
                    "weight": 0.759453,
                    "id": 7,
                    "text": "마블",
                    "label": "NP"
                },
                {
                    "head": 20,
                    "mod": [
                        7
                    ],
                    "weight": 0.392371,
                    "id": 8,
                    "text": "엔터테인먼트,",
                    "label": "NP_CNJ"
                },
                {
                    "head": 20,
                    "mod": [],
                    "weight": 0.594744,
                    "id": 9,
                    "text": "루카스필름,",
                    "label": "NP_CNJ"
                },
                {
                    "head": 20,
                    "mod": [],
                    "weight": 0.779704,
                    "id": 10,
                    "text": "픽사,",
                    "label": "NP_CNJ"
                },
                {
                    "head": 13,
                    "mod": [],
                    "weight": 0.735019,
                    "id": 11,
                    "text": "월트",
                    "label": "NP"
                },
                {
                    "head": 13,
                    "mod": [],
                    "weight": 0.788491,
                    "id": 12,
                    "text": "디즈니",
                    "label": "NP"
                },
                {
                    "head": 20,
                    "mod": [
                        11,
                        12
                    ],
                    "weight": 0.558095,
                    "id": 13,
                    "text": "픽처스,",
                    "label": "NP_CNJ"
                },
                {
                    "head": 15,
                    "mod": [],
                    "weight": 0.796201,
                    "id": 14,
                    "text": "터치스톤",
                    "label": "NP"
                },
                {
                    "head": 20,
                    "mod": [
                        14
                    ],
                    "weight": 0.642844,
                    "id": 15,
                    "text": "픽처스,",
                    "label": "NP_CNJ"
                },
                {
                    "head": 17,
                    "mod": [],
                    "weight": 0.604354,
                    "id": 16,
                    "text": "할리우드",
                    "label": "NP"
                },
                {
                    "head": 20,
                    "mod": [
                        16
                    ],
                    "weight": 0.751268,
                    "id": 17,
                    "text": "픽처스,",
                    "label": "NP_CNJ"
                },
                {
                    "head": 20,
                    "mod": [],
                    "weight": 0.694236,
                    "id": 18,
                    "text": "미라맥스,",
                    "label": "NP_CNJ"
                },
                {
                    "head": 20,
                    "mod": [],
                    "weight": 0.605413,
                    "id": 19,
                    "text": "디멘션",
                    "label": "NP"
                },
                {
                    "head": 21,
                    "mod": [
                        8,
                        9,
                        10,
                        13,
                        15,
                        17,
                        18,
                        19
                    ],
                    "weight": 0.828853,
                    "id": 20,
                    "text": "필름스",
                    "label": "NP"
                },
                {
                    "head": 26,
                    "mod": [
                        20
                    ],
                    "weight": 0.546035,
                    "id": 21,
                    "text": "등의",
                    "label": "NP_MOD"
                },
                {
                    "head": 23,
                    "mod": [],
                    "weight": 0.523163,
                    "id": 22,
                    "text": "영화",
                    "label": "NP"
                },
                {
                    "head": 26,
                    "mod": [
                        22
                    ],
                    "weight": 0.233014,
                    "id": 23,
                    "text": "제작",
                    "label": "NP_CNJ"
                },
                {
                    "head": 26,
                    "mod": [],
                    "weight": 0.584795,
                    "id": 24,
                    "text": "및",
                    "label": "AP"
                },
                {
                    "head": 26,
                    "mod": [],
                    "weight": 0.809546,
                    "id": 25,
                    "text": "배급",
                    "label": "NP"
                },
                {
                    "head": 34,
                    "mod": [
                        21,
                        23,
                        24,
                        25
                    ],
                    "weight": 0.646523,
                    "id": 26,
                    "text": "사업과",
                    "label": "NP_CNJ"
                },
                {
                    "head": 28,
                    "mod": [],
                    "weight": 0.886279,
                    "id": 27,
                    "text": "디즈니",
                    "label": "NP"
                },
                {
                    "head": 34,
                    "mod": [
                        27
                    ],
                    "weight": 0.520602,
                    "id": 28,
                    "text": "채널,",
                    "label": "NP_CNJ"
                },
                {
                    "head": 34,
                    "mod": [],
                    "weight": 0.516418,
                    "id": 29,
                    "text": "ABC,",
                    "label": "NP_CNJ"
                },
                {
                    "head": 34,
                    "mod": [],
                    "weight": 0.156196,
                    "id": 30,
                    "text": "ESPN,",
                    "label": "NP_CNJ"
                },
                {
                    "head": 32,
                    "mod": [],
                    "weight": 0.731965,
                    "id": 31,
                    "text": "디즈니",
                    "label": "NP"
                },
                {
                    "head": 33,
                    "mod": [
                        31
                    ],
                    "weight": 0.256034,
                    "id": 32,
                    "text": "주니어에서",
                    "label": "NP_AJT"
                },
                {
                    "head": 34,
                    "mod": [
                        32
                    ],
                    "weight": 0.784617,
                    "id": 33,
                    "text": "방송된",
                    "label": "VP_MOD"
                },
                {
                    "head": 48,
                    "mod": [
                        26,
                        28,
                        29,
                        30,
                        33
                    ],
                    "weight": 0.824521,
                    "id": 34,
                    "text": "프로그램을",
                    "label": "NP_OBJ"
                },
                {
                    "head": 39,
                    "mod": [],
                    "weight": 0.15042,
                    "id": 35,
                    "text": "제작",
                    "label": "NP_CNJ"
                },
                {
                    "head": 39,
                    "mod": [],
                    "weight": 0.222416,
                    "id": 36,
                    "text": "및",
                    "label": "AP"
                },
                {
                    "head": 39,
                    "mod": [],
                    "weight": 0.563602,
                    "id": 37,
                    "text": "송출하는",
                    "label": "VP_MOD"
                },
                {
                    "head": 39,
                    "mod": [],
                    "weight": 0.648813,
                    "id": 38,
                    "text": "방송",
                    "label": "NP"
                },
                {
                    "head": 45,
                    "mod": [
                        35,
                        36,
                        37,
                        38
                    ],
                    "weight": 0.657138,
                    "id": 39,
                    "text": "사업,",
                    "label": "NP_CNJ"
                },
                {
                    "head": 41,
                    "mod": [],
                    "weight": 0.538301,
                    "id": 40,
                    "text": "디즈니랜드를",
                    "label": "NP_OBJ"
                },
                {
                    "head": 45,
                    "mod": [
                        40
                    ],
                    "weight": 0.79071,
                    "id": 41,
                    "text": "비롯한",
                    "label": "VP_MOD"
                },
                {
                    "head": 45,
                    "mod": [],
                    "weight": 0.721918,
                    "id": 42,
                    "text": "11개의",
                    "label": "NP_MOD"
                },
                {
                    "head": 44,
                    "mod": [],
                    "weight": 0.401657,
                    "id": 43,
                    "text": "테마",
                    "label": "NP"
                },
                {
                    "head": 45,
                    "mod": [
                        43
                    ],
                    "weight": 0.477889,
                    "id": 44,
                    "text": "파크",
                    "label": "NP"
                },
                {
                    "head": 46,
                    "mod": [
                        39,
                        41,
                        42,
                        44
                    ],
                    "weight": 0.6979,
                    "id": 45,
                    "text": "사업",
                    "label": "NP"
                },
                {
                    "head": 48,
                    "mod": [
                        45
                    ],
                    "weight": 0.754578,
                    "id": 46,
                    "text": "등을",
                    "label": "NP_OBJ"
                },
                {
                    "head": 48,
                    "mod": [],
                    "weight": 0.365302,
                    "id": 47,
                    "text": "소유,",
                    "label": "NP"
                },
                {
                    "head": 49,
                    "mod": [
                        6,
                        34,
                        46,
                        47
                    ],
                    "weight": 0.732584,
                    "id": 48,
                    "text": "운영하고",
                    "label": "VP"
                },
                {
                    "head": -1,
                    "mod": [
                        48
                    ],
                    "weight": 1.76601e-12,
                    "id": 49,
                    "text": "있다.",
                    "label": "VP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 0,
                    "id": 0,
                    "text": "1991",
                    "position": 385,
                    "type": "SN",
                    "begin": 0
                },
                {
                    "scode": "02",
                    "weight": 1,
                    "end": 1,
                    "id": 1,
                    "text": "년",
                    "position": 389,
                    "type": "NNB",
                    "begin": 1
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 2,
                    "id": 2,
                    "text": "5",
                    "position": 393,
                    "type": "SN",
                    "begin": 2
                },
                {
                    "scode": "02",
                    "weight": 1,
                    "end": 3,
                    "id": 3,
                    "text": "월",
                    "position": 394,
                    "type": "NNB",
                    "begin": 3
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 4,
                    "id": 4,
                    "text": "6",
                    "position": 398,
                    "type": "SN",
                    "begin": 4
                },
                {
                    "scode": "07",
                    "weight": 3,
                    "end": 5,
                    "id": 5,
                    "text": "일",
                    "position": 399,
                    "type": "NNB",
                    "begin": 5
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 6,
                    "id": 6,
                    "text": "부터",
                    "position": 402,
                    "type": "JX",
                    "begin": 6
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 7,
                    "id": 7,
                    "text": "다우",
                    "position": 409,
                    "type": "NNP",
                    "begin": 7
                },
                {
                    "scode": "04",
                    "weight": 1.5,
                    "end": 8,
                    "id": 8,
                    "text": "존스",
                    "position": 416,
                    "type": "NNP",
                    "begin": 8
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 9,
                    "id": 9,
                    "text": "산업",
                    "position": 423,
                    "type": "NNG",
                    "begin": 9
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 10,
                    "id": 10,
                    "text": "평균",
                    "position": 429,
                    "type": "NNG",
                    "begin": 10
                },
                {
                    "scode": "07",
                    "weight": 5.5,
                    "end": 11,
                    "id": 11,
                    "text": "지수",
                    "position": 435,
                    "type": "NNG",
                    "begin": 11
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 12,
                    "id": 12,
                    "text": "에",
                    "position": 441,
                    "type": "JKB",
                    "begin": 12
                },
                {
                    "scode": "01",
                    "weight": 2,
                    "end": 14,
                    "id": 13,
                    "text": "포함되",
                    "position": 445,
                    "type": "VV",
                    "begin": 13
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 15,
                    "id": 14,
                    "text": "었",
                    "position": 454,
                    "type": "EP",
                    "begin": 15
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 16,
                    "id": 15,
                    "text": "고",
                    "position": 457,
                    "type": "EC",
                    "begin": 16
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 17,
                    "id": 16,
                    "text": "마블",
                    "position": 461,
                    "type": "NNG",
                    "begin": 17
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 18,
                    "id": 17,
                    "text": "엔터테인먼트",
                    "position": 468,
                    "type": "NNG",
                    "begin": 18
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 19,
                    "id": 18,
                    "text": ",",
                    "position": 486,
                    "type": "SP",
                    "begin": 19
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 20,
                    "id": 19,
                    "text": "루카스",
                    "position": 488,
                    "type": "NNP",
                    "begin": 20
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 21,
                    "id": 20,
                    "text": "필름",
                    "position": 497,
                    "type": "NNG",
                    "begin": 21
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 22,
                    "id": 21,
                    "text": ",",
                    "position": 503,
                    "type": "SP",
                    "begin": 22
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 23,
                    "id": 22,
                    "text": "픽사",
                    "position": 505,
                    "type": "NNP",
                    "begin": 23
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 24,
                    "id": 23,
                    "text": ",",
                    "position": 511,
                    "type": "SP",
                    "begin": 24
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 25,
                    "id": 24,
                    "text": "월트",
                    "position": 513,
                    "type": "NNP",
                    "begin": 25
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 26,
                    "id": 25,
                    "text": "디즈니",
                    "position": 520,
                    "type": "NNP",
                    "begin": 26
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 27,
                    "id": 26,
                    "text": "픽처스",
                    "position": 530,
                    "type": "NNG",
                    "begin": 27
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 28,
                    "id": 27,
                    "text": ",",
                    "position": 539,
                    "type": "SP",
                    "begin": 28
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 29,
                    "id": 28,
                    "text": "터치스톤",
                    "position": 541,
                    "type": "NNP",
                    "begin": 29
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 30,
                    "id": 29,
                    "text": "픽처스",
                    "position": 554,
                    "type": "NNG",
                    "begin": 30
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 31,
                    "id": 30,
                    "text": ",",
                    "position": 563,
                    "type": "SP",
                    "begin": 31
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 32,
                    "id": 31,
                    "text": "할리우드",
                    "position": 565,
                    "type": "NNP",
                    "begin": 32
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 33,
                    "id": 32,
                    "text": "픽처스",
                    "position": 578,
                    "type": "NNG",
                    "begin": 33
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 34,
                    "id": 33,
                    "text": ",",
                    "position": 587,
                    "type": "SP",
                    "begin": 34
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 35,
                    "id": 34,
                    "text": "미라맥스",
                    "position": 589,
                    "type": "NNP",
                    "begin": 35
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 36,
                    "id": 35,
                    "text": ",",
                    "position": 601,
                    "type": "SP",
                    "begin": 36
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 37,
                    "id": 36,
                    "text": "디멘션",
                    "position": 603,
                    "type": "NNG",
                    "begin": 37
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 38,
                    "id": 37,
                    "text": "필름스",
                    "position": 613,
                    "type": "NNG",
                    "begin": 38
                },
                {
                    "scode": "05",
                    "weight": 3.2,
                    "end": 39,
                    "id": 38,
                    "text": "등",
                    "position": 623,
                    "type": "NNB",
                    "begin": 39
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 40,
                    "id": 39,
                    "text": "의",
                    "position": 626,
                    "type": "JKG",
                    "begin": 40
                },
                {
                    "scode": "01",
                    "weight": 2.2,
                    "end": 41,
                    "id": 40,
                    "text": "영화",
                    "position": 630,
                    "type": "NNG",
                    "begin": 41
                },
                {
                    "scode": "02",
                    "weight": 4.4,
                    "end": 42,
                    "id": 41,
                    "text": "제작",
                    "position": 637,
                    "type": "NNG",
                    "begin": 42
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 43,
                    "id": 42,
                    "text": "및",
                    "position": 644,
                    "type": "MAJ",
                    "begin": 43
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 44,
                    "id": 43,
                    "text": "배급",
                    "position": 648,
                    "type": "NNG",
                    "begin": 44
                },
                {
                    "scode": "04",
                    "weight": 2,
                    "end": 45,
                    "id": 44,
                    "text": "사업",
                    "position": 655,
                    "type": "NNG",
                    "begin": 45
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 46,
                    "id": 45,
                    "text": "과",
                    "position": 661,
                    "type": "JC",
                    "begin": 46
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 47,
                    "id": 46,
                    "text": "디즈니",
                    "position": 665,
                    "type": "NNP",
                    "begin": 47
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 48,
                    "id": 47,
                    "text": "채널",
                    "position": 675,
                    "type": "NNG",
                    "begin": 48
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 49,
                    "id": 48,
                    "text": ",",
                    "position": 681,
                    "type": "SP",
                    "begin": 49
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 50,
                    "id": 49,
                    "text": "ABC",
                    "position": 683,
                    "type": "SL",
                    "begin": 50
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 51,
                    "id": 50,
                    "text": ",",
                    "position": 686,
                    "type": "SP",
                    "begin": 51
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 52,
                    "id": 51,
                    "text": "ESPN",
                    "position": 688,
                    "type": "SL",
                    "begin": 52
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 53,
                    "id": 52,
                    "text": ",",
                    "position": 692,
                    "type": "SP",
                    "begin": 53
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 54,
                    "id": 53,
                    "text": "디즈니",
                    "position": 694,
                    "type": "NNP",
                    "begin": 54
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 55,
                    "id": 54,
                    "text": "주니어",
                    "position": 704,
                    "type": "NNG",
                    "begin": 55
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 56,
                    "id": 55,
                    "text": "에서",
                    "position": 713,
                    "type": "JKB",
                    "begin": 56
                },
                {
                    "scode": "01",
                    "weight": 1,
                    "end": 58,
                    "id": 56,
                    "text": "방송되",
                    "position": 720,
                    "type": "VV",
                    "begin": 57
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 59,
                    "id": 57,
                    "text": "ㄴ",
                    "position": 726,
                    "type": "ETM",
                    "begin": 59
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 60,
                    "id": 58,
                    "text": "프로그램",
                    "position": 730,
                    "type": "NNG",
                    "begin": 60
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 61,
                    "id": 59,
                    "text": "을",
                    "position": 742,
                    "type": "JKO",
                    "begin": 61
                },
                {
                    "scode": "02",
                    "weight": 2.2,
                    "end": 62,
                    "id": 60,
                    "text": "제작",
                    "position": 746,
                    "type": "NNG",
                    "begin": 62
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 63,
                    "id": 61,
                    "text": "및",
                    "position": 753,
                    "type": "MAJ",
                    "begin": 63
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 65,
                    "id": 62,
                    "text": "송출하",
                    "position": 757,
                    "type": "VV",
                    "begin": 64
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 66,
                    "id": 63,
                    "text": "는",
                    "position": 766,
                    "type": "ETM",
                    "begin": 66
                },
                {
                    "scode": "01",
                    "weight": 4.4,
                    "end": 67,
                    "id": 64,
                    "text": "방송",
                    "position": 770,
                    "type": "NNG",
                    "begin": 67
                },
                {
                    "scode": "04",
                    "weight": 2.95,
                    "end": 68,
                    "id": 65,
                    "text": "사업",
                    "position": 777,
                    "type": "NNG",
                    "begin": 68
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 69,
                    "id": 66,
                    "text": ",",
                    "position": 783,
                    "type": "SP",
                    "begin": 69
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 70,
                    "id": 67,
                    "text": "디즈니랜드",
                    "position": 785,
                    "type": "NNP",
                    "begin": 70
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 71,
                    "id": 68,
                    "text": "를",
                    "position": 800,
                    "type": "JKO",
                    "begin": 71
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 72,
                    "id": 69,
                    "text": "비롯하",
                    "position": 804,
                    "type": "VV",
                    "begin": 72
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 73,
                    "id": 70,
                    "text": "ㄴ",
                    "position": 810,
                    "type": "ETM",
                    "begin": 73
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 74,
                    "id": 71,
                    "text": "11",
                    "position": 814,
                    "type": "SN",
                    "begin": 74
                },
                {
                    "scode": "10",
                    "weight": 3.2,
                    "end": 75,
                    "id": 72,
                    "text": "개",
                    "position": 816,
                    "type": "NNB",
                    "begin": 75
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 76,
                    "id": 73,
                    "text": "의",
                    "position": 819,
                    "type": "JKG",
                    "begin": 76
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 77,
                    "id": 74,
                    "text": "테마",
                    "position": 823,
                    "type": "NNG",
                    "begin": 77
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 78,
                    "id": 75,
                    "text": "파크",
                    "position": 830,
                    "type": "NNG",
                    "begin": 78
                },
                {
                    "scode": "04",
                    "weight": 1,
                    "end": 79,
                    "id": 76,
                    "text": "사업",
                    "position": 837,
                    "type": "NNG",
                    "begin": 79
                },
                {
                    "scode": "05",
                    "weight": 5.2,
                    "end": 80,
                    "id": 77,
                    "text": "등",
                    "position": 844,
                    "type": "NNB",
                    "begin": 80
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 81,
                    "id": 78,
                    "text": "을",
                    "position": 847,
                    "type": "JKO",
                    "begin": 81
                },
                {
                    "scode": "03",
                    "weight": 1,
                    "end": 82,
                    "id": 79,
                    "text": "소유",
                    "position": 851,
                    "type": "NNG",
                    "begin": 82
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 83,
                    "id": 80,
                    "text": ",",
                    "position": 857,
                    "type": "SP",
                    "begin": 83
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 85,
                    "id": 81,
                    "text": "운영하",
                    "position": 859,
                    "type": "VV",
                    "begin": 84
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 86,
                    "id": 82,
                    "text": "고",
                    "position": 868,
                    "type": "EC",
                    "begin": 86
                },
                {
                    "scode": "01",
                    "weight": 4.4,
                    "end": 87,
                    "id": 83,
                    "text": "있",
                    "position": 872,
                    "type": "VX",
                    "begin": 87
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 88,
                    "id": 84,
                    "text": "다",
                    "position": 875,
                    "type": "EF",
                    "begin": 88
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 89,
                    "id": 85,
                    "text": ".",
                    "position": 878,
                    "type": "SF",
                    "begin": 89
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "1991/SN+년/NNB",
                    "word_id": 0,
                    "m_end": 1,
                    "id": 0,
                    "target": "1991년",
                    "m_begin": 0
                },
                {
                    "result": "5/SN+월/NNB",
                    "word_id": 1,
                    "m_end": 3,
                    "id": 1,
                    "target": "5월",
                    "m_begin": 2
                },
                {
                    "result": "6/SN+일/NNB+부터/JX",
                    "word_id": 2,
                    "m_end": 6,
                    "id": 2,
                    "target": "6일부터",
                    "m_begin": 4
                },
                {
                    "result": "다우/NNG",
                    "word_id": 3,
                    "m_end": 7,
                    "id": 3,
                    "target": "다우",
                    "m_begin": 7
                },
                {
                    "result": "존스/NNG",
                    "word_id": 4,
                    "m_end": 8,
                    "id": 4,
                    "target": "존스",
                    "m_begin": 8
                },
                {
                    "result": "산업평균지수/NNG+에/JKB",
                    "word_id": 5,
                    "m_end": 12,
                    "id": 5,
                    "target": "산업평균지수에",
                    "m_begin": 9
                },
                {
                    "result": "포함되/VV+었/EP+고/EC",
                    "word_id": 6,
                    "m_end": 16,
                    "id": 6,
                    "target": "포함되었고",
                    "m_begin": 13
                },
                {
                    "result": "마블/NNG",
                    "word_id": 7,
                    "m_end": 17,
                    "id": 7,
                    "target": "마블",
                    "m_begin": 17
                },
                {
                    "result": "엔터테인먼트/NNG+,/SP",
                    "word_id": 8,
                    "m_end": 19,
                    "id": 8,
                    "target": "엔터테인먼트,",
                    "m_begin": 18
                },
                {
                    "result": "루카스필름/NNG+,/SP",
                    "word_id": 9,
                    "m_end": 22,
                    "id": 9,
                    "target": "루카스필름,",
                    "m_begin": 20
                },
                {
                    "result": "픽사/NNG+,/SP",
                    "word_id": 10,
                    "m_end": 24,
                    "id": 10,
                    "target": "픽사,",
                    "m_begin": 23
                },
                {
                    "result": "월트/NNG",
                    "word_id": 11,
                    "m_end": 25,
                    "id": 11,
                    "target": "월트",
                    "m_begin": 25
                },
                {
                    "result": "디즈니/NNG",
                    "word_id": 12,
                    "m_end": 26,
                    "id": 12,
                    "target": "디즈니",
                    "m_begin": 26
                },
                {
                    "result": "픽처스/NNG+,/SP",
                    "word_id": 13,
                    "m_end": 28,
                    "id": 13,
                    "target": "픽처스,",
                    "m_begin": 27
                },
                {
                    "result": "터치스톤/NNG",
                    "word_id": 14,
                    "m_end": 29,
                    "id": 14,
                    "target": "터치스톤",
                    "m_begin": 29
                },
                {
                    "result": "픽처스/NNG+,/SP",
                    "word_id": 15,
                    "m_end": 31,
                    "id": 15,
                    "target": "픽처스,",
                    "m_begin": 30
                },
                {
                    "result": "할리우드/NNG",
                    "word_id": 16,
                    "m_end": 32,
                    "id": 16,
                    "target": "할리우드",
                    "m_begin": 32
                },
                {
                    "result": "픽처스/NNG+,/SP",
                    "word_id": 17,
                    "m_end": 34,
                    "id": 17,
                    "target": "픽처스,",
                    "m_begin": 33
                },
                {
                    "result": "미라맥스/NNG+,/SP",
                    "word_id": 18,
                    "m_end": 36,
                    "id": 18,
                    "target": "미라맥스,",
                    "m_begin": 35
                },
                {
                    "result": "디멘션/NNG",
                    "word_id": 19,
                    "m_end": 37,
                    "id": 19,
                    "target": "디멘션",
                    "m_begin": 37
                },
                {
                    "result": "필름스/NNG",
                    "word_id": 20,
                    "m_end": 38,
                    "id": 20,
                    "target": "필름스",
                    "m_begin": 38
                },
                {
                    "result": "등/NNB+의/JKG",
                    "word_id": 21,
                    "m_end": 40,
                    "id": 21,
                    "target": "등의",
                    "m_begin": 39
                },
                {
                    "result": "영화/NNG",
                    "word_id": 22,
                    "m_end": 41,
                    "id": 22,
                    "target": "영화",
                    "m_begin": 41
                },
                {
                    "result": "제작/NNG",
                    "word_id": 23,
                    "m_end": 42,
                    "id": 23,
                    "target": "제작",
                    "m_begin": 42
                },
                {
                    "result": "및/MAJ",
                    "word_id": 24,
                    "m_end": 43,
                    "id": 24,
                    "target": "및",
                    "m_begin": 43
                },
                {
                    "result": "배급/NNG",
                    "word_id": 25,
                    "m_end": 44,
                    "id": 25,
                    "target": "배급",
                    "m_begin": 44
                },
                {
                    "result": "사업/NNG+과/JC",
                    "word_id": 26,
                    "m_end": 46,
                    "id": 26,
                    "target": "사업과",
                    "m_begin": 45
                },
                {
                    "result": "디즈니/NNG",
                    "word_id": 27,
                    "m_end": 47,
                    "id": 27,
                    "target": "디즈니",
                    "m_begin": 47
                },
                {
                    "result": "채널/NNG+,/SP",
                    "word_id": 28,
                    "m_end": 49,
                    "id": 28,
                    "target": "채널,",
                    "m_begin": 48
                },
                {
                    "result": "ABC/SL+,/SP",
                    "word_id": 29,
                    "m_end": 51,
                    "id": 29,
                    "target": "ABC,",
                    "m_begin": 50
                },
                {
                    "result": "ESPN/SL+,/SP",
                    "word_id": 30,
                    "m_end": 53,
                    "id": 30,
                    "target": "ESPN,",
                    "m_begin": 52
                },
                {
                    "result": "디즈니/NNG",
                    "word_id": 31,
                    "m_end": 54,
                    "id": 31,
                    "target": "디즈니",
                    "m_begin": 54
                },
                {
                    "result": "주니어/NNG+에서/JKB",
                    "word_id": 32,
                    "m_end": 56,
                    "id": 32,
                    "target": "주니어에서",
                    "m_begin": 55
                },
                {
                    "result": "방송되/VV+ㄴ/ETM",
                    "word_id": 33,
                    "m_end": 59,
                    "id": 33,
                    "target": "방송된",
                    "m_begin": 57
                },
                {
                    "result": "프로그램/NNG+을/JKO",
                    "word_id": 34,
                    "m_end": 61,
                    "id": 34,
                    "target": "프로그램을",
                    "m_begin": 60
                },
                {
                    "result": "제작/NNG",
                    "word_id": 35,
                    "m_end": 62,
                    "id": 35,
                    "target": "제작",
                    "m_begin": 62
                },
                {
                    "result": "및/MAJ",
                    "word_id": 36,
                    "m_end": 63,
                    "id": 36,
                    "target": "및",
                    "m_begin": 63
                },
                {
                    "result": "송출하/VV+는/ETM",
                    "word_id": 37,
                    "m_end": 66,
                    "id": 37,
                    "target": "송출하는",
                    "m_begin": 64
                },
                {
                    "result": "방송/NNG",
                    "word_id": 38,
                    "m_end": 67,
                    "id": 38,
                    "target": "방송",
                    "m_begin": 67
                },
                {
                    "result": "사업/NNG+,/SP",
                    "word_id": 39,
                    "m_end": 69,
                    "id": 39,
                    "target": "사업,",
                    "m_begin": 68
                },
                {
                    "result": "디즈니랜드/NNG+를/JKO",
                    "word_id": 40,
                    "m_end": 71,
                    "id": 40,
                    "target": "디즈니랜드를",
                    "m_begin": 70
                },
                {
                    "result": "비롯하/VV+ㄴ/ETM",
                    "word_id": 41,
                    "m_end": 73,
                    "id": 41,
                    "target": "비롯한",
                    "m_begin": 72
                },
                {
                    "result": "11/SN+개/NNB+의/JKG",
                    "word_id": 42,
                    "m_end": 76,
                    "id": 42,
                    "target": "11개의",
                    "m_begin": 74
                },
                {
                    "result": "테마/NNG",
                    "word_id": 43,
                    "m_end": 77,
                    "id": 43,
                    "target": "테마",
                    "m_begin": 77
                },
                {
                    "result": "파크/NNG",
                    "word_id": 44,
                    "m_end": 78,
                    "id": 44,
                    "target": "파크",
                    "m_begin": 78
                },
                {
                    "result": "사업/NNG",
                    "word_id": 45,
                    "m_end": 79,
                    "id": 45,
                    "target": "사업",
                    "m_begin": 79
                },
                {
                    "result": "등/NNB+을/JKO",
                    "word_id": 46,
                    "m_end": 81,
                    "id": 46,
                    "target": "등을",
                    "m_begin": 80
                },
                {
                    "result": "소유/NNG+,/SP",
                    "word_id": 47,
                    "m_end": 83,
                    "id": 47,
                    "target": "소유,",
                    "m_begin": 82
                },
                {
                    "result": "운영하/VV+고/EC",
                    "word_id": 48,
                    "m_end": 86,
                    "id": 48,
                    "target": "운영하고",
                    "m_begin": 84
                },
                {
                    "result": "있/VX+다/EF+./SF",
                    "word_id": 49,
                    "m_end": 89,
                    "id": 49,
                    "target": "있다.",
                    "m_begin": 87
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [
                    {
                        "indirect": 0,
                        "confidence": 0.971095432713327,
                        "link": 8,
                        "end_offset": 26,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/다우_존스_산업평균지수",
                        "relation": 0,
                        "score": 1.5563025007672873,
                        "en_entity": "Dow_Jones_Industrial_Average",
                        "text": "다우존스산업평균지수",
                        "start_offset": 14,
                        "id": 325193
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "en_entity": "Marvel_Entertainment",
                        "link": 0,
                        "end_offset": 43,
                        "text": "마블 엔터테인먼트",
                        "start_offset": 34,
                        "source": "NER",
                        "type": "OGG_ECONOMY",
                        "uri": "http://ko.dbpedia.org/resource/마블_엔터테인먼트",
                        "relation": 0
                    },
                    {
                        "indirect": 0,
                        "confidence": 0.9745404834825924,
                        "link": 24,
                        "end_offset": 50,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/루커스필름",
                        "relation": 0,
                        "score": 1.591064607026499,
                        "en_entity": "Lucasfilm",
                        "text": "루카스필름",
                        "start_offset": 45,
                        "id": 325194
                    },
                    {
                        "indirect": 0,
                        "confidence": 0.9777761432253791,
                        "link": 9,
                        "end_offset": 54,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing",
                            "http://dbpedia.org/ontology/Agent",
                            "http://dbpedia.org/ontology/Company",
                            "http://dbpedia.org/ontology/Organisation",
                            "http://schema.org/Organization",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#SocialPerson",
                            "http://www.wikidata.org/entity/Q43229"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/픽사",
                        "relation": 4,
                        "score": 1.8129133566428555,
                        "en_entity": "Pixar",
                        "text": "픽사",
                        "start_offset": 52,
                        "id": 325195
                    },
                    {
                        "indirect": 0,
                        "confidence": 1.0167057033406404,
                        "link": 116,
                        "end_offset": 66,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://dbpedia.org/ontology/Agent",
                            "http://dbpedia.org/ontology/Company",
                            "http://dbpedia.org/ontology/Organisation",
                            "http://schema.org/Organization",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#SocialPerson",
                            "http://www.wikidata.org/entity/Q43229"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/월트_디즈니_픽처스",
                        "relation": 34,
                        "score": 2.3242824552976926,
                        "en_entity": "Walt_Disney_Pictures",
                        "text": "월트디즈니픽처스",
                        "start_offset": 56,
                        "id": 325198
                    },
                    {
                        "indirect": 0,
                        "confidence": 0.9792366368737908,
                        "link": 15,
                        "end_offset": 76,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/터치스톤_픽처스",
                        "relation": 0,
                        "score": 1.9030899869919435,
                        "en_entity": "Touchstone_Pictures",
                        "text": "터치스톤픽처스",
                        "start_offset": 68,
                        "id": 325199
                    },
                    {
                        "indirect": 0,
                        "confidence": 0.9674004763746891,
                        "link": 7,
                        "end_offset": 86,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/할리우드_픽처스",
                        "relation": 0,
                        "score": 1.380211241711606,
                        "en_entity": "Hollywood_Pictures",
                        "text": "할리우드픽처스",
                        "start_offset": 78,
                        "id": 325200
                    },
                    {
                        "indirect": 0,
                        "confidence": 0.9805605046087824,
                        "link": 8,
                        "end_offset": 92,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/미라맥스",
                        "relation": 0,
                        "score": 2.0293837776852097,
                        "en_entity": "Miramax",
                        "text": "미라맥스",
                        "start_offset": 88,
                        "id": 325201
                    },
                    {
                        "indirect": 0,
                        "confidence": 0.9796764756363552,
                        "link": 1,
                        "end_offset": 101,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/디멘션_필름스",
                        "relation": 0,
                        "score": 2.0453229787866576,
                        "en_entity": "Dimension_Films",
                        "text": "디멘션필름스",
                        "start_offset": 94,
                        "id": 325202
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "en_entity": "Disney_Channel",
                        "link": 0,
                        "end_offset": 126,
                        "text": "디즈니 채널",
                        "start_offset": 120,
                        "source": "NER",
                        "type": "OGG_MEDIA",
                        "uri": "http://ko.dbpedia.org/resource/디즈니_채널",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "en_entity": "ABC",
                        "link": 0,
                        "end_offset": 131,
                        "text": "ABC",
                        "start_offset": 128,
                        "source": "NER",
                        "type": "OGG_MEDIA",
                        "uri": "http://ko.dbpedia.org/resource/ABC",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "en_entity": "ESPN",
                        "link": 0,
                        "end_offset": 137,
                        "text": "ESPN",
                        "start_offset": 133,
                        "source": "NER",
                        "type": "OGG_MEDIA",
                        "uri": "http://ko.dbpedia.org/resource/ESPN",
                        "relation": 0
                    },
                    {
                        "indirect": 0,
                        "confidence": 0.9680525120564263,
                        "link": 1,
                        "end_offset": 146,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/디즈니_주니어",
                        "relation": 1,
                        "score": 1.4471580313422192,
                        "en_entity": "Disney_Junior",
                        "text": "디즈니주니어",
                        "start_offset": 139,
                        "id": 325205
                    },
                    {
                        "indirect": 0,
                        "confidence": 0.969958726416976,
                        "link": 0,
                        "end_offset": 181,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/디즈니랜드",
                        "relation": 0,
                        "score": 1.568201724066995,
                        "en_entity": "Disneyland",
                        "text": "디즈니랜드",
                        "start_offset": 176,
                        "id": 325208
                    }
                ],
                "d_entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 13,
                        "text": "1991년 5월 6일부터",
                        "start_offset": 0,
                        "source": "DE",
                        "type": "DT_OTHERS",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 107,
                        "text": "영화",
                        "start_offset": 105,
                        "source": "DE",
                        "type": "FD_ART",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 118,
                        "text": "사업",
                        "start_offset": 116,
                        "source": "DE",
                        "type": "CV_POSITION",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 174,
                        "text": "사업",
                        "start_offset": 172,
                        "source": "DE",
                        "type": "CV_POSITION",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 190,
                        "text": "11개",
                        "start_offset": 187,
                        "source": "DE",
                        "type": "QT_COUNT",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 200,
                        "text": "사업",
                        "start_offset": 198,
                        "source": "DE",
                        "type": "CV_POSITION",
                        "uri": "",
                        "relation": 0
                    }
                ],
                "merge": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 13,
                        "text": "1991년 5월 6일부터",
                        "start_offset": 0,
                        "source": "DE",
                        "type": "DT_OTHERS",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 1.5563025007672873,
                        "indirect": 0,
                        "confidence": 0.971095432713327,
                        "link": 8,
                        "end_offset": 26,
                        "text": "다우존스산업평균지수",
                        "start_offset": 14,
                        "id": 325193,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/다우_존스_산업평균지수",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 43,
                        "text": "마블 엔터테인먼트",
                        "start_offset": 34,
                        "source": "NER",
                        "type": "OGG_ECONOMY",
                        "uri": "http://ko.dbpedia.org/resource/마블_엔터테인먼트",
                        "relation": 0
                    },
                    {
                        "score": 1.591064607026499,
                        "indirect": 0,
                        "confidence": 0.9745404834825924,
                        "link": 24,
                        "end_offset": 50,
                        "text": "루카스필름",
                        "start_offset": 45,
                        "id": 325194,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/루커스필름",
                        "relation": 0
                    },
                    {
                        "score": 1.8129133566428555,
                        "indirect": 0,
                        "confidence": 0.9777761432253791,
                        "link": 9,
                        "end_offset": 54,
                        "text": "픽사",
                        "start_offset": 52,
                        "id": 325195,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing",
                            "http://dbpedia.org/ontology/Agent",
                            "http://dbpedia.org/ontology/Company",
                            "http://dbpedia.org/ontology/Organisation",
                            "http://schema.org/Organization",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#SocialPerson",
                            "http://www.wikidata.org/entity/Q43229"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/픽사",
                        "relation": 4
                    },
                    {
                        "score": 2.3242824552976926,
                        "indirect": 0,
                        "confidence": 1.0167057033406404,
                        "link": 116,
                        "end_offset": 66,
                        "text": "월트디즈니픽처스",
                        "start_offset": 56,
                        "id": 325198,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://dbpedia.org/ontology/Agent",
                            "http://dbpedia.org/ontology/Company",
                            "http://dbpedia.org/ontology/Organisation",
                            "http://schema.org/Organization",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#SocialPerson",
                            "http://www.wikidata.org/entity/Q43229"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/월트_디즈니_픽처스",
                        "relation": 34
                    },
                    {
                        "score": 1.9030899869919435,
                        "indirect": 0,
                        "confidence": 0.9792366368737908,
                        "link": 15,
                        "end_offset": 76,
                        "text": "터치스톤픽처스",
                        "start_offset": 68,
                        "id": 325199,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/터치스톤_픽처스",
                        "relation": 0
                    },
                    {
                        "score": 1.380211241711606,
                        "indirect": 0,
                        "confidence": 0.9674004763746891,
                        "link": 7,
                        "end_offset": 86,
                        "text": "할리우드픽처스",
                        "start_offset": 78,
                        "id": 325200,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/할리우드_픽처스",
                        "relation": 0
                    },
                    {
                        "score": 2.0293837776852097,
                        "indirect": 0,
                        "confidence": 0.9805605046087824,
                        "link": 8,
                        "end_offset": 92,
                        "text": "미라맥스",
                        "start_offset": 88,
                        "id": 325201,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/미라맥스",
                        "relation": 0
                    },
                    {
                        "score": 2.0453229787866576,
                        "indirect": 0,
                        "confidence": 0.9796764756363552,
                        "link": 1,
                        "end_offset": 101,
                        "text": "디멘션필름스",
                        "start_offset": 94,
                        "id": 325202,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/디멘션_필름스",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 107,
                        "text": "영화",
                        "start_offset": 105,
                        "source": "DE",
                        "type": "FD_ART",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 118,
                        "text": "사업",
                        "start_offset": 116,
                        "source": "DE",
                        "type": "CV_POSITION",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 126,
                        "text": "디즈니 채널",
                        "start_offset": 120,
                        "source": "NER",
                        "type": "OGG_MEDIA",
                        "uri": "http://ko.dbpedia.org/resource/디즈니_채널",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 131,
                        "text": "ABC",
                        "start_offset": 128,
                        "source": "NER",
                        "type": "OGG_MEDIA",
                        "uri": "http://ko.dbpedia.org/resource/ABC",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 137,
                        "text": "ESPN",
                        "start_offset": 133,
                        "source": "NER",
                        "type": "OGG_MEDIA",
                        "uri": "http://ko.dbpedia.org/resource/ESPN",
                        "relation": 0
                    },
                    {
                        "score": 1.4471580313422192,
                        "indirect": 0,
                        "confidence": 0.9680525120564263,
                        "link": 1,
                        "end_offset": 146,
                        "text": "디즈니주니어",
                        "start_offset": 139,
                        "id": 325205,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/디즈니_주니어",
                        "relation": 1
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 174,
                        "text": "사업",
                        "start_offset": 172,
                        "source": "DE",
                        "type": "CV_POSITION",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 1.568201724066995,
                        "indirect": 0,
                        "confidence": 0.969958726416976,
                        "link": 0,
                        "end_offset": 181,
                        "text": "디즈니랜드",
                        "start_offset": 176,
                        "id": 325208,
                        "source": "ELU",
                        "type": [],
                        "uri": "http://ko.dbpedia.org/resource/디즈니랜드",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 190,
                        "text": "11개",
                        "start_offset": 187,
                        "source": "DE",
                        "type": "QT_COUNT",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 200,
                        "text": "사업",
                        "start_offset": 198,
                        "source": "DE",
                        "type": "CV_POSITION",
                        "uri": "",
                        "relation": 0
                    }
                ]
            },
            "morp": [
                {
                    "lemma": "1991",
                    "weight": 1,
                    "id": 0,
                    "position": 385,
                    "type": "SN"
                },
                {
                    "lemma": "년",
                    "weight": 0.414343,
                    "id": 1,
                    "position": 389,
                    "type": "NNB"
                },
                {
                    "lemma": "5",
                    "weight": 1,
                    "id": 2,
                    "position": 393,
                    "type": "SN"
                },
                {
                    "lemma": "월",
                    "weight": 0.408539,
                    "id": 3,
                    "position": 394,
                    "type": "NNB"
                },
                {
                    "lemma": "6",
                    "weight": 1,
                    "id": 4,
                    "position": 398,
                    "type": "SN"
                },
                {
                    "lemma": "일",
                    "weight": 0.126777,
                    "id": 5,
                    "position": 399,
                    "type": "NNB"
                },
                {
                    "lemma": "부터",
                    "weight": 0.105319,
                    "id": 6,
                    "position": 402,
                    "type": "JX"
                },
                {
                    "lemma": "다우",
                    "weight": 0.0147595,
                    "id": 7,
                    "position": 409,
                    "type": "NNP"
                },
                {
                    "lemma": "존스",
                    "weight": 0.9,
                    "id": 8,
                    "position": 416,
                    "type": "NNP"
                },
                {
                    "lemma": "산업",
                    "weight": 0.281859,
                    "id": 9,
                    "position": 423,
                    "type": "NNG"
                },
                {
                    "lemma": "평균",
                    "weight": 0.9,
                    "id": 10,
                    "position": 429,
                    "type": "NNG"
                },
                {
                    "lemma": "지수",
                    "weight": 0.175635,
                    "id": 11,
                    "position": 435,
                    "type": "NNG"
                },
                {
                    "lemma": "에",
                    "weight": 0.153364,
                    "id": 12,
                    "position": 441,
                    "type": "JKB"
                },
                {
                    "lemma": "포함",
                    "weight": 0.9,
                    "id": 13,
                    "position": 445,
                    "type": "NNG"
                },
                {
                    "lemma": "되",
                    "weight": 0.000224177,
                    "id": 14,
                    "position": 451,
                    "type": "XSV"
                },
                {
                    "lemma": "었",
                    "weight": 0.9,
                    "id": 15,
                    "position": 454,
                    "type": "EP"
                },
                {
                    "lemma": "고",
                    "weight": 0.190901,
                    "id": 16,
                    "position": 457,
                    "type": "EC"
                },
                {
                    "lemma": "마블",
                    "weight": 0.2,
                    "id": 17,
                    "position": 461,
                    "type": "NNG"
                },
                {
                    "lemma": "엔터테인먼트",
                    "weight": 0.9,
                    "id": 18,
                    "position": 468,
                    "type": "NNG"
                },
                {
                    "lemma": ",",
                    "weight": 1,
                    "id": 19,
                    "position": 486,
                    "type": "SP"
                },
                {
                    "lemma": "루카스",
                    "weight": 0.9,
                    "id": 20,
                    "position": 488,
                    "type": "NNP"
                },
                {
                    "lemma": "필름",
                    "weight": 0.9,
                    "id": 21,
                    "position": 497,
                    "type": "NNG"
                },
                {
                    "lemma": ",",
                    "weight": 1,
                    "id": 22,
                    "position": 503,
                    "type": "SP"
                },
                {
                    "lemma": "픽사",
                    "weight": 0.6,
                    "id": 23,
                    "position": 505,
                    "type": "NNP"
                },
                {
                    "lemma": ",",
                    "weight": 1,
                    "id": 24,
                    "position": 511,
                    "type": "SP"
                },
                {
                    "lemma": "월트",
                    "weight": 0.4,
                    "id": 25,
                    "position": 513,
                    "type": "NNP"
                },
                {
                    "lemma": "디즈니",
                    "weight": 0.9,
                    "id": 26,
                    "position": 520,
                    "type": "NNP"
                },
                {
                    "lemma": "픽처스",
                    "weight": 0.211494,
                    "id": 27,
                    "position": 530,
                    "type": "NNG"
                },
                {
                    "lemma": ",",
                    "weight": 1,
                    "id": 28,
                    "position": 539,
                    "type": "SP"
                },
                {
                    "lemma": "터치스톤",
                    "weight": 0.6,
                    "id": 29,
                    "position": 541,
                    "type": "NNP"
                },
                {
                    "lemma": "픽처스",
                    "weight": 0.211494,
                    "id": 30,
                    "position": 554,
                    "type": "NNG"
                },
                {
                    "lemma": ",",
                    "weight": 1,
                    "id": 31,
                    "position": 563,
                    "type": "SP"
                },
                {
                    "lemma": "할리우드",
                    "weight": 0.9,
                    "id": 32,
                    "position": 565,
                    "type": "NNP"
                },
                {
                    "lemma": "픽처스",
                    "weight": 0.211494,
                    "id": 33,
                    "position": 578,
                    "type": "NNG"
                },
                {
                    "lemma": ",",
                    "weight": 1,
                    "id": 34,
                    "position": 587,
                    "type": "SP"
                },
                {
                    "lemma": "미라맥스",
                    "weight": 0.112547,
                    "id": 35,
                    "position": 589,
                    "type": "NNP"
                },
                {
                    "lemma": ",",
                    "weight": 1,
                    "id": 36,
                    "position": 601,
                    "type": "SP"
                },
                {
                    "lemma": "디멘션",
                    "weight": 0.05,
                    "id": 37,
                    "position": 603,
                    "type": "NNG"
                },
                {
                    "lemma": "필름스",
                    "weight": 0.1,
                    "id": 38,
                    "position": 613,
                    "type": "NNG"
                },
                {
                    "lemma": "등",
                    "weight": 0.0146757,
                    "id": 39,
                    "position": 623,
                    "type": "NNB"
                },
                {
                    "lemma": "의",
                    "weight": 0.0520933,
                    "id": 40,
                    "position": 626,
                    "type": "JKG"
                },
                {
                    "lemma": "영화",
                    "weight": 0.864481,
                    "id": 41,
                    "position": 630,
                    "type": "NNG"
                },
                {
                    "lemma": "제작",
                    "weight": 0.9,
                    "id": 42,
                    "position": 637,
                    "type": "NNG"
                },
                {
                    "lemma": "및",
                    "weight": 0.00215414,
                    "id": 43,
                    "position": 644,
                    "type": "MAJ"
                },
                {
                    "lemma": "배급",
                    "weight": 0.9,
                    "id": 44,
                    "position": 648,
                    "type": "NNG"
                },
                {
                    "lemma": "사업",
                    "weight": 0.9,
                    "id": 45,
                    "position": 655,
                    "type": "NNG"
                },
                {
                    "lemma": "과",
                    "weight": 0.017569,
                    "id": 46,
                    "position": 661,
                    "type": "JC"
                },
                {
                    "lemma": "디즈니",
                    "weight": 0.9,
                    "id": 47,
                    "position": 665,
                    "type": "NNP"
                },
                {
                    "lemma": "채널",
                    "weight": 0.9,
                    "id": 48,
                    "position": 675,
                    "type": "NNG"
                },
                {
                    "lemma": ",",
                    "weight": 1,
                    "id": 49,
                    "position": 681,
                    "type": "SP"
                },
                {
                    "lemma": "ABC",
                    "weight": 1,
                    "id": 50,
                    "position": 683,
                    "type": "SL"
                },
                {
                    "lemma": ",",
                    "weight": 1,
                    "id": 51,
                    "position": 686,
                    "type": "SP"
                },
                {
                    "lemma": "ESPN",
                    "weight": 1,
                    "id": 52,
                    "position": 688,
                    "type": "SL"
                },
                {
                    "lemma": ",",
                    "weight": 1,
                    "id": 53,
                    "position": 692,
                    "type": "SP"
                },
                {
                    "lemma": "디즈니",
                    "weight": 0.9,
                    "id": 54,
                    "position": 694,
                    "type": "NNP"
                },
                {
                    "lemma": "주니어",
                    "weight": 0.231141,
                    "id": 55,
                    "position": 704,
                    "type": "NNG"
                },
                {
                    "lemma": "에서",
                    "weight": 0.153407,
                    "id": 56,
                    "position": 713,
                    "type": "JKB"
                },
                {
                    "lemma": "방송",
                    "weight": 0.9,
                    "id": 57,
                    "position": 720,
                    "type": "NNG"
                },
                {
                    "lemma": "되",
                    "weight": 0.000224177,
                    "id": 58,
                    "position": 726,
                    "type": "XSV"
                },
                {
                    "lemma": "ㄴ",
                    "weight": 0.392321,
                    "id": 59,
                    "position": 726,
                    "type": "ETM"
                },
                {
                    "lemma": "프로그램",
                    "weight": 0.9,
                    "id": 60,
                    "position": 730,
                    "type": "NNG"
                },
                {
                    "lemma": "을",
                    "weight": 0.129611,
                    "id": 61,
                    "position": 742,
                    "type": "JKO"
                },
                {
                    "lemma": "제작",
                    "weight": 0.9,
                    "id": 62,
                    "position": 746,
                    "type": "NNG"
                },
                {
                    "lemma": "및",
                    "weight": 0.00215414,
                    "id": 63,
                    "position": 753,
                    "type": "MAJ"
                },
                {
                    "lemma": "송출",
                    "weight": 0.9,
                    "id": 64,
                    "position": 757,
                    "type": "NNG"
                },
                {
                    "lemma": "하",
                    "weight": 0.0001,
                    "id": 65,
                    "position": 763,
                    "type": "XSV"
                },
                {
                    "lemma": "는",
                    "weight": 0.238503,
                    "id": 66,
                    "position": 766,
                    "type": "ETM"
                },
                {
                    "lemma": "방송",
                    "weight": 0.9,
                    "id": 67,
                    "position": 770,
                    "type": "NNG"
                },
                {
                    "lemma": "사업",
                    "weight": 0.9,
                    "id": 68,
                    "position": 777,
                    "type": "NNG"
                },
                {
                    "lemma": ",",
                    "weight": 1,
                    "id": 69,
                    "position": 783,
                    "type": "SP"
                },
                {
                    "lemma": "디즈니랜드",
                    "weight": 0.55,
                    "id": 70,
                    "position": 785,
                    "type": "NNP"
                },
                {
                    "lemma": "를",
                    "weight": 0.0283046,
                    "id": 71,
                    "position": 800,
                    "type": "JKO"
                },
                {
                    "lemma": "비롯하",
                    "weight": 0.9,
                    "id": 72,
                    "position": 804,
                    "type": "VV"
                },
                {
                    "lemma": "ㄴ",
                    "weight": 0.304215,
                    "id": 73,
                    "position": 810,
                    "type": "ETM"
                },
                {
                    "lemma": "11",
                    "weight": 1,
                    "id": 74,
                    "position": 814,
                    "type": "SN"
                },
                {
                    "lemma": "개",
                    "weight": 0.363274,
                    "id": 75,
                    "position": 816,
                    "type": "NNB"
                },
                {
                    "lemma": "의",
                    "weight": 0.0520933,
                    "id": 76,
                    "position": 819,
                    "type": "JKG"
                },
                {
                    "lemma": "테마",
                    "weight": 0.9,
                    "id": 77,
                    "position": 823,
                    "type": "NNG"
                },
                {
                    "lemma": "파크",
                    "weight": 0.158897,
                    "id": 78,
                    "position": 830,
                    "type": "NNG"
                },
                {
                    "lemma": "사업",
                    "weight": 0.9,
                    "id": 79,
                    "position": 837,
                    "type": "NNG"
                },
                {
                    "lemma": "등",
                    "weight": 0.0146757,
                    "id": 80,
                    "position": 844,
                    "type": "NNB"
                },
                {
                    "lemma": "을",
                    "weight": 0.0630104,
                    "id": 81,
                    "position": 847,
                    "type": "JKO"
                },
                {
                    "lemma": "소유",
                    "weight": 0.101295,
                    "id": 82,
                    "position": 851,
                    "type": "NNG"
                },
                {
                    "lemma": ",",
                    "weight": 1,
                    "id": 83,
                    "position": 857,
                    "type": "SP"
                },
                {
                    "lemma": "운영",
                    "weight": 0.531316,
                    "id": 84,
                    "position": 859,
                    "type": "NNG"
                },
                {
                    "lemma": "하",
                    "weight": 0.0001,
                    "id": 85,
                    "position": 865,
                    "type": "XSV"
                },
                {
                    "lemma": "고",
                    "weight": 0.359917,
                    "id": 86,
                    "position": 868,
                    "type": "EC"
                },
                {
                    "lemma": "있",
                    "weight": 0.125953,
                    "id": 87,
                    "position": 872,
                    "type": "VX"
                },
                {
                    "lemma": "다",
                    "weight": 0.180366,
                    "id": 88,
                    "position": 875,
                    "type": "EF"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 89,
                    "position": 878,
                    "type": "SF"
                }
            ],
            "NE": [
                {
                    "weight": 0.884226,
                    "end": 6,
                    "id": 0,
                    "text": "1991년 5월 6일부터",
                    "type": "DT_OTHERS",
                    "begin": 0,
                    "common_noun": 0
                },
                {
                    "weight": 0.371008,
                    "end": 11,
                    "id": 1,
                    "text": "다우 존스 산업평균지수",
                    "type": "TR_SOCIAL_SCIENCE",
                    "begin": 7,
                    "common_noun": 0
                },
                {
                    "weight": 0.35337,
                    "end": 18,
                    "id": 2,
                    "text": "마블 엔터테인먼트",
                    "type": "OGG_ECONOMY",
                    "begin": 17,
                    "common_noun": 0
                },
                {
                    "weight": 0.147848,
                    "end": 21,
                    "id": 3,
                    "text": "루카스필름",
                    "type": "OGG_ECONOMY",
                    "begin": 20,
                    "common_noun": 0
                },
                {
                    "weight": 0.214301,
                    "end": 23,
                    "id": 4,
                    "text": "픽사",
                    "type": "OGG_ECONOMY",
                    "begin": 23,
                    "common_noun": 0
                },
                {
                    "weight": 0.266004,
                    "end": 27,
                    "id": 5,
                    "text": "월트 디즈니 픽처스",
                    "type": "OGG_ECONOMY",
                    "begin": 25,
                    "common_noun": 0
                },
                {
                    "weight": 0.180493,
                    "end": 30,
                    "id": 6,
                    "text": "터치스톤 픽처스",
                    "type": "OGG_ECONOMY",
                    "begin": 29,
                    "common_noun": 0
                },
                {
                    "weight": 0.614552,
                    "end": 32,
                    "id": 7,
                    "text": "할리우드",
                    "type": "LC_OTHERS",
                    "begin": 32,
                    "common_noun": 0
                },
                {
                    "weight": 0.398482,
                    "end": 35,
                    "id": 8,
                    "text": "미라맥스",
                    "type": "OGG_ECONOMY",
                    "begin": 35,
                    "common_noun": 0
                },
                {
                    "weight": 0.269506,
                    "end": 38,
                    "id": 9,
                    "text": "디멘션 필름스",
                    "type": "OGG_ECONOMY",
                    "begin": 37,
                    "common_noun": 0
                },
                {
                    "weight": 0.616973,
                    "end": 41,
                    "id": 10,
                    "text": "영화",
                    "type": "FD_ART",
                    "begin": 41,
                    "common_noun": 0
                },
                {
                    "weight": 1,
                    "end": 45,
                    "id": 11,
                    "text": "사업",
                    "type": "CV_POSITION",
                    "begin": 45,
                    "common_noun": 0
                },
                {
                    "weight": 0.346629,
                    "end": 48,
                    "id": 12,
                    "text": "디즈니 채널",
                    "type": "OGG_MEDIA",
                    "begin": 47,
                    "common_noun": 0
                },
                {
                    "weight": 0.300453,
                    "end": 50,
                    "id": 13,
                    "text": "ABC",
                    "type": "OGG_MEDIA",
                    "begin": 50,
                    "common_noun": 0
                },
                {
                    "weight": 0.440659,
                    "end": 52,
                    "id": 14,
                    "text": "ESPN",
                    "type": "OGG_MEDIA",
                    "begin": 52,
                    "common_noun": 0
                },
                {
                    "weight": 0.193648,
                    "end": 55,
                    "id": 15,
                    "text": "디즈니 주니어",
                    "type": "OGG_ECONOMY",
                    "begin": 54,
                    "common_noun": 0
                },
                {
                    "weight": 1,
                    "end": 68,
                    "id": 16,
                    "text": "사업",
                    "type": "CV_POSITION",
                    "begin": 68,
                    "common_noun": 0
                },
                {
                    "weight": 0.343709,
                    "end": 70,
                    "id": 17,
                    "text": "디즈니랜드",
                    "type": "LC_TOUR",
                    "begin": 70,
                    "common_noun": 0
                },
                {
                    "weight": 0.715737,
                    "end": 75,
                    "id": 18,
                    "text": "11개",
                    "type": "QT_COUNT",
                    "begin": 74,
                    "common_noun": 0
                },
                {
                    "weight": 1,
                    "end": 79,
                    "id": 19,
                    "text": "사업",
                    "type": "CV_POSITION",
                    "begin": 79,
                    "common_noun": 0
                }
            ],
            "id": 3,
            "text": " 1991년 5월 6일부터 다우 존스 산업평균지수에 포함되었고 마블 엔터테인먼트, 루카스필름, 픽사, 월트 디즈니 픽처스, 터치스톤 픽처스, 할리우드 픽처스, 미라맥스, 디멘션 필름스 등의 영화 제작 및 배급 사업과 디즈니 채널, ABC, ESPN, 디즈니 주니어에서 방송된 프로그램을 제작 및 송출하는 방송 사업, 디즈니랜드를 비롯한 11개의 테마 파크 사업 등을 소유, 운영하고 있다.",
            "word": [
                {
                    "end": 1,
                    "id": 0,
                    "text": "1991년",
                    "type": "",
                    "begin": 0
                },
                {
                    "end": 3,
                    "id": 1,
                    "text": "5월",
                    "type": "",
                    "begin": 2
                },
                {
                    "end": 6,
                    "id": 2,
                    "text": "6일부터",
                    "type": "",
                    "begin": 4
                },
                {
                    "end": 7,
                    "id": 3,
                    "text": "다우",
                    "type": "",
                    "begin": 7
                },
                {
                    "end": 8,
                    "id": 4,
                    "text": "존스",
                    "type": "",
                    "begin": 8
                },
                {
                    "end": 12,
                    "id": 5,
                    "text": "산업평균지수에",
                    "type": "",
                    "begin": 9
                },
                {
                    "end": 16,
                    "id": 6,
                    "text": "포함되었고",
                    "type": "",
                    "begin": 13
                },
                {
                    "end": 17,
                    "id": 7,
                    "text": "마블",
                    "type": "",
                    "begin": 17
                },
                {
                    "end": 19,
                    "id": 8,
                    "text": "엔터테인먼트,",
                    "type": "",
                    "begin": 18
                },
                {
                    "end": 22,
                    "id": 9,
                    "text": "루카스필름,",
                    "type": "",
                    "begin": 20
                },
                {
                    "end": 24,
                    "id": 10,
                    "text": "픽사,",
                    "type": "",
                    "begin": 23
                },
                {
                    "end": 25,
                    "id": 11,
                    "text": "월트",
                    "type": "",
                    "begin": 25
                },
                {
                    "end": 26,
                    "id": 12,
                    "text": "디즈니",
                    "type": "",
                    "begin": 26
                },
                {
                    "end": 28,
                    "id": 13,
                    "text": "픽처스,",
                    "type": "",
                    "begin": 27
                },
                {
                    "end": 29,
                    "id": 14,
                    "text": "터치스톤",
                    "type": "",
                    "begin": 29
                },
                {
                    "end": 31,
                    "id": 15,
                    "text": "픽처스,",
                    "type": "",
                    "begin": 30
                },
                {
                    "end": 32,
                    "id": 16,
                    "text": "할리우드",
                    "type": "",
                    "begin": 32
                },
                {
                    "end": 34,
                    "id": 17,
                    "text": "픽처스,",
                    "type": "",
                    "begin": 33
                },
                {
                    "end": 36,
                    "id": 18,
                    "text": "미라맥스,",
                    "type": "",
                    "begin": 35
                },
                {
                    "end": 37,
                    "id": 19,
                    "text": "디멘션",
                    "type": "",
                    "begin": 37
                },
                {
                    "end": 38,
                    "id": 20,
                    "text": "필름스",
                    "type": "",
                    "begin": 38
                },
                {
                    "end": 40,
                    "id": 21,
                    "text": "등의",
                    "type": "",
                    "begin": 39
                },
                {
                    "end": 41,
                    "id": 22,
                    "text": "영화",
                    "type": "",
                    "begin": 41
                },
                {
                    "end": 42,
                    "id": 23,
                    "text": "제작",
                    "type": "",
                    "begin": 42
                },
                {
                    "end": 43,
                    "id": 24,
                    "text": "및",
                    "type": "",
                    "begin": 43
                },
                {
                    "end": 44,
                    "id": 25,
                    "text": "배급",
                    "type": "",
                    "begin": 44
                },
                {
                    "end": 46,
                    "id": 26,
                    "text": "사업과",
                    "type": "",
                    "begin": 45
                },
                {
                    "end": 47,
                    "id": 27,
                    "text": "디즈니",
                    "type": "",
                    "begin": 47
                },
                {
                    "end": 49,
                    "id": 28,
                    "text": "채널,",
                    "type": "",
                    "begin": 48
                },
                {
                    "end": 51,
                    "id": 29,
                    "text": "ABC,",
                    "type": "",
                    "begin": 50
                },
                {
                    "end": 53,
                    "id": 30,
                    "text": "ESPN,",
                    "type": "",
                    "begin": 52
                },
                {
                    "end": 54,
                    "id": 31,
                    "text": "디즈니",
                    "type": "",
                    "begin": 54
                },
                {
                    "end": 56,
                    "id": 32,
                    "text": "주니어에서",
                    "type": "",
                    "begin": 55
                },
                {
                    "end": 59,
                    "id": 33,
                    "text": "방송된",
                    "type": "",
                    "begin": 57
                },
                {
                    "end": 61,
                    "id": 34,
                    "text": "프로그램을",
                    "type": "",
                    "begin": 60
                },
                {
                    "end": 62,
                    "id": 35,
                    "text": "제작",
                    "type": "",
                    "begin": 62
                },
                {
                    "end": 63,
                    "id": 36,
                    "text": "및",
                    "type": "",
                    "begin": 63
                },
                {
                    "end": 66,
                    "id": 37,
                    "text": "송출하는",
                    "type": "",
                    "begin": 64
                },
                {
                    "end": 67,
                    "id": 38,
                    "text": "방송",
                    "type": "",
                    "begin": 67
                },
                {
                    "end": 69,
                    "id": 39,
                    "text": "사업,",
                    "type": "",
                    "begin": 68
                },
                {
                    "end": 71,
                    "id": 40,
                    "text": "디즈니랜드를",
                    "type": "",
                    "begin": 70
                },
                {
                    "end": 73,
                    "id": 41,
                    "text": "비롯한",
                    "type": "",
                    "begin": 72
                },
                {
                    "end": 76,
                    "id": 42,
                    "text": "11개의",
                    "type": "",
                    "begin": 74
                },
                {
                    "end": 77,
                    "id": 43,
                    "text": "테마",
                    "type": "",
                    "begin": 77
                },
                {
                    "end": 78,
                    "id": 44,
                    "text": "파크",
                    "type": "",
                    "begin": 78
                },
                {
                    "end": 79,
                    "id": 45,
                    "text": "사업",
                    "type": "",
                    "begin": 79
                },
                {
                    "end": 81,
                    "id": 46,
                    "text": "등을",
                    "type": "",
                    "begin": 80
                },
                {
                    "end": 83,
                    "id": 47,
                    "text": "소유,",
                    "type": "",
                    "begin": 82
                },
                {
                    "end": 86,
                    "id": 48,
                    "text": "운영하고",
                    "type": "",
                    "begin": 84
                },
                {
                    "end": 89,
                    "id": 49,
                    "text": "있다.",
                    "type": "",
                    "begin": 87
                }
            ],
            "mod_NE": [
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 13,
                    "text": "1991년 5월 6일부터",
                    "start_offset": 0,
                    "type": "DT_OTHERS",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 26,
                    "text": "다우 존스 산업평균지수",
                    "start_offset": 14,
                    "type": "TR_SOCIAL_SCIENCE",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 43,
                    "text": "마블 엔터테인먼트",
                    "start_offset": 34,
                    "type": "OGG_ECONOMY",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 50,
                    "text": "루카스필름",
                    "start_offset": 45,
                    "type": "OGG_ECONOMY",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 54,
                    "text": "픽사",
                    "start_offset": 52,
                    "type": "OGG_ECONOMY",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 66,
                    "text": "월트 디즈니 픽처스",
                    "start_offset": 56,
                    "type": "OGG_ECONOMY",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 76,
                    "text": "터치스톤 픽처스",
                    "start_offset": 68,
                    "type": "OGG_ECONOMY",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 82,
                    "text": "할리우드",
                    "start_offset": 78,
                    "type": "LC_OTHERS",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 92,
                    "text": "미라맥스",
                    "start_offset": 88,
                    "type": "OGG_ECONOMY",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 101,
                    "text": "디멘션 필름스",
                    "start_offset": 94,
                    "type": "OGG_ECONOMY",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 107,
                    "text": "영화",
                    "start_offset": 105,
                    "type": "FD_ART",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 118,
                    "text": "사업",
                    "start_offset": 116,
                    "type": "CV_POSITION",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 126,
                    "text": "디즈니 채널",
                    "start_offset": 120,
                    "type": "OGG_MEDIA",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 131,
                    "text": "ABC",
                    "start_offset": 128,
                    "type": "OGG_MEDIA",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 137,
                    "text": "ESPN",
                    "start_offset": 133,
                    "type": "OGG_MEDIA",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 146,
                    "text": "디즈니 주니어",
                    "start_offset": 139,
                    "type": "OGG_ECONOMY",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 174,
                    "text": "사업",
                    "start_offset": 172,
                    "type": "CV_POSITION",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 181,
                    "text": "디즈니랜드",
                    "start_offset": 176,
                    "type": "LC_TOUR",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 190,
                    "text": "11개",
                    "start_offset": 187,
                    "type": "QT_COUNT",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 200,
                    "text": "사업",
                    "start_offset": 198,
                    "type": "CV_POSITION",
                    "relation": 0
                }
            ]
        }
    ]
};
var el_4 = {
    "sentence": [
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 3,
                    "key_begin": 0,
                    "id": 0,
                    "label": "NP_SBJ",
                    "text": "블라디미르 푸틴 러시아 대통령이",
                    "head_phrase": 4,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 4,
                    "key_begin": 4,
                    "id": 1,
                    "label": "NP_AJT",
                    "text": "2018년",
                    "head_phrase": 4,
                    "begin": 4,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 8,
                    "key_begin": 5,
                    "id": 2,
                    "label": "NP_OBJ",
                    "text": "러시아 대통령 선거 출마를",
                    "head_phrase": 4,
                    "begin": 5,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 9,
                    "key_begin": 9,
                    "id": 3,
                    "label": "NP_OBJ",
                    "text": "선언을",
                    "head_phrase": 4,
                    "begin": 9,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 10,
                    "key_begin": 10,
                    "id": 4,
                    "label": "S",
                    "text": "P#0@SBJ이 P#1@AJT년 P#2@OBJ를 P#3@OBJ을 하였다.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [
                        0,
                        1,
                        2,
                        3
                    ],
                    "element": []
                }
            ],
            "dependency": [
                {
                    "head": 1,
                    "mod": [],
                    "weight": 0.211024,
                    "id": 0,
                    "text": "블라디미르",
                    "label": "NP"
                },
                {
                    "head": 2,
                    "mod": [
                        0
                    ],
                    "weight": 0.196592,
                    "id": 1,
                    "text": "푸틴",
                    "label": "NP"
                },
                {
                    "head": 3,
                    "mod": [
                        1
                    ],
                    "weight": 0.786936,
                    "id": 2,
                    "text": "러시아",
                    "label": "NP"
                },
                {
                    "head": 10,
                    "mod": [
                        2
                    ],
                    "weight": 0.870361,
                    "id": 3,
                    "text": "대통령이",
                    "label": "NP_SBJ"
                },
                {
                    "head": 10,
                    "mod": [],
                    "weight": 0.665119,
                    "id": 4,
                    "text": "2018년",
                    "label": "NP_AJT"
                },
                {
                    "head": 6,
                    "mod": [],
                    "weight": 0.28615,
                    "id": 5,
                    "text": "러시아",
                    "label": "NP"
                },
                {
                    "head": 7,
                    "mod": [
                        5
                    ],
                    "weight": 0.66411,
                    "id": 6,
                    "text": "대통령",
                    "label": "NP"
                },
                {
                    "head": 8,
                    "mod": [
                        6
                    ],
                    "weight": 0.742801,
                    "id": 7,
                    "text": "선거",
                    "label": "NP"
                },
                {
                    "head": 10,
                    "mod": [
                        7
                    ],
                    "weight": 0.771681,
                    "id": 8,
                    "text": "출마를",
                    "label": "NP_OBJ"
                },
                {
                    "head": 10,
                    "mod": [],
                    "weight": 0.73892,
                    "id": 9,
                    "text": "선언을",
                    "label": "NP_OBJ"
                },
                {
                    "head": -1,
                    "mod": [
                        3,
                        4,
                        8,
                        9
                    ],
                    "weight": 0.00115866,
                    "id": 10,
                    "text": "하였다.",
                    "label": "VP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 0,
                    "id": 0,
                    "text": "블라디미르",
                    "position": 0,
                    "type": "NNP",
                    "begin": 0
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 1,
                    "id": 1,
                    "text": "푸틴",
                    "position": 16,
                    "type": "NNP",
                    "begin": 1
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 2,
                    "id": 2,
                    "text": "러시아",
                    "position": 23,
                    "type": "NNP",
                    "begin": 2
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 3,
                    "id": 3,
                    "text": "대통령",
                    "position": 33,
                    "type": "NNG",
                    "begin": 3
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 4,
                    "id": 4,
                    "text": "이",
                    "position": 42,
                    "type": "JKS",
                    "begin": 4
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 5,
                    "id": 5,
                    "text": "2018",
                    "position": 46,
                    "type": "SN",
                    "begin": 5
                },
                {
                    "scode": "02",
                    "weight": 11,
                    "end": 6,
                    "id": 6,
                    "text": "년",
                    "position": 50,
                    "type": "NNB",
                    "begin": 6
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 7,
                    "id": 7,
                    "text": "러시아",
                    "position": 54,
                    "type": "NNP",
                    "begin": 7
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 8,
                    "id": 8,
                    "text": "대통령",
                    "position": 64,
                    "type": "NNG",
                    "begin": 8
                },
                {
                    "scode": "04",
                    "weight": 6.9,
                    "end": 9,
                    "id": 9,
                    "text": "선거",
                    "position": 74,
                    "type": "NNG",
                    "begin": 9
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 10,
                    "id": 10,
                    "text": "출마",
                    "position": 81,
                    "type": "NNG",
                    "begin": 10
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 11,
                    "id": 11,
                    "text": "를",
                    "position": 87,
                    "type": "JKO",
                    "begin": 11
                },
                {
                    "scode": "01",
                    "weight": 4.2,
                    "end": 12,
                    "id": 12,
                    "text": "선언",
                    "position": 91,
                    "type": "NNG",
                    "begin": 12
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 13,
                    "id": 13,
                    "text": "을",
                    "position": 97,
                    "type": "JKO",
                    "begin": 13
                },
                {
                    "scode": "01",
                    "weight": 4.4,
                    "end": 14,
                    "id": 14,
                    "text": "하",
                    "position": 101,
                    "type": "VV",
                    "begin": 14
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 15,
                    "id": 15,
                    "text": "었",
                    "position": 104,
                    "type": "EP",
                    "begin": 15
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 16,
                    "id": 16,
                    "text": "다",
                    "position": 107,
                    "type": "EF",
                    "begin": 16
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 17,
                    "id": 17,
                    "text": ".",
                    "position": 110,
                    "type": "SF",
                    "begin": 17
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "블라디미르/NNG",
                    "word_id": 0,
                    "m_end": 0,
                    "id": 0,
                    "target": "블라디미르",
                    "m_begin": 0
                },
                {
                    "result": "푸틴/NNG",
                    "word_id": 1,
                    "m_end": 1,
                    "id": 1,
                    "target": "푸틴",
                    "m_begin": 1
                },
                {
                    "result": "러시아/NNG",
                    "word_id": 2,
                    "m_end": 2,
                    "id": 2,
                    "target": "러시아",
                    "m_begin": 2
                },
                {
                    "result": "대통령/NNG+이/JKS",
                    "word_id": 3,
                    "m_end": 4,
                    "id": 3,
                    "target": "대통령이",
                    "m_begin": 3
                },
                {
                    "result": "2018/SN+년/NNB",
                    "word_id": 4,
                    "m_end": 6,
                    "id": 4,
                    "target": "2018년",
                    "m_begin": 5
                },
                {
                    "result": "러시아/NNG",
                    "word_id": 5,
                    "m_end": 7,
                    "id": 5,
                    "target": "러시아",
                    "m_begin": 7
                },
                {
                    "result": "대통령/NNG",
                    "word_id": 6,
                    "m_end": 8,
                    "id": 6,
                    "target": "대통령",
                    "m_begin": 8
                },
                {
                    "result": "선거/NNG",
                    "word_id": 7,
                    "m_end": 9,
                    "id": 7,
                    "target": "선거",
                    "m_begin": 9
                },
                {
                    "result": "출마/NNG+를/JKO",
                    "word_id": 8,
                    "m_end": 11,
                    "id": 8,
                    "target": "출마를",
                    "m_begin": 10
                },
                {
                    "result": "선언/NNG+을/JKO",
                    "word_id": 9,
                    "m_end": 13,
                    "id": 9,
                    "target": "선언을",
                    "m_begin": 12
                },
                {
                    "result": "하/VV+었/EP+다/EF+./SF",
                    "word_id": 10,
                    "m_end": 17,
                    "id": 10,
                    "target": "하였다.",
                    "m_begin": 14
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "en_entity": "Vladimir_Putin",
                        "link": 0,
                        "end_offset": 8,
                        "text": "블라디미르 푸틴",
                        "start_offset": 0,
                        "source": "NER",
                        "type": "PS_NAME",
                        "uri": "http://ko.dbpedia.org/resource/블라디미르_푸틴",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "en_entity": "Russia",
                        "link": 0,
                        "end_offset": 12,
                        "text": "러시아",
                        "start_offset": 9,
                        "source": "NER",
                        "type": "LCP_COUNTRY",
                        "uri": "http://ko.dbpedia.org/resource/러시아",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "en_entity": "Russia",
                        "link": 0,
                        "end_offset": 27,
                        "text": "러시아",
                        "start_offset": 24,
                        "source": "NER",
                        "type": "LCP_COUNTRY",
                        "uri": "http://ko.dbpedia.org/resource/러시아",
                        "relation": 0
                    }
                ],
                "d_entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 16,
                        "text": "대통령",
                        "start_offset": 13,
                        "source": "DE",
                        "type": "CV_POSITION",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 23,
                        "text": "2018년",
                        "start_offset": 18,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 34,
                        "text": "대통령 선거",
                        "start_offset": 28,
                        "source": "DE",
                        "type": "EV_OTHERS",
                        "uri": "",
                        "relation": 0
                    }
                ],
                "merge": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 8,
                        "text": "블라디미르 푸틴",
                        "start_offset": 0,
                        "source": "NER",
                        "type": "PS_NAME",
                        "uri": "http://ko.dbpedia.org/resource/블라디미르_푸틴",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 12,
                        "text": "러시아",
                        "start_offset": 9,
                        "source": "NER",
                        "type": "LCP_COUNTRY",
                        "uri": "http://ko.dbpedia.org/resource/러시아",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 16,
                        "text": "대통령",
                        "start_offset": 13,
                        "source": "DE",
                        "type": "CV_POSITION",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 23,
                        "text": "2018년",
                        "start_offset": 18,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 27,
                        "text": "러시아",
                        "start_offset": 24,
                        "source": "NER",
                        "type": "LCP_COUNTRY",
                        "uri": "http://ko.dbpedia.org/resource/러시아",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 34,
                        "text": "대통령 선거",
                        "start_offset": 28,
                        "source": "DE",
                        "type": "EV_OTHERS",
                        "uri": "",
                        "relation": 0
                    }
                ]
            },
            "morp": [
                {
                    "lemma": "블라디미르",
                    "weight": 0.9,
                    "id": 0,
                    "position": 0,
                    "type": "NNP"
                },
                {
                    "lemma": "푸틴",
                    "weight": 0.9,
                    "id": 1,
                    "position": 16,
                    "type": "NNP"
                },
                {
                    "lemma": "러시아",
                    "weight": 0.9,
                    "id": 2,
                    "position": 23,
                    "type": "NNP"
                },
                {
                    "lemma": "대통령",
                    "weight": 0.9,
                    "id": 3,
                    "position": 33,
                    "type": "NNG"
                },
                {
                    "lemma": "이",
                    "weight": 0.0360723,
                    "id": 4,
                    "position": 42,
                    "type": "JKS"
                },
                {
                    "lemma": "2018",
                    "weight": 1,
                    "id": 5,
                    "position": 46,
                    "type": "SN"
                },
                {
                    "lemma": "년",
                    "weight": 0.414343,
                    "id": 6,
                    "position": 50,
                    "type": "NNB"
                },
                {
                    "lemma": "러시아",
                    "weight": 0.9,
                    "id": 7,
                    "position": 54,
                    "type": "NNP"
                },
                {
                    "lemma": "대통령",
                    "weight": 0.9,
                    "id": 8,
                    "position": 64,
                    "type": "NNG"
                },
                {
                    "lemma": "선거",
                    "weight": 0.9,
                    "id": 9,
                    "position": 74,
                    "type": "NNG"
                },
                {
                    "lemma": "출마",
                    "weight": 0.9,
                    "id": 10,
                    "position": 81,
                    "type": "NNG"
                },
                {
                    "lemma": "를",
                    "weight": 0.137686,
                    "id": 11,
                    "position": 87,
                    "type": "JKO"
                },
                {
                    "lemma": "선언",
                    "weight": 0.1013,
                    "id": 12,
                    "position": 91,
                    "type": "NNG"
                },
                {
                    "lemma": "을",
                    "weight": 0.129611,
                    "id": 13,
                    "position": 97,
                    "type": "JKO"
                },
                {
                    "lemma": "하",
                    "weight": 0.48169,
                    "id": 14,
                    "position": 101,
                    "type": "VV"
                },
                {
                    "lemma": "었",
                    "weight": 0.9,
                    "id": 15,
                    "position": 104,
                    "type": "EP"
                },
                {
                    "lemma": "다",
                    "weight": 0.640954,
                    "id": 16,
                    "position": 107,
                    "type": "EF"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 17,
                    "position": 110,
                    "type": "SF"
                }
            ],
            "NE": [
                {
                    "weight": 0.48796,
                    "end": 1,
                    "id": 0,
                    "text": "블라디미르 푸틴",
                    "type": "PS_NAME",
                    "begin": 0,
                    "common_noun": 0
                },
                {
                    "weight": 0.508229,
                    "end": 2,
                    "id": 1,
                    "text": "러시아",
                    "type": "LCP_COUNTRY",
                    "begin": 2,
                    "common_noun": 0
                },
                {
                    "weight": 0.453267,
                    "end": 3,
                    "id": 2,
                    "text": "대통령",
                    "type": "CV_POSITION",
                    "begin": 3,
                    "common_noun": 0
                },
                {
                    "weight": 0.815148,
                    "end": 6,
                    "id": 3,
                    "text": "2018년",
                    "type": "DT_YEAR",
                    "begin": 5,
                    "common_noun": 0
                },
                {
                    "weight": 0.780973,
                    "end": 7,
                    "id": 4,
                    "text": "러시아",
                    "type": "LCP_COUNTRY",
                    "begin": 7,
                    "common_noun": 0
                },
                {
                    "weight": 0.413863,
                    "end": 9,
                    "id": 5,
                    "text": "대통령 선거",
                    "type": "EV_OTHERS",
                    "begin": 8,
                    "common_noun": 0
                }
            ],
            "id": 0,
            "text": "블라디미르 푸틴 러시아 대통령이 2018년 러시아 대통령 선거 출마를 선언을 하였다.",
            "word": [
                {
                    "end": 0,
                    "id": 0,
                    "text": "블라디미르",
                    "type": "",
                    "begin": 0
                },
                {
                    "end": 1,
                    "id": 1,
                    "text": "푸틴",
                    "type": "",
                    "begin": 1
                },
                {
                    "end": 2,
                    "id": 2,
                    "text": "러시아",
                    "type": "",
                    "begin": 2
                },
                {
                    "end": 4,
                    "id": 3,
                    "text": "대통령이",
                    "type": "",
                    "begin": 3
                },
                {
                    "end": 6,
                    "id": 4,
                    "text": "2018년",
                    "type": "",
                    "begin": 5
                },
                {
                    "end": 7,
                    "id": 5,
                    "text": "러시아",
                    "type": "",
                    "begin": 7
                },
                {
                    "end": 8,
                    "id": 6,
                    "text": "대통령",
                    "type": "",
                    "begin": 8
                },
                {
                    "end": 9,
                    "id": 7,
                    "text": "선거",
                    "type": "",
                    "begin": 9
                },
                {
                    "end": 11,
                    "id": 8,
                    "text": "출마를",
                    "type": "",
                    "begin": 10
                },
                {
                    "end": 13,
                    "id": 9,
                    "text": "선언을",
                    "type": "",
                    "begin": 12
                },
                {
                    "end": 17,
                    "id": 10,
                    "text": "하였다.",
                    "type": "",
                    "begin": 14
                }
            ],
            "mod_NE": [
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 8,
                    "text": "블라디미르 푸틴",
                    "start_offset": 0,
                    "type": "PS_NAME",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 12,
                    "text": "러시아",
                    "start_offset": 9,
                    "type": "LCP_COUNTRY",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 16,
                    "text": "대통령",
                    "start_offset": 13,
                    "type": "CV_POSITION",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 23,
                    "text": "2018년",
                    "start_offset": 18,
                    "type": "DT_YEAR",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 27,
                    "text": "러시아",
                    "start_offset": 24,
                    "type": "LCP_COUNTRY",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 34,
                    "text": "대통령 선거",
                    "start_offset": 28,
                    "type": "EV_OTHERS",
                    "relation": 0
                }
            ]
        },
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 0,
                    "key_begin": 0,
                    "id": 0,
                    "label": "AP",
                    "text": "한편",
                    "head_phrase": 5,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 4,
                    "key_begin": 1,
                    "id": 1,
                    "label": "NP_AJT",
                    "text": "2012년 러시아 대통령 선거에서",
                    "head_phrase": 2,
                    "begin": 1,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 5,
                    "key_begin": 5,
                    "id": 2,
                    "label": "VP_MOD",
                    "text": "P#1@AJT에서 당선된",
                    "head_phrase": 3,
                    "begin": 1,
                    "sub_phrase": [
                        1
                    ],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 7,
                    "key_begin": 6,
                    "id": 3,
                    "label": "NP_SBJ",
                    "text": "P#2@MODㄴ 푸틴의 임기는",
                    "head_phrase": 5,
                    "begin": 1,
                    "sub_phrase": [
                        2
                    ],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 9,
                    "key_begin": 8,
                    "id": 4,
                    "label": "NP_AJT",
                    "text": "5월 7일까지로",
                    "head_phrase": 5,
                    "begin": 8,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 10,
                    "key_begin": 10,
                    "id": 5,
                    "label": "S",
                    "text": "P#0@AP한편 P#3@SBJ는 P#4@AJT로 예정되어있다.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [
                        0,
                        3,
                        4
                    ],
                    "element": []
                }
            ],
            "dependency": [
                {
                    "head": 10,
                    "mod": [],
                    "weight": 0.409308,
                    "id": 0,
                    "text": "한편",
                    "label": "AP"
                },
                {
                    "head": 4,
                    "mod": [],
                    "weight": 0.264854,
                    "id": 1,
                    "text": "2012년",
                    "label": "NP"
                },
                {
                    "head": 3,
                    "mod": [],
                    "weight": 0.419317,
                    "id": 2,
                    "text": "러시아",
                    "label": "NP"
                },
                {
                    "head": 4,
                    "mod": [
                        2
                    ],
                    "weight": 0.796957,
                    "id": 3,
                    "text": "대통령",
                    "label": "NP"
                },
                {
                    "head": 5,
                    "mod": [
                        1,
                        3
                    ],
                    "weight": 0.840512,
                    "id": 4,
                    "text": "선거에서",
                    "label": "NP_AJT"
                },
                {
                    "head": 7,
                    "mod": [
                        4
                    ],
                    "weight": 0.6938,
                    "id": 5,
                    "text": "당선된",
                    "label": "VP_MOD"
                },
                {
                    "head": 7,
                    "mod": [],
                    "weight": 0.682685,
                    "id": 6,
                    "text": "푸틴의",
                    "label": "NP_MOD"
                },
                {
                    "head": 10,
                    "mod": [
                        5,
                        6
                    ],
                    "weight": 0.71718,
                    "id": 7,
                    "text": "임기는",
                    "label": "NP_SBJ"
                },
                {
                    "head": 9,
                    "mod": [],
                    "weight": 0.795441,
                    "id": 8,
                    "text": "5월",
                    "label": "NP"
                },
                {
                    "head": 10,
                    "mod": [
                        8
                    ],
                    "weight": 0.805068,
                    "id": 9,
                    "text": "7일까지로",
                    "label": "NP_AJT"
                },
                {
                    "head": -1,
                    "mod": [
                        0,
                        7,
                        9
                    ],
                    "weight": 0.00447974,
                    "id": 10,
                    "text": "예정되어있다.",
                    "label": "VP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 0,
                    "id": 0,
                    "text": "한편",
                    "position": 112,
                    "type": "MAG",
                    "begin": 0
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 1,
                    "id": 1,
                    "text": "2012",
                    "position": 119,
                    "type": "SN",
                    "begin": 1
                },
                {
                    "scode": "02",
                    "weight": 6.5,
                    "end": 2,
                    "id": 2,
                    "text": "년",
                    "position": 123,
                    "type": "NNB",
                    "begin": 2
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 3,
                    "id": 3,
                    "text": "러시아",
                    "position": 127,
                    "type": "NNP",
                    "begin": 3
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 4,
                    "id": 4,
                    "text": "대통령",
                    "position": 137,
                    "type": "NNG",
                    "begin": 4
                },
                {
                    "scode": "04",
                    "weight": 5.9,
                    "end": 5,
                    "id": 5,
                    "text": "선거",
                    "position": 147,
                    "type": "NNG",
                    "begin": 5
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 6,
                    "id": 6,
                    "text": "에서",
                    "position": 153,
                    "type": "JKB",
                    "begin": 6
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 8,
                    "id": 7,
                    "text": "당선되",
                    "position": 160,
                    "type": "VV",
                    "begin": 7
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 9,
                    "id": 8,
                    "text": "ㄴ",
                    "position": 166,
                    "type": "ETM",
                    "begin": 9
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 10,
                    "id": 9,
                    "text": "푸틴",
                    "position": 170,
                    "type": "NNP",
                    "begin": 10
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 11,
                    "id": 10,
                    "text": "의",
                    "position": 176,
                    "type": "JKG",
                    "begin": 11
                },
                {
                    "scode": "01",
                    "weight": 1,
                    "end": 12,
                    "id": 11,
                    "text": "임기",
                    "position": 180,
                    "type": "NNG",
                    "begin": 12
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 13,
                    "id": 12,
                    "text": "는",
                    "position": 186,
                    "type": "JX",
                    "begin": 13
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 14,
                    "id": 13,
                    "text": "5",
                    "position": 190,
                    "type": "SN",
                    "begin": 14
                },
                {
                    "scode": "02",
                    "weight": 3.5,
                    "end": 15,
                    "id": 14,
                    "text": "월",
                    "position": 191,
                    "type": "NNB",
                    "begin": 15
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 16,
                    "id": 15,
                    "text": "7",
                    "position": 195,
                    "type": "SN",
                    "begin": 16
                },
                {
                    "scode": "07",
                    "weight": 2,
                    "end": 17,
                    "id": 16,
                    "text": "일",
                    "position": 196,
                    "type": "NNB",
                    "begin": 17
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 18,
                    "id": 17,
                    "text": "까지",
                    "position": 199,
                    "type": "JX",
                    "begin": 18
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 19,
                    "id": 18,
                    "text": "로",
                    "position": 205,
                    "type": "JKB",
                    "begin": 19
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 21,
                    "id": 19,
                    "text": "예정되",
                    "position": 209,
                    "type": "VV",
                    "begin": 20
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 22,
                    "id": 20,
                    "text": "어",
                    "position": 218,
                    "type": "EC",
                    "begin": 22
                },
                {
                    "scode": "01",
                    "weight": 2,
                    "end": 23,
                    "id": 21,
                    "text": "있",
                    "position": 221,
                    "type": "VX",
                    "begin": 23
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 24,
                    "id": 22,
                    "text": "다",
                    "position": 224,
                    "type": "EF",
                    "begin": 24
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 25,
                    "id": 23,
                    "text": ".",
                    "position": 227,
                    "type": "SF",
                    "begin": 25
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "한편/MAG",
                    "word_id": 0,
                    "m_end": 0,
                    "id": 0,
                    "target": "한편",
                    "m_begin": 0
                },
                {
                    "result": "2012/SN+년/NNB",
                    "word_id": 1,
                    "m_end": 2,
                    "id": 1,
                    "target": "2012년",
                    "m_begin": 1
                },
                {
                    "result": "러시아/NNG",
                    "word_id": 2,
                    "m_end": 3,
                    "id": 2,
                    "target": "러시아",
                    "m_begin": 3
                },
                {
                    "result": "대통령/NNG",
                    "word_id": 3,
                    "m_end": 4,
                    "id": 3,
                    "target": "대통령",
                    "m_begin": 4
                },
                {
                    "result": "선거/NNG+에서/JKB",
                    "word_id": 4,
                    "m_end": 6,
                    "id": 4,
                    "target": "선거에서",
                    "m_begin": 5
                },
                {
                    "result": "당선되/VV+ㄴ/ETM",
                    "word_id": 5,
                    "m_end": 9,
                    "id": 5,
                    "target": "당선된",
                    "m_begin": 7
                },
                {
                    "result": "푸틴/NNG+의/JKG",
                    "word_id": 6,
                    "m_end": 11,
                    "id": 6,
                    "target": "푸틴의",
                    "m_begin": 10
                },
                {
                    "result": "임기/NNG+는/JX",
                    "word_id": 7,
                    "m_end": 13,
                    "id": 7,
                    "target": "임기는",
                    "m_begin": 12
                },
                {
                    "result": "5/SN+월/NNB",
                    "word_id": 8,
                    "m_end": 15,
                    "id": 8,
                    "target": "5월",
                    "m_begin": 14
                },
                {
                    "result": "7/SN+일/NNB+까지/JX+로/JKB",
                    "word_id": 9,
                    "m_end": 19,
                    "id": 9,
                    "target": "7일까지로",
                    "m_begin": 16
                },
                {
                    "result": "예정되/VV+어/EC+있/VX+다/EF+./SF",
                    "word_id": 10,
                    "m_end": 25,
                    "id": 10,
                    "target": "예정되어있다.",
                    "m_begin": 20
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "en_entity": "Russia",
                        "link": 0,
                        "end_offset": 12,
                        "text": "러시아",
                        "start_offset": 9,
                        "source": "NER",
                        "type": "LCP_COUNTRY",
                        "uri": "http://ko.dbpedia.org/resource/러시아",
                        "relation": 0
                    },
                    {
                        "indirect": 0,
                        "confidence": 0.9947285258031537,
                        "link": 18,
                        "end_offset": 28,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://wikidata.dbpedia.org/resource/Q5",
                            "http://xmlns.com/foaf/0.1/Person",
                            "http://dbpedia.org/ontology/Agent",
                            "http://dbpedia.org/ontology/Person",
                            "http://dbpedia.org/ontology/Politician",
                            "http://dbpedia.org/ontology/President",
                            "http://schema.org/Person",
                            "http://wikidata.dbpedia.org/resource/Q215627",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson",
                            "http://www.wikidata.org/entity/Q5",
                            "http://www.wikidata.org/entity/Q82955",
                            "http://www.wikidata.org/entity/Q215627",
                            "http://www.wikidata.org/entity/Q30461"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/블라디미르_푸틴",
                        "relation": 18,
                        "score": 2.342422680822206,
                        "en_entity": "Vladimir_Putin",
                        "text": "푸틴",
                        "start_offset": 26,
                        "id": 325284
                    }
                ],
                "d_entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 8,
                        "text": "2012년",
                        "start_offset": 3,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 19,
                        "text": "대통령 선거",
                        "start_offset": 13,
                        "source": "DE",
                        "type": "EV_OTHERS",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 41,
                        "text": "5월 7일까지",
                        "start_offset": 34,
                        "source": "DE",
                        "type": "DT_OTHERS",
                        "uri": "",
                        "relation": 0
                    }
                ],
                "merge": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 8,
                        "text": "2012년",
                        "start_offset": 3,
                        "source": "DE",
                        "type": "DT_YEAR",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 12,
                        "text": "러시아",
                        "start_offset": 9,
                        "source": "NER",
                        "type": "LCP_COUNTRY",
                        "uri": "http://ko.dbpedia.org/resource/러시아",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 19,
                        "text": "대통령 선거",
                        "start_offset": 13,
                        "source": "DE",
                        "type": "EV_OTHERS",
                        "uri": "",
                        "relation": 0
                    },
                    {
                        "score": 2.342422680822206,
                        "indirect": 0,
                        "confidence": 0.9947285258031537,
                        "link": 18,
                        "end_offset": 28,
                        "text": "푸틴",
                        "start_offset": 26,
                        "id": 325284,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://wikidata.dbpedia.org/resource/Q5",
                            "http://xmlns.com/foaf/0.1/Person",
                            "http://dbpedia.org/ontology/Agent",
                            "http://dbpedia.org/ontology/Person",
                            "http://dbpedia.org/ontology/Politician",
                            "http://dbpedia.org/ontology/President",
                            "http://schema.org/Person",
                            "http://wikidata.dbpedia.org/resource/Q215627",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson",
                            "http://www.wikidata.org/entity/Q5",
                            "http://www.wikidata.org/entity/Q82955",
                            "http://www.wikidata.org/entity/Q215627",
                            "http://www.wikidata.org/entity/Q30461"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/블라디미르_푸틴",
                        "relation": 18
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 41,
                        "text": "5월 7일까지",
                        "start_offset": 34,
                        "source": "DE",
                        "type": "DT_OTHERS",
                        "uri": "",
                        "relation": 0
                    }
                ]
            },
            "morp": [
                {
                    "lemma": "한편",
                    "weight": 0.0322079,
                    "id": 0,
                    "position": 112,
                    "type": "MAG"
                },
                {
                    "lemma": "2012",
                    "weight": 1,
                    "id": 1,
                    "position": 119,
                    "type": "SN"
                },
                {
                    "lemma": "년",
                    "weight": 0.414343,
                    "id": 2,
                    "position": 123,
                    "type": "NNB"
                },
                {
                    "lemma": "러시아",
                    "weight": 0.9,
                    "id": 3,
                    "position": 127,
                    "type": "NNP"
                },
                {
                    "lemma": "대통령",
                    "weight": 0.9,
                    "id": 4,
                    "position": 137,
                    "type": "NNG"
                },
                {
                    "lemma": "선거",
                    "weight": 0.9,
                    "id": 5,
                    "position": 147,
                    "type": "NNG"
                },
                {
                    "lemma": "에서",
                    "weight": 0.153407,
                    "id": 6,
                    "position": 153,
                    "type": "JKB"
                },
                {
                    "lemma": "당선",
                    "weight": 0.9,
                    "id": 7,
                    "position": 160,
                    "type": "NNG"
                },
                {
                    "lemma": "되",
                    "weight": 0.000224177,
                    "id": 8,
                    "position": 166,
                    "type": "XSV"
                },
                {
                    "lemma": "ㄴ",
                    "weight": 0.392321,
                    "id": 9,
                    "position": 166,
                    "type": "ETM"
                },
                {
                    "lemma": "푸틴",
                    "weight": 0.9,
                    "id": 10,
                    "position": 170,
                    "type": "NNP"
                },
                {
                    "lemma": "의",
                    "weight": 0.0987295,
                    "id": 11,
                    "position": 176,
                    "type": "JKG"
                },
                {
                    "lemma": "임기",
                    "weight": 0.9,
                    "id": 12,
                    "position": 180,
                    "type": "NNG"
                },
                {
                    "lemma": "는",
                    "weight": 0.0287565,
                    "id": 13,
                    "position": 186,
                    "type": "JX"
                },
                {
                    "lemma": "5",
                    "weight": 1,
                    "id": 14,
                    "position": 190,
                    "type": "SN"
                },
                {
                    "lemma": "월",
                    "weight": 0.408539,
                    "id": 15,
                    "position": 191,
                    "type": "NNB"
                },
                {
                    "lemma": "7",
                    "weight": 1,
                    "id": 16,
                    "position": 195,
                    "type": "SN"
                },
                {
                    "lemma": "일",
                    "weight": 0.126777,
                    "id": 17,
                    "position": 196,
                    "type": "NNB"
                },
                {
                    "lemma": "까지",
                    "weight": 0.105153,
                    "id": 18,
                    "position": 199,
                    "type": "JX"
                },
                {
                    "lemma": "로",
                    "weight": 0.00222265,
                    "id": 19,
                    "position": 205,
                    "type": "JKB"
                },
                {
                    "lemma": "예정",
                    "weight": 0.9,
                    "id": 20,
                    "position": 209,
                    "type": "NNG"
                },
                {
                    "lemma": "되",
                    "weight": 0.000224177,
                    "id": 21,
                    "position": 215,
                    "type": "XSV"
                },
                {
                    "lemma": "어",
                    "weight": 0.361326,
                    "id": 22,
                    "position": 218,
                    "type": "EC"
                },
                {
                    "lemma": "있",
                    "weight": 0.125953,
                    "id": 23,
                    "position": 221,
                    "type": "VX"
                },
                {
                    "lemma": "다",
                    "weight": 0.180366,
                    "id": 24,
                    "position": 224,
                    "type": "EF"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 25,
                    "position": 227,
                    "type": "SF"
                }
            ],
            "NE": [
                {
                    "weight": 0.87893,
                    "end": 2,
                    "id": 0,
                    "text": "2012년",
                    "type": "DT_YEAR",
                    "begin": 1,
                    "common_noun": 0
                },
                {
                    "weight": 0.821016,
                    "end": 3,
                    "id": 1,
                    "text": "러시아",
                    "type": "LCP_COUNTRY",
                    "begin": 3,
                    "common_noun": 0
                },
                {
                    "weight": 0.670548,
                    "end": 5,
                    "id": 2,
                    "text": "대통령 선거",
                    "type": "EV_OTHERS",
                    "begin": 4,
                    "common_noun": 0
                },
                {
                    "weight": 0.236022,
                    "end": 10,
                    "id": 3,
                    "text": "푸틴",
                    "type": "PS_NAME",
                    "begin": 10,
                    "common_noun": 0
                },
                {
                    "weight": 0.848981,
                    "end": 18,
                    "id": 4,
                    "text": "5월 7일까지",
                    "type": "DT_OTHERS",
                    "begin": 14,
                    "common_noun": 0
                }
            ],
            "id": 1,
            "text": " 한편 2012년 러시아 대통령 선거에서 당선된 푸틴의 임기는 5월 7일까지로 예정되어있다.",
            "word": [
                {
                    "end": 0,
                    "id": 0,
                    "text": "한편",
                    "type": "",
                    "begin": 0
                },
                {
                    "end": 2,
                    "id": 1,
                    "text": "2012년",
                    "type": "",
                    "begin": 1
                },
                {
                    "end": 3,
                    "id": 2,
                    "text": "러시아",
                    "type": "",
                    "begin": 3
                },
                {
                    "end": 4,
                    "id": 3,
                    "text": "대통령",
                    "type": "",
                    "begin": 4
                },
                {
                    "end": 6,
                    "id": 4,
                    "text": "선거에서",
                    "type": "",
                    "begin": 5
                },
                {
                    "end": 9,
                    "id": 5,
                    "text": "당선된",
                    "type": "",
                    "begin": 7
                },
                {
                    "end": 11,
                    "id": 6,
                    "text": "푸틴의",
                    "type": "",
                    "begin": 10
                },
                {
                    "end": 13,
                    "id": 7,
                    "text": "임기는",
                    "type": "",
                    "begin": 12
                },
                {
                    "end": 15,
                    "id": 8,
                    "text": "5월",
                    "type": "",
                    "begin": 14
                },
                {
                    "end": 19,
                    "id": 9,
                    "text": "7일까지로",
                    "type": "",
                    "begin": 16
                },
                {
                    "end": 25,
                    "id": 10,
                    "text": "예정되어있다.",
                    "type": "",
                    "begin": 20
                }
            ],
            "mod_NE": [
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 8,
                    "text": "2012년",
                    "start_offset": 3,
                    "type": "DT_YEAR",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 12,
                    "text": "러시아",
                    "start_offset": 9,
                    "type": "LCP_COUNTRY",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 19,
                    "text": "대통령 선거",
                    "start_offset": 13,
                    "type": "EV_OTHERS",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 28,
                    "text": "푸틴",
                    "start_offset": 26,
                    "type": "PS_NAME",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 41,
                    "text": "5월 7일까지",
                    "start_offset": 34,
                    "type": "DT_OTHERS",
                    "relation": 0
                }
            ]
        }
    ]
};
var el_5 = {
    "sentence": [
        {
            "phrase_dependency": [
                {
                    "weight": 0,
                    "end": 0,
                    "key_begin": 0,
                    "id": 0,
                    "label": "NP_SBJ",
                    "text": "인셉션은",
                    "head_phrase": 4,
                    "begin": 0,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 2,
                    "key_begin": 1,
                    "id": 1,
                    "label": "NP_SBJ",
                    "text": "크리스토퍼 놀런이",
                    "head_phrase": 3,
                    "begin": 1,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 3,
                    "key_begin": 3,
                    "id": 2,
                    "label": "NP_OBJ",
                    "text": "제작을",
                    "head_phrase": 3,
                    "begin": 3,
                    "sub_phrase": [],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 4,
                    "key_begin": 4,
                    "id": 3,
                    "label": "S_MOD",
                    "text": "P#1@SBJ이 P#2@OBJ을 맡은",
                    "head_phrase": 4,
                    "begin": 1,
                    "sub_phrase": [
                        1,
                        2
                    ],
                    "element": []
                },
                {
                    "weight": 0,
                    "end": 9,
                    "key_begin": 5,
                    "id": 4,
                    "label": "S",
                    "text": "P#0@SBJ은 S#3@MOD은 '꿈 도둑' 주제의 스릴러 영화이다.",
                    "head_phrase": -1,
                    "begin": 0,
                    "sub_phrase": [
                        0,
                        3
                    ],
                    "element": [
                        {
                            "end": 16,
                            "ne_type": "",
                            "text": "'꿈 도둑' 주제의 스릴러 영화",
                            "label": "NP",
                            "begin": 9
                        },
                        {
                            "end": 19,
                            "ne_type": "",
                            "text": "이다.",
                            "label": "VP",
                            "begin": 17
                        }
                    ]
                }
            ],
            "dependency": [
                {
                    "head": 9,
                    "mod": [],
                    "weight": 0.865738,
                    "id": 0,
                    "text": "인셉션은",
                    "label": "NP_SBJ"
                },
                {
                    "head": 2,
                    "mod": [],
                    "weight": 0.815907,
                    "id": 1,
                    "text": "크리스토퍼",
                    "label": "NP"
                },
                {
                    "head": 4,
                    "mod": [
                        1
                    ],
                    "weight": 0.5638,
                    "id": 2,
                    "text": "놀런이",
                    "label": "NP_SBJ"
                },
                {
                    "head": 4,
                    "mod": [],
                    "weight": 0.737112,
                    "id": 3,
                    "text": "제작을",
                    "label": "NP_OBJ"
                },
                {
                    "head": 7,
                    "mod": [
                        2,
                        3
                    ],
                    "weight": 0.237969,
                    "id": 4,
                    "text": "맡은",
                    "label": "VP_MOD"
                },
                {
                    "head": 6,
                    "mod": [],
                    "weight": 0.761233,
                    "id": 5,
                    "text": "'꿈",
                    "label": "NP"
                },
                {
                    "head": 7,
                    "mod": [
                        5
                    ],
                    "weight": 0.663337,
                    "id": 6,
                    "text": "도둑'",
                    "label": "NP"
                },
                {
                    "head": 9,
                    "mod": [
                        4,
                        6
                    ],
                    "weight": 0.7902,
                    "id": 7,
                    "text": "주제의",
                    "label": "NP_MOD"
                },
                {
                    "head": 9,
                    "mod": [],
                    "weight": 0.804002,
                    "id": 8,
                    "text": "스릴러",
                    "label": "NP"
                },
                {
                    "head": -1,
                    "mod": [
                        0,
                        7,
                        8
                    ],
                    "weight": 0.0174464,
                    "id": 9,
                    "text": "영화이다.",
                    "label": "VNP"
                }
            ],
            "ZA": [],
            "WSD": [
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 0,
                    "id": 0,
                    "text": "인셉션",
                    "position": 0,
                    "type": "NNP",
                    "begin": 0
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 1,
                    "id": 1,
                    "text": "은",
                    "position": 9,
                    "type": "JX",
                    "begin": 1
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 2,
                    "id": 2,
                    "text": "크리스토퍼",
                    "position": 13,
                    "type": "NNP",
                    "begin": 2
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 3,
                    "id": 3,
                    "text": "놀런",
                    "position": 29,
                    "type": "NNP",
                    "begin": 3
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 4,
                    "id": 4,
                    "text": "이",
                    "position": 35,
                    "type": "JKS",
                    "begin": 4
                },
                {
                    "scode": "02",
                    "weight": 1,
                    "end": 5,
                    "id": 5,
                    "text": "제작",
                    "position": 39,
                    "type": "NNG",
                    "begin": 5
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 6,
                    "id": 6,
                    "text": "을",
                    "position": 45,
                    "type": "JKO",
                    "begin": 6
                },
                {
                    "scode": "01",
                    "weight": 2,
                    "end": 7,
                    "id": 7,
                    "text": "맡",
                    "position": 49,
                    "type": "VV",
                    "begin": 7
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 8,
                    "id": 8,
                    "text": "은",
                    "position": 52,
                    "type": "ETM",
                    "begin": 8
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 9,
                    "id": 9,
                    "text": "'",
                    "position": 56,
                    "type": "SS",
                    "begin": 9
                },
                {
                    "scode": "01",
                    "weight": 1,
                    "end": 10,
                    "id": 10,
                    "text": "꿈",
                    "position": 57,
                    "type": "NNG",
                    "begin": 10
                },
                {
                    "scode": "01",
                    "weight": 1,
                    "end": 11,
                    "id": 11,
                    "text": "도둑",
                    "position": 61,
                    "type": "NNG",
                    "begin": 11
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 12,
                    "id": 12,
                    "text": "'",
                    "position": 67,
                    "type": "SS",
                    "begin": 12
                },
                {
                    "scode": "04",
                    "weight": 2.11667,
                    "end": 13,
                    "id": 13,
                    "text": "주제",
                    "position": 69,
                    "type": "NNG",
                    "begin": 13
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 14,
                    "id": 14,
                    "text": "의",
                    "position": 75,
                    "type": "JKG",
                    "begin": 14
                },
                {
                    "scode": "00",
                    "weight": 0,
                    "end": 15,
                    "id": 15,
                    "text": "스릴러",
                    "position": 79,
                    "type": "NNG",
                    "begin": 15
                },
                {
                    "scode": "01",
                    "weight": 4.4,
                    "end": 16,
                    "id": 16,
                    "text": "영화",
                    "position": 89,
                    "type": "NNG",
                    "begin": 16
                },
                {
                    "scode": "01",
                    "weight": 1,
                    "end": 17,
                    "id": 17,
                    "text": "이",
                    "position": 95,
                    "type": "VCP",
                    "begin": 17
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 18,
                    "id": 18,
                    "text": "다",
                    "position": 98,
                    "type": "EF",
                    "begin": 18
                },
                {
                    "scode": "00",
                    "weight": 1,
                    "end": 19,
                    "id": 19,
                    "text": ".",
                    "position": 101,
                    "type": "SF",
                    "begin": 19
                }
            ],
            "chunk": [],
            "reserve_str": "",
            "SRL": [],
            "morp_eval": [
                {
                    "result": "인셉션/NNG+은/JX",
                    "word_id": 0,
                    "m_end": 1,
                    "id": 0,
                    "target": "인셉션은",
                    "m_begin": 0
                },
                {
                    "result": "크리스토퍼/NNG",
                    "word_id": 1,
                    "m_end": 2,
                    "id": 1,
                    "target": "크리스토퍼",
                    "m_begin": 2
                },
                {
                    "result": "놀런/NNG+이/JKS",
                    "word_id": 2,
                    "m_end": 4,
                    "id": 2,
                    "target": "놀런이",
                    "m_begin": 3
                },
                {
                    "result": "제작/NNG+을/JKO",
                    "word_id": 3,
                    "m_end": 6,
                    "id": 3,
                    "target": "제작을",
                    "m_begin": 5
                },
                {
                    "result": "맡/VV+은/ETM",
                    "word_id": 4,
                    "m_end": 8,
                    "id": 4,
                    "target": "맡은",
                    "m_begin": 7
                },
                {
                    "result": "'/SS+꿈/NNG",
                    "word_id": 5,
                    "m_end": 10,
                    "id": 5,
                    "target": "'꿈",
                    "m_begin": 9
                },
                {
                    "result": "도둑/NNG+'/SS",
                    "word_id": 6,
                    "m_end": 12,
                    "id": 6,
                    "target": "도둑'",
                    "m_begin": 11
                },
                {
                    "result": "주제/NNG+의/JKG",
                    "word_id": 7,
                    "m_end": 14,
                    "id": 7,
                    "target": "주제의",
                    "m_begin": 13
                },
                {
                    "result": "스릴러/NNG",
                    "word_id": 8,
                    "m_end": 15,
                    "id": 8,
                    "target": "스릴러",
                    "m_begin": 15
                },
                {
                    "result": "영화/NNG+이/VCP+다/EF+./SF",
                    "word_id": 9,
                    "m_end": 19,
                    "id": 9,
                    "target": "영화이다.",
                    "m_begin": 16
                }
            ],
            "SA": [],
            "relation": [],
            "ELU": {
                "entities": [
                    {
                        "indirect": 0,
                        "confidence": 0.9690448100859954,
                        "link": 3,
                        "end_offset": 3,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://dbpedia.org/ontology/Film",
                            "http://dbpedia.org/ontology/Wikidata:Q11424",
                            "http://dbpedia.org/ontology/Work",
                            "http://schema.org/CreativeWork",
                            "http://schema.org/Movie",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#InformationEntity",
                            "http://www.wikidata.org/entity/Q386724"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/인셉션",
                        "relation": 2,
                        "score": 1.462397997898956,
                        "en_entity": "Inception",
                        "text": "인셉션",
                        "start_offset": 0,
                        "id": 325444
                    },
                    {
                        "indirect": 0,
                        "confidence": 0.9760981533662965,
                        "link": 0,
                        "end_offset": 13,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://wikidata.dbpedia.org/resource/Q5",
                            "http://xmlns.com/foaf/0.1/Person",
                            "http://dbpedia.org/ontology/Actor",
                            "http://dbpedia.org/ontology/Agent",
                            "http://dbpedia.org/ontology/Artist",
                            "http://dbpedia.org/ontology/Person",
                            "http://schema.org/Person",
                            "http://wikidata.dbpedia.org/resource/Q215627",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson",
                            "http://www.wikidata.org/entity/Q483501",
                            "http://www.wikidata.org/entity/Q5",
                            "http://www.wikidata.org/entity/Q33999",
                            "http://www.wikidata.org/entity/Q215627"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/크리스토퍼_놀런",
                        "relation": 0,
                        "score": 1.8750612633917,
                        "en_entity": "Christopher_Nolan",
                        "text": "크리스토퍼놀런",
                        "start_offset": 5,
                        "id": 325445
                    }
                ],
                "d_entities": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 39,
                        "text": "스릴러 영화",
                        "start_offset": 33,
                        "source": "DE",
                        "type": "FD_ART",
                        "uri": "",
                        "relation": 0
                    }
                ],
                "merge": [
                    {
                        "score": 1.462397997898956,
                        "indirect": 0,
                        "confidence": 0.9690448100859954,
                        "link": 3,
                        "end_offset": 3,
                        "text": "인셉션",
                        "start_offset": 0,
                        "id": 325444,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://dbpedia.org/ontology/Film",
                            "http://dbpedia.org/ontology/Wikidata:Q11424",
                            "http://dbpedia.org/ontology/Work",
                            "http://schema.org/CreativeWork",
                            "http://schema.org/Movie",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#InformationEntity",
                            "http://www.wikidata.org/entity/Q386724"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/인셉션",
                        "relation": 2
                    },
                    {
                        "score": 1.8750612633917,
                        "indirect": 0,
                        "confidence": 0.9760981533662965,
                        "link": 0,
                        "end_offset": 13,
                        "text": "크리스토퍼놀런",
                        "start_offset": 5,
                        "id": 325445,
                        "source": "ELU",
                        "type": [
                            "http://www.w3.org/2002/07/owl#Thing",
                            "http://wikidata.dbpedia.org/resource/Q5",
                            "http://xmlns.com/foaf/0.1/Person",
                            "http://dbpedia.org/ontology/Actor",
                            "http://dbpedia.org/ontology/Agent",
                            "http://dbpedia.org/ontology/Artist",
                            "http://dbpedia.org/ontology/Person",
                            "http://schema.org/Person",
                            "http://wikidata.dbpedia.org/resource/Q215627",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                            "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson",
                            "http://www.wikidata.org/entity/Q483501",
                            "http://www.wikidata.org/entity/Q5",
                            "http://www.wikidata.org/entity/Q33999",
                            "http://www.wikidata.org/entity/Q215627"
                        ],
                        "uri": "http://ko.dbpedia.org/resource/크리스토퍼_놀런",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 39,
                        "text": "스릴러 영화",
                        "start_offset": 33,
                        "source": "DE",
                        "type": "FD_ART",
                        "uri": "",
                        "relation": 0
                    }
                ]
            },
            "morp": [
                {
                    "lemma": "인셉션",
                    "weight": 0.6,
                    "id": 0,
                    "position": 0,
                    "type": "NNP"
                },
                {
                    "lemma": "은",
                    "weight": 0.0520511,
                    "id": 1,
                    "position": 9,
                    "type": "JX"
                },
                {
                    "lemma": "크리스토퍼",
                    "weight": 0.9,
                    "id": 2,
                    "position": 13,
                    "type": "NNP"
                },
                {
                    "lemma": "놀런",
                    "weight": 0.6,
                    "id": 3,
                    "position": 29,
                    "type": "NNP"
                },
                {
                    "lemma": "이",
                    "weight": 0.0234517,
                    "id": 4,
                    "position": 35,
                    "type": "JKS"
                },
                {
                    "lemma": "제작",
                    "weight": 0.9,
                    "id": 5,
                    "position": 39,
                    "type": "NNG"
                },
                {
                    "lemma": "을",
                    "weight": 0.129611,
                    "id": 6,
                    "position": 45,
                    "type": "JKO"
                },
                {
                    "lemma": "맡",
                    "weight": 0.77645,
                    "id": 7,
                    "position": 49,
                    "type": "VV"
                },
                {
                    "lemma": "은",
                    "weight": 0.109632,
                    "id": 8,
                    "position": 52,
                    "type": "ETM"
                },
                {
                    "lemma": "'",
                    "weight": 1,
                    "id": 9,
                    "position": 56,
                    "type": "SS"
                },
                {
                    "lemma": "꿈",
                    "weight": 0.199806,
                    "id": 10,
                    "position": 57,
                    "type": "NNG"
                },
                {
                    "lemma": "도둑",
                    "weight": 0.9,
                    "id": 11,
                    "position": 61,
                    "type": "NNG"
                },
                {
                    "lemma": "'",
                    "weight": 1,
                    "id": 12,
                    "position": 67,
                    "type": "SS"
                },
                {
                    "lemma": "주제",
                    "weight": 0.9,
                    "id": 13,
                    "position": 69,
                    "type": "NNG"
                },
                {
                    "lemma": "의",
                    "weight": 0.0694213,
                    "id": 14,
                    "position": 75,
                    "type": "JKG"
                },
                {
                    "lemma": "스릴러",
                    "weight": 0.9,
                    "id": 15,
                    "position": 79,
                    "type": "NNG"
                },
                {
                    "lemma": "영화",
                    "weight": 0.183363,
                    "id": 16,
                    "position": 89,
                    "type": "NNG"
                },
                {
                    "lemma": "이",
                    "weight": 0.0177525,
                    "id": 17,
                    "position": 95,
                    "type": "VCP"
                },
                {
                    "lemma": "다",
                    "weight": 0.353579,
                    "id": 18,
                    "position": 98,
                    "type": "EF"
                },
                {
                    "lemma": ".",
                    "weight": 1,
                    "id": 19,
                    "position": 101,
                    "type": "SF"
                }
            ],
            "NE": [
                {
                    "weight": 0.189904,
                    "end": 0,
                    "id": 0,
                    "text": "인셉션",
                    "type": "OGG_ECONOMY",
                    "begin": 0,
                    "common_noun": 0
                },
                {
                    "weight": 0.282557,
                    "end": 3,
                    "id": 1,
                    "text": "크리스토퍼 놀런",
                    "type": "PS_NAME",
                    "begin": 2,
                    "common_noun": 0
                },
                {
                    "weight": 0.515993,
                    "end": 16,
                    "id": 2,
                    "text": "스릴러 영화",
                    "type": "FD_ART",
                    "begin": 15,
                    "common_noun": 0
                }
            ],
            "id": 0,
            "text": "인셉션은 크리스토퍼 놀런이 제작을 맡은 '꿈 도둑' 주제의 스릴러 영화이다.",
            "word": [
                {
                    "end": 1,
                    "id": 0,
                    "text": "인셉션은",
                    "type": "",
                    "begin": 0
                },
                {
                    "end": 2,
                    "id": 1,
                    "text": "크리스토퍼",
                    "type": "",
                    "begin": 2
                },
                {
                    "end": 4,
                    "id": 2,
                    "text": "놀런이",
                    "type": "",
                    "begin": 3
                },
                {
                    "end": 6,
                    "id": 3,
                    "text": "제작을",
                    "type": "",
                    "begin": 5
                },
                {
                    "end": 8,
                    "id": 4,
                    "text": "맡은",
                    "type": "",
                    "begin": 7
                },
                {
                    "end": 10,
                    "id": 5,
                    "text": "'꿈",
                    "type": "",
                    "begin": 9
                },
                {
                    "end": 12,
                    "id": 6,
                    "text": "도둑'",
                    "type": "",
                    "begin": 11
                },
                {
                    "end": 14,
                    "id": 7,
                    "text": "주제의",
                    "type": "",
                    "begin": 13
                },
                {
                    "end": 15,
                    "id": 8,
                    "text": "스릴러",
                    "type": "",
                    "begin": 15
                },
                {
                    "end": 19,
                    "id": 9,
                    "text": "영화이다.",
                    "type": "",
                    "begin": 16
                }
            ],
            "mod_NE": [
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 3,
                    "text": "인셉션",
                    "start_offset": 0,
                    "type": "OGG_ECONOMY",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 13,
                    "text": "크리스토퍼 놀런",
                    "start_offset": 5,
                    "type": "PS_NAME",
                    "relation": 0
                },
                {
                    "score": 0,
                    "indirect": 0,
                    "confidence": 0,
                    "link": 0,
                    "end_offset": 39,
                    "text": "스릴러 영화",
                    "start_offset": 33,
                    "type": "FD_ART",
                    "relation": 0
                }
            ]
        }
    ]
};
var el_list = [el_1, el_2, el_3, el_4, el_5];

var pl_1 = {
    "triples": [
        {
            "p": "nationality",
            "s": "어니스트_헤밍웨이/Ernest_Hemingway",
            "stc": null,
            "src": "B2K+",
            "sco": 1,
            "o": "미국/United_States"
        },
        {
            "p": "notableWork",
            "s": "어니스트_헤밍웨이/Ernest_Hemingway",
            "stc": null,
            "src": "B2K+",
            "sco": 1,
            "o": "무기여_잘_있거라/A_Farewell_to_Arms"
        },
        {
            "p": "notableWork",
            "s": "어니스트_헤밍웨이/Ernest_Hemingway",
            "stc": null,
            "src": "B2K+",
            "sco": 1,
            "o": "노인과_바다/The_Old_Man_and_the_Sea"
        },
        {
            "p": "award",
            "s": "어니스트_헤밍웨이/Ernest_Hemingway",
            "stc": null,
            "src": "B2K+",
            "sco": 1,
            "o": "노벨_문학상/Nobel_Prize_in_Literature"
        },
        {
            "p": "notableWork",
            "s": "어니스트_헤밍웨이/Ernest_Hemingway",
            "stc": null,
            "src": "B2K+",
            "sco": 1,
            "o": "누구를_위하여_종은_울리나/For_Whom_the_Bell_Tolls"
        },
        {
            "p": "spouse",
            "s": "마사_겔혼/Martha_Gellhorn",
            "stc": null,
            "src": "CNN",
            "sco": 0.8975004553794861,
            "o": "어니스트_헤밍웨이/Ernest_Hemingway"
        },
        {
            "p": "birthPlace",
            "s": "어니스트_헤밍웨이/Ernest_Hemingway",
            "stc": null,
            "src": "CNN",
            "sco": 0.8922690749168396,
            "o": "일리노이_주/Illinois"
        },
        {
            "p": "spouse",
            "s": "어니스트_헤밍웨이/Ernest_Hemingway",
            "stc": null,
            "src": "CNN",
            "sco": 0.7955827116966248,
            "o": "마사_겔혼/Martha_Gellhorn"
        },
        {
            "p": "occupation",
            "s": "어니스트_헤밍웨이/Ernest_Hemingway",
            "stc": null,
            "src": "Lattice",
            "sco": 0.3776,
            "o": "http://mrlab.kaist.ac.kr/resource/소설가"
        },
        {
            "p": "birthPlace",
            "s": "어니스트_헤밍웨이/Ernest_Hemingway",
            "stc": null,
            "src": "CNN",
            "sco": 0.37500524520874023,
            "o": "미국/United_States"
        },
        {
            "p": "occupation",
            "s": "어니스트_헤밍웨이/Ernest_Hemingway",
            "stc": null,
            "src": "Lattice",
            "sco": 0.26880000000000004,
            "o": "http://mrlab.kaist.ac.kr/resource/저널리스트"
        },
        {
            "p": "birthPlace",
            "s": "어니스트_헤밍웨이/Ernest_Hemingway",
            "stc": null,
            "src": "Markov",
            "sco": 0.228027,
            "o": "일리노이_주/Illinois"
        },
        {
            "p": "country",
            "s": "어니스트_헤밍웨이/Ernest_Hemingway",
            "stc": null,
            "src": "Markov",
            "sco": 0.20162000000000002,
            "o": "미국/United_States"
        },
        {
            "p": "deathPlace",
            "s": "어니스트_헤밍웨이/Ernest_Hemingway",
            "stc": null,
            "src": "B2K+",
            "sco": 0.16691538796,
            "o": "아이다호_주/Idaho"
        },
        {
            "p": "birthPlace",
            "s": "어니스트_헤밍웨이/Ernest_Hemingway",
            "stc": null,
            "src": "B2K+",
            "sco": 0.00742796661788,
            "o": "일리노이_주/Illinois"
        }
    ]
};
var pl_2 = {
    "triples": [
        {
            "p": "award",
            "s": "이시구로_가즈오/Kazuo_Ishiguro",
            "stc": null,
            "src": "B2K+",
            "sco": 1,
            "o": "맨_부커상"
        },
        {
            "p": "birthPlace",
            "s": "이시구로_가즈오/Kazuo_Ishiguro",
            "stc": null,
            "src": "CNN",
            "sco": 0.7295045852661133,
            "o": "일본/Japan"
        },
        {
            "p": "education",
            "s": "이시구로_가즈오/Kazuo_Ishiguro",
            "stc": null,
            "src": "CNN",
            "sco": 0.5996313095092773,
            "o": "석사/Master's_degree"
        },
        {
            "p": "birthPlace",
            "s": "이시구로_가즈오/Kazuo_Ishiguro",
            "stc": null,
            "src": "Markov",
            "sco": 0.571993,
            "o": "일본/Japan"
        },
        {
            "p": "education",
            "s": "이시구로_가즈오/Kazuo_Ishiguro",
            "stc": null,
            "src": "CNN",
            "sco": 0.5695758438110352,
            "o": "이스트앵글리아_대학교/University_of_East_Anglia"
        },
        {
            "p": "award",
            "s": "이시구로_가즈오/Kazuo_Ishiguro",
            "stc": null,
            "src": "Lattice",
            "sco": 0.5519999999999999,
            "o": "http://mrlab.kaist.ac.kr/resource/위니프레드_홀트비_기념상"
        },
        {
            "p": "award",
            "s": "이시구로_가즈오/Kazuo_Ishiguro",
            "stc": null,
            "src": "Lattice",
            "sco": 0.42,
            "o": "맨_부커상"
        },
        {
            "p": "award",
            "s": "이시구로_가즈오/Kazuo_Ishiguro",
            "stc": null,
            "src": "CNN",
            "sco": 0.2549822568893433,
            "o": "맨_부커상"
        },
        {
            "p": "position",
            "s": "이시구로_가즈오/Kazuo_Ishiguro",
            "stc": null,
            "src": "Markov",
            "sco": 0.2540864,
            "o": "석사/Master's_degree"
        },
        {
            "p": "award",
            "s": "이시구로_가즈오/Kazuo_Ishiguro",
            "stc": null,
            "src": "B2K+",
            "sco": 0.118904763485,
            "o": "노벨_문학상/Nobel_Prize_in_Literature"
        },
        {
            "p": "nationality",
            "s": "이시구로_가즈오/Kazuo_Ishiguro",
            "stc": null,
            "src": "B2K+",
            "sco": 0.0459564197567,
            "o": "일본/Japan"
        }
    ]
};
var pl_3 = {
    "triples": [
        {
            "p": "largestCity",
            "s": "캘리포니아_주/California",
            "stc": null,
            "src": "CNN",
            "sco": 0.9971961975097656,
            "o": "버뱅크_(캘리포니아_주)/Burbank,_California"
        },
        {
            "p": "location",
            "s": "월트_디즈니_컴퍼니/The_Walt_Disney_Company",
            "stc": null,
            "src": "B2K+",
            "sco": 0.8,
            "o": "미국/United_States"
        },
        {
            "p": "foundedBy",
            "s": "월트_디즈니_컴퍼니/The_Walt_Disney_Company",
            "stc": null,
            "src": "B2K+",
            "sco": 0.8,
            "o": "월트_디즈니/Walt_Disney"
        },
        {
            "p": "location",
            "s": "월트_디즈니_컴퍼니/The_Walt_Disney_Company",
            "stc": null,
            "src": "B2K+",
            "sco": 0.7992823686008,
            "o": "버뱅크_(캘리포니아_주)/Burbank,_California"
        },
        {
            "p": "location",
            "s": "월트_디즈니_컴퍼니/The_Walt_Disney_Company",
            "stc": null,
            "src": "B2K+",
            "sco": 0.7374899301416,
            "o": "캘리포니아_주/California"
        },
        {
            "p": "location",
            "s": "월트_디즈니_스튜디오_모션_픽처스",
            "stc": null,
            "src": "CNN",
            "sco": 0.6158793640136719,
            "o": "캘리포니아_주/California"
        },
        {
            "p": "location",
            "s": "월트_디즈니_컴퍼니/The_Walt_Disney_Company",
            "stc": null,
            "src": "Lattice",
            "sco": 0.544,
            "o": "미국/United_States"
        },
        {
            "p": "location",
            "s": "위치_(잡지)",
            "stc": null,
            "src": "CNN",
            "sco": 0.48630023193359384,
            "o": "캘리포니아_주/California"
        },
        {
            "p": "country",
            "s": "월트_디즈니_컴퍼니/The_Walt_Disney_Company",
            "stc": null,
            "src": "CNN",
            "sco": 0.44930515289306644,
            "o": "미국/United_States"
        },
        {
            "p": "region",
            "s": "월트_디즈니_컴퍼니/The_Walt_Disney_Company",
            "stc": null,
            "src": "Lattice",
            "sco": 0.44800000000000006,
            "o": "미국/United_States"
        },
        {
            "p": "location",
            "s": "월트_디즈니_스튜디오_모션_픽처스",
            "stc": null,
            "src": "CNN",
            "sco": 0.4395006179809571,
            "o": "버뱅크_(캘리포니아_주)/Burbank,_California"
        },
        {
            "p": "location",
            "s": "http://mrlab.kaist.ac.kr/resource/할리우드",
            "stc": null,
            "src": "Lattice",
            "sco": 0.39680000000000004,
            "o": "미국/United_States"
        },
        {
            "p": "industry",
            "s": "월트_디즈니_컴퍼니/The_Walt_Disney_Company",
            "stc": null,
            "src": "CNN",
            "sco": 0.3541475341796876,
            "o": "스튜디오/Studio"
        },
        {
            "p": "foundedBy",
            "s": "월트_디즈니/Walt_Disney",
            "stc": null,
            "src": "CNN",
            "sco": 0.3483807861328126,
            "o": "로이_디즈니/Roy_Disney"
        },
        {
            "p": "location",
            "s": "버뱅크_(캘리포니아_주)/Burbank,_California",
            "stc": null,
            "src": "CNN",
            "sco": 0.3400199890136719,
            "o": "캘리포니아_주/California"
        },
        {
            "p": "country",
            "s": "스튜디오/Studio",
            "stc": null,
            "src": "CNN",
            "sco": 0.31277307128906257,
            "o": "미국/United_States"
        },
        {
            "p": "location",
            "s": "미국/United_States",
            "stc": null,
            "src": "Lattice",
            "sco": 0.29440000000000005,
            "o": "http://mrlab.kaist.ac.kr/resource/할리우드"
        },
        {
            "p": "location",
            "s": "월트_디즈니_컴퍼니/The_Walt_Disney_Company",
            "stc": null,
            "src": "Lattice",
            "sco": 0.27520000000000006,
            "o": "http://mrlab.kaist.ac.kr/resource/할리우드"
        },
        {
            "p": "country",
            "s": "미국/United_States",
            "stc": null,
            "src": "CNN",
            "sco": 0.24813750000000004,
            "o": "스튜디오/Studio"
        },
        {
            "p": "location",
            "s": "월트_디즈니_컴퍼니/The_Walt_Disney_Company",
            "stc": null,
            "src": "Markov",
            "sco": 0.22144960000000002,
            "o": "스튜디오/Studio"
        },
        {
            "p": "location",
            "s": "위치_(잡지)",
            "stc": null,
            "src": "CNN",
            "sco": 0.2078796081542969,
            "o": "버뱅크_(캘리포니아_주)/Burbank,_California"
        },
        {
            "p": "parentCompany",
            "s": "스튜디오/Studio",
            "stc": null,
            "src": "CNN",
            "sco": 0.18916546630859377,
            "o": "월트_디즈니_컴퍼니/The_Walt_Disney_Company"
        },
        {
            "p": "foundedBy",
            "s": "로이_디즈니/Roy_Disney",
            "stc": null,
            "src": "CNN",
            "sco": 0.17450457763671878,
            "o": "월트_디즈니/Walt_Disney"
        },
        {
            "p": "parentCompany",
            "s": "월트_디즈니_픽처스/Walt_Disney_Pictures",
            "stc": null,
            "src": "B2K+",
            "sco": 0.00005557916665248,
            "o": "마블_엔터테인먼트/Marvel_Entertainment"
        }
    ]
};
var pl_4 = {
    "triples": [
        {
            "p": "birthPlace",
            "s": "블라디미르_푸틴/Vladimir_Putin",
            "stc": null,
            "src": "B2K+",
            "sco": 1,
            "o": "러시아/Russia"
        },
        {
            "p": "leaderName",
            "s": "러시아/Russia",
            "stc": null,
            "src": "CNN",
            "sco": 0.8862420320510864,
            "o": "블라디미르_푸틴/Vladimir_Putin"
        },
        {
            "p": "country",
            "s": "블라디미르_푸틴/Vladimir_Putin",
            "stc": null,
            "src": "B2K+",
            "sco": 0.8,
            "o": "러시아/Russia"
        },
        {
            "p": "nationality",
            "s": "블라디미르_푸틴/Vladimir_Putin",
            "stc": null,
            "src": "Lattice",
            "sco": 0.47,
            "o": "러시아/Russia"
        },
        {
            "p": "location",
            "s": "http://mrlab.kaist.ac.kr/resource/대통령_선거",
            "stc": null,
            "src": "Lattice",
            "sco": 0.42880000000000007,
            "o": "러시아/Russia"
        },
        {
            "p": "country",
            "s": "블라디미르_푸틴/Vladimir_Putin",
            "stc": null,
            "src": "CNN",
            "sco": 0.42494689941406255,
            "o": "러시아/Russia"
        },
        {
            "p": "country",
            "s": "블라디미르_푸틴/Vladimir_Putin",
            "stc": null,
            "src": "CNN",
            "sco": 0.42494689941406255,
            "o": "러시아/Russia"
        },
        {
            "p": "location",
            "s": "러시아/Russia",
            "stc": null,
            "src": "Lattice",
            "sco": 0.42400000000000004,
            "o": "러시아/Russia"
        },
        {
            "p": "country",
            "s": "블라디미르_푸틴/Vladimir_Putin",
            "stc": null,
            "src": "Lattice",
            "sco": 0.42400000000000004,
            "o": "러시아/Russia"
        },
        {
            "p": "location",
            "s": "러시아/Russia",
            "stc": null,
            "src": "Lattice",
            "sco": 0.4,
            "o": "러시아/Russia"
        },
        {
            "p": "region",
            "s": "http://mrlab.kaist.ac.kr/resource/대통령_선거",
            "stc": null,
            "src": "Lattice",
            "sco": 0.3904,
            "o": "러시아/Russia"
        },
        {
            "p": "location",
            "s": "http://mrlab.kaist.ac.kr/resource/대통령_선거",
            "stc": null,
            "src": "Lattice",
            "sco": 0.384,
            "o": "러시아/Russia"
        },
        {
            "p": "country",
            "s": "블라디미르_푸틴/Vladimir_Putin",
            "stc": null,
            "src": "CNN",
            "sco": 0.3548773574829102,
            "o": "러시아/Russia"
        },
        {
            "p": "region",
            "s": "http://mrlab.kaist.ac.kr/resource/대통령_선거",
            "stc": null,
            "src": "Lattice",
            "sco": 0.31360000000000005,
            "o": "러시아/Russia"
        }
    ]
};
var pl_5 = {
    "triples": [
        {
            "p": "director",
            "s": "인셉션/Inception",
            "stc": null,
            "src": "B2K+",
            "sco": 1,
            "o": "크리스토퍼_놀런/Christopher_Nolan"
        },
        {
            "p": "producer",
            "s": "인셉션/Inception",
            "stc": null,
            "src": "CNN",
            "sco": 0.49844226241111755,
            "o": "크리스토퍼_놀런/Christopher_Nolan"
        }
    ]
};
var pl_list = [pl_1, pl_2, pl_3, pl_4, pl_5];

var output_1 = {
    "EL": {
        "sentence": [
            {
                "phrase_dependency": [
                    {
                        "weight": 0,
                        "end": 1,
                        "key_begin": 0,
                        "id": 0,
                        "label": "NP_SBJ",
                        "text": "어니스트 헤밍웨이는",
                        "head_phrase": 1,
                        "begin": 0,
                        "sub_phrase": [],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 3,
                        "key_begin": 2,
                        "id": 1,
                        "label": "S",
                        "text": "P#0@SBJ는 미국의 소설가이자",
                        "head_phrase": 2,
                        "begin": 0,
                        "sub_phrase": [
                            0
                        ],
                        "element": [
                            {
                                "end": 6,
                                "ne_type": "",
                                "text": "미국의 소설가",
                                "label": "NP",
                                "begin": 3
                            },
                            {
                                "end": 8,
                                "ne_type": "",
                                "text": "이자",
                                "label": "VP",
                                "begin": 7
                            }
                        ]
                    },
                    {
                        "weight": 0,
                        "end": 4,
                        "key_begin": 4,
                        "id": 2,
                        "label": "S",
                        "text": "S#1@S자 저널리스트이다.",
                        "head_phrase": -1,
                        "begin": 0,
                        "sub_phrase": [
                            1
                        ],
                        "element": [
                            {
                                "end": 9,
                                "ne_type": "CV_OCCUPATION",
                                "text": "저널리스트",
                                "label": "NP",
                                "begin": 9
                            },
                            {
                                "end": 12,
                                "ne_type": "",
                                "text": "이다.",
                                "label": "VP",
                                "begin": 10
                            }
                        ]
                    }
                ],
                "dependency": [
                    {
                        "head": 1,
                        "mod": [],
                        "weight": 0.701795,
                        "id": 0,
                        "text": "어니스트",
                        "label": "NP"
                    },
                    {
                        "head": 3,
                        "mod": [
                            0
                        ],
                        "weight": 0.698229,
                        "id": 1,
                        "text": "헤밍웨이는",
                        "label": "NP_SBJ"
                    },
                    {
                        "head": 3,
                        "mod": [],
                        "weight": 0.820881,
                        "id": 2,
                        "text": "미국의",
                        "label": "NP_MOD"
                    },
                    {
                        "head": 4,
                        "mod": [
                            1,
                            2
                        ],
                        "weight": 0.697065,
                        "id": 3,
                        "text": "소설가이자",
                        "label": "VNP"
                    },
                    {
                        "head": -1,
                        "mod": [
                            3
                        ],
                        "weight": 0.22684,
                        "id": 4,
                        "text": "저널리스트이다.",
                        "label": "VNP"
                    }
                ],
                "ZA": [],
                "WSD": [
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 0,
                        "id": 0,
                        "text": "어니스트",
                        "position": 0,
                        "type": "NNP",
                        "begin": 0
                    },
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 1,
                        "id": 1,
                        "text": "헤밍웨이",
                        "position": 13,
                        "type": "NNP",
                        "begin": 1
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 2,
                        "id": 2,
                        "text": "는",
                        "position": 25,
                        "type": "JX",
                        "begin": 2
                    },
                    {
                        "scode": "03",
                        "weight": 4.4,
                        "end": 3,
                        "id": 3,
                        "text": "미국",
                        "position": 29,
                        "type": "NNP",
                        "begin": 3
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 4,
                        "id": 4,
                        "text": "의",
                        "position": 35,
                        "type": "JKG",
                        "begin": 4
                    },
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 6,
                        "id": 5,
                        "text": "소설가",
                        "position": 39,
                        "type": "NNG",
                        "begin": 5
                    },
                    {
                        "scode": "01",
                        "weight": 1,
                        "end": 7,
                        "id": 6,
                        "text": "이",
                        "position": 48,
                        "type": "VCP",
                        "begin": 7
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 8,
                        "id": 7,
                        "text": "자",
                        "position": 51,
                        "type": "EC",
                        "begin": 8
                    },
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 9,
                        "id": 8,
                        "text": "저널리스트",
                        "position": 55,
                        "type": "NNG",
                        "begin": 9
                    },
                    {
                        "scode": "01",
                        "weight": 1,
                        "end": 10,
                        "id": 9,
                        "text": "이",
                        "position": 70,
                        "type": "VCP",
                        "begin": 10
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 11,
                        "id": 10,
                        "text": "다",
                        "position": 73,
                        "type": "EF",
                        "begin": 11
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 12,
                        "id": 11,
                        "text": ".",
                        "position": 76,
                        "type": "SF",
                        "begin": 12
                    }
                ],
                "chunk": [],
                "reserve_str": "",
                "SRL": [],
                "morp_eval": [
                    {
                        "result": "어니스트/NNG",
                        "word_id": 0,
                        "m_end": 0,
                        "id": 0,
                        "target": "어니스트",
                        "m_begin": 0
                    },
                    {
                        "result": "헤밍웨이/NNG+는/JX",
                        "word_id": 1,
                        "m_end": 2,
                        "id": 1,
                        "target": "헤밍웨이는",
                        "m_begin": 1
                    },
                    {
                        "result": "미국/NNG+의/JKG",
                        "word_id": 2,
                        "m_end": 4,
                        "id": 2,
                        "target": "미국의",
                        "m_begin": 3
                    },
                    {
                        "result": "소설가/NNG+이/VCP+자/EC",
                        "word_id": 3,
                        "m_end": 8,
                        "id": 3,
                        "target": "소설가이자",
                        "m_begin": 5
                    },
                    {
                        "result": "저널리스트/NNG+이/VCP+다/EF+./SF",
                        "word_id": 4,
                        "m_end": 12,
                        "id": 4,
                        "target": "저널리스트이다.",
                        "m_begin": 9
                    }
                ],
                "SA": [],
                "relation": [],
                "ELU": {
                    "entities": [
                        {
                            "indirect": 0,
                            "confidence": 0.9908202478286774,
                            "link": 31,
                            "end_offset": 9,
                            "source": "ELU",
                            "type": [
                                "http://dbpedia.org/ontology/Agent",
                                "http://dbpedia.org/ontology/Person",
                                "http://wikidata.dbpedia.org/resource/Q215627",
                                "http://wikidata.dbpedia.org/resource/Q5",
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                                "http://xmlns.com/foaf/0.1/Person",
                                "http://www.wikidata.org/entity/Q36180",
                                "http://dbpedia.org/ontology/Writer",
                                "http://www.w3.org/2002/07/owl#Thing",
                                "http://www.wikidata.org/entity/Q215627",
                                "http://schema.org/Person",
                                "http://www.wikidata.org/entity/Q5",
                                "http://dbpedia.org/ontology/Artist",
                                "http://www.wikidata.org/entity/Q24229398",
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson"
                            ],
                            "uri": "http://ko.dbpedia.org/resource/어니스트_헤밍웨이",
                            "relation": 27,
                            "score": 1.8808135922807914,
                            "en_entity": "Ernest_Hemingway",
                            "text": "어니스트헤밍웨이",
                            "start_offset": 0,
                            "id": 2035
                        },
                        {
                            "indirect": 0,
                            "confidence": 1.031011676951652,
                            "link": 11,
                            "end_offset": 13,
                            "source": "ELU",
                            "type": [
                                "http://schema.org/Place",
                                "http://dbpedia.org/ontology/Wikidata:Q532",
                                "http://dbpedia.org/ontology/PopulatedPlace",
                                "http://dbpedia.org/ontology/Place",
                                "http://dbpedia.org/ontology/Country",
                                "http://www.ontologydesignpatterns.org/ont/d0.owl#Location",
                                "http://schema.org/Country"
                            ],
                            "uri": "http://ko.dbpedia.org/resource/미국",
                            "relation": 3,
                            "score": 4.473720477419829,
                            "en_entity": "United_States",
                            "text": "미국",
                            "start_offset": 11,
                            "id": 2037
                        },
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": "Novelist",
                            "link": 0,
                            "end_offset": 18,
                            "text": "소설가",
                            "start_offset": 15,
                            "source": "NER",
                            "type": "CV_OCCUPATION",
                            "uri": "http://ko.dbpedia.org/resource/소설가",
                            "relation": 0
                        },
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": "Journalist",
                            "link": 0,
                            "end_offset": 26,
                            "text": "저널리스트",
                            "start_offset": 21,
                            "source": "NER",
                            "type": "CV_OCCUPATION",
                            "uri": "http://ko.dbpedia.org/resource/저널리스트",
                            "relation": 0
                        }
                    ],
                    "d_entities": [],
                    "merge": [
                        {
                            "indirect": 0,
                            "confidence": 0.9908202478286774,
                            "link": 31,
                            "end_offset": 9,
                            "source": "ELU",
                            "type": [
                                "http://dbpedia.org/ontology/Agent",
                                "http://dbpedia.org/ontology/Person",
                                "http://wikidata.dbpedia.org/resource/Q215627",
                                "http://wikidata.dbpedia.org/resource/Q5",
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                                "http://xmlns.com/foaf/0.1/Person",
                                "http://www.wikidata.org/entity/Q36180",
                                "http://dbpedia.org/ontology/Writer",
                                "http://www.w3.org/2002/07/owl#Thing",
                                "http://www.wikidata.org/entity/Q215627",
                                "http://schema.org/Person",
                                "http://www.wikidata.org/entity/Q5",
                                "http://dbpedia.org/ontology/Artist",
                                "http://www.wikidata.org/entity/Q24229398",
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson"
                            ],
                            "uri": "http://ko.dbpedia.org/resource/어니스트_헤밍웨이",
                            "relation": 27,
                            "score": 1.8808135922807914,
                            "en_entity": "Ernest_Hemingway",
                            "text": "어니스트헤밍웨이",
                            "start_offset": 0,
                            "id": 2035
                        },
                        {
                            "indirect": 0,
                            "confidence": 1.031011676951652,
                            "link": 11,
                            "end_offset": 13,
                            "source": "ELU",
                            "type": [
                                "http://schema.org/Place",
                                "http://dbpedia.org/ontology/Wikidata:Q532",
                                "http://dbpedia.org/ontology/PopulatedPlace",
                                "http://dbpedia.org/ontology/Place",
                                "http://dbpedia.org/ontology/Country",
                                "http://www.ontologydesignpatterns.org/ont/d0.owl#Location",
                                "http://schema.org/Country"
                            ],
                            "uri": "http://ko.dbpedia.org/resource/미국",
                            "relation": 3,
                            "score": 4.473720477419829,
                            "en_entity": "United_States",
                            "text": "미국",
                            "start_offset": 11,
                            "id": 2037
                        },
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": "Novelist",
                            "link": 0,
                            "end_offset": 18,
                            "text": "소설가",
                            "start_offset": 15,
                            "source": "NER",
                            "type": "CV_OCCUPATION",
                            "uri": "http://ko.dbpedia.org/resource/소설가",
                            "relation": 0
                        },
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": "Journalist",
                            "link": 0,
                            "end_offset": 26,
                            "text": "저널리스트",
                            "start_offset": 21,
                            "source": "NER",
                            "type": "CV_OCCUPATION",
                            "uri": "http://ko.dbpedia.org/resource/저널리스트",
                            "relation": 0
                        }
                    ]
                },
                "morp": [
                    {
                        "lemma": "어니스트",
                        "weight": 0.5,
                        "id": 0,
                        "position": 0,
                        "type": "NNP"
                    },
                    {
                        "lemma": "헤밍웨이",
                        "weight": 0.9,
                        "id": 1,
                        "position": 13,
                        "type": "NNP"
                    },
                    {
                        "lemma": "는",
                        "weight": 0.0332677,
                        "id": 2,
                        "position": 25,
                        "type": "JX"
                    },
                    {
                        "lemma": "미국",
                        "weight": 0.0448659,
                        "id": 3,
                        "position": 29,
                        "type": "NNP"
                    },
                    {
                        "lemma": "의",
                        "weight": 0.0987295,
                        "id": 4,
                        "position": 35,
                        "type": "JKG"
                    },
                    {
                        "lemma": "소설",
                        "weight": 0.9,
                        "id": 5,
                        "position": 39,
                        "type": "NNG"
                    },
                    {
                        "lemma": "가",
                        "weight": 0.000115417,
                        "id": 6,
                        "position": 45,
                        "type": "XSN"
                    },
                    {
                        "lemma": "이",
                        "weight": 0.0165001,
                        "id": 7,
                        "position": 48,
                        "type": "VCP"
                    },
                    {
                        "lemma": "자",
                        "weight": 0.109096,
                        "id": 8,
                        "position": 51,
                        "type": "EC"
                    },
                    {
                        "lemma": "저널리스트",
                        "weight": 0.9,
                        "id": 9,
                        "position": 55,
                        "type": "NNG"
                    },
                    {
                        "lemma": "이",
                        "weight": 0.0177525,
                        "id": 10,
                        "position": 70,
                        "type": "VCP"
                    },
                    {
                        "lemma": "다",
                        "weight": 0.353579,
                        "id": 11,
                        "position": 73,
                        "type": "EF"
                    },
                    {
                        "lemma": ".",
                        "weight": 1,
                        "id": 12,
                        "position": 76,
                        "type": "SF"
                    }
                ],
                "tagged": "[어니스트_헤밍웨이] 는 [미국] 의 [소설가] 이자 [저널리스트] 이다.",
                "NE": [
                    {
                        "weight": 0.298913,
                        "end": 1,
                        "id": 0,
                        "text": "어니스트 헤밍웨이",
                        "type": "PS_NAME",
                        "begin": 0,
                        "common_noun": 0
                    },
                    {
                        "weight": 0.46713,
                        "end": 3,
                        "id": 1,
                        "text": "미국",
                        "type": "LCP_COUNTRY",
                        "begin": 3,
                        "common_noun": 0
                    },
                    {
                        "weight": 0.645945,
                        "end": 6,
                        "id": 2,
                        "text": "소설가",
                        "type": "CV_OCCUPATION",
                        "begin": 5,
                        "common_noun": 0
                    },
                    {
                        "weight": 0.420157,
                        "end": 9,
                        "id": 3,
                        "text": "저널리스트",
                        "type": "CV_OCCUPATION",
                        "begin": 9,
                        "common_noun": 0
                    }
                ],
                "id": 0,
                "text": "어니스트 헤밍웨이는 미국의 소설가이자 저널리스트이다.",
                "word": [
                    {
                        "end": 0,
                        "id": 0,
                        "text": "어니스트",
                        "type": "",
                        "begin": 0
                    },
                    {
                        "end": 2,
                        "id": 1,
                        "text": "헤밍웨이는",
                        "type": "",
                        "begin": 1
                    },
                    {
                        "end": 4,
                        "id": 2,
                        "text": "미국의",
                        "type": "",
                        "begin": 3
                    },
                    {
                        "end": 8,
                        "id": 3,
                        "text": "소설가이자",
                        "type": "",
                        "begin": 5
                    },
                    {
                        "end": 12,
                        "id": 4,
                        "text": "저널리스트이다.",
                        "type": "",
                        "begin": 9
                    }
                ],
                "mod_NE": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 9,
                        "text": "어니스트 헤밍웨이",
                        "start_offset": 0,
                        "type": "PS_NAME",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 13,
                        "text": "미국",
                        "start_offset": 11,
                        "type": "LCP_COUNTRY",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 18,
                        "text": "소설가",
                        "start_offset": 15,
                        "type": "CV_OCCUPATION",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 26,
                        "text": "저널리스트",
                        "start_offset": 21,
                        "type": "CV_OCCUPATION",
                        "relation": 0
                    }
                ]
            },
            {
                "phrase_dependency": [
                    {
                        "weight": 0,
                        "end": 0,
                        "key_begin": 0,
                        "id": 0,
                        "label": "NP_AJT",
                        "text": "1854년",
                        "head_phrase": 2,
                        "begin": 0,
                        "sub_phrase": [],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 2,
                        "key_begin": 1,
                        "id": 1,
                        "label": "NP_OBJ",
                        "text": "노벨 문학상을",
                        "head_phrase": 2,
                        "begin": 1,
                        "sub_phrase": [],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 3,
                        "key_begin": 3,
                        "id": 2,
                        "label": "VP",
                        "text": "P#0@AJT년 P#1@OBJ을 수상하였다.",
                        "head_phrase": -1,
                        "begin": 0,
                        "sub_phrase": [
                            0,
                            1
                        ],
                        "element": []
                    }
                ],
                "dependency": [
                    {
                        "head": 3,
                        "mod": [],
                        "weight": 0.630243,
                        "id": 0,
                        "text": "1854년",
                        "label": "NP_AJT"
                    },
                    {
                        "head": 2,
                        "mod": [],
                        "weight": 0.785137,
                        "id": 1,
                        "text": "노벨",
                        "label": "NP"
                    },
                    {
                        "head": 3,
                        "mod": [
                            1
                        ],
                        "weight": 0.837873,
                        "id": 2,
                        "text": "문학상을",
                        "label": "NP_OBJ"
                    },
                    {
                        "head": -1,
                        "mod": [
                            0,
                            2
                        ],
                        "weight": 0.359775,
                        "id": 3,
                        "text": "수상하였다.",
                        "label": "VP"
                    }
                ],
                "ZA": [],
                "WSD": [
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 0,
                        "id": 0,
                        "text": "1854",
                        "position": 78,
                        "type": "SN",
                        "begin": 0
                    },
                    {
                        "scode": "02",
                        "weight": 7.7,
                        "end": 1,
                        "id": 1,
                        "text": "년",
                        "position": 82,
                        "type": "NNB",
                        "begin": 1
                    },
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 2,
                        "id": 2,
                        "text": "노벨",
                        "position": 86,
                        "type": "NNP",
                        "begin": 2
                    },
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 4,
                        "id": 3,
                        "text": "문학상",
                        "position": 93,
                        "type": "NNG",
                        "begin": 3
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 5,
                        "id": 4,
                        "text": "을",
                        "position": 102,
                        "type": "JKO",
                        "begin": 5
                    },
                    {
                        "scode": "03",
                        "weight": 6.5,
                        "end": 7,
                        "id": 5,
                        "text": "수상하",
                        "position": 106,
                        "type": "VV",
                        "begin": 6
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 8,
                        "id": 6,
                        "text": "었",
                        "position": 115,
                        "type": "EP",
                        "begin": 8
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 9,
                        "id": 7,
                        "text": "다",
                        "position": 118,
                        "type": "EF",
                        "begin": 9
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 10,
                        "id": 8,
                        "text": ".",
                        "position": 121,
                        "type": "SF",
                        "begin": 10
                    }
                ],
                "chunk": [],
                "reserve_str": "",
                "SRL": [],
                "morp_eval": [
                    {
                        "result": "1854/SN+년/NNB",
                        "word_id": 0,
                        "m_end": 1,
                        "id": 0,
                        "target": "1854년",
                        "m_begin": 0
                    },
                    {
                        "result": "노벨/NNG",
                        "word_id": 1,
                        "m_end": 2,
                        "id": 1,
                        "target": "노벨",
                        "m_begin": 2
                    },
                    {
                        "result": "문학상/NNG+을/JKO",
                        "word_id": 2,
                        "m_end": 5,
                        "id": 2,
                        "target": "문학상을",
                        "m_begin": 3
                    },
                    {
                        "result": "수상하/VV+었/EP+다/EF+./SF",
                        "word_id": 3,
                        "m_end": 10,
                        "id": 3,
                        "target": "수상하였다.",
                        "m_begin": 6
                    }
                ],
                "SA": [],
                "relation": [],
                "ELU": {
                    "entities": [
                        {
                            "indirect": 0,
                            "confidence": 0.989471699688869,
                            "link": 6,
                            "end_offset": 12,
                            "source": "ELU",
                            "type": [
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Description",
                                "http://dbpedia.org/ontology/Award"
                            ],
                            "uri": "http://ko.dbpedia.org/resource/노벨_문학상",
                            "relation": 4,
                            "score": 2.423245873936808,
                            "en_entity": "Nobel_Prize_in_Literature",
                            "text": "노벨문학상",
                            "start_offset": 6,
                            "id": 2038
                        }
                    ],
                    "d_entities": [
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "link": 0,
                            "end_offset": 5,
                            "text": "1854년",
                            "start_offset": 0,
                            "source": "DE",
                            "type": "DT_YEAR",
                            "uri": "",
                            "relation": 0
                        }
                    ],
                    "merge": [
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": null,
                            "link": 0,
                            "end_offset": 5,
                            "text": "1854년",
                            "start_offset": 0,
                            "source": "DE",
                            "type": "DT_YEAR",
                            "uri": "",
                            "relation": 0
                        },
                        {
                            "indirect": 0,
                            "confidence": 0.989471699688869,
                            "link": 6,
                            "end_offset": 12,
                            "source": "ELU",
                            "type": [
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Description",
                                "http://dbpedia.org/ontology/Award"
                            ],
                            "uri": "http://ko.dbpedia.org/resource/노벨_문학상",
                            "relation": 4,
                            "score": 2.423245873936808,
                            "en_entity": "Nobel_Prize_in_Literature",
                            "text": "노벨문학상",
                            "start_offset": 6,
                            "id": 2038
                        }
                    ]
                },
                "morp": [
                    {
                        "lemma": "1854",
                        "weight": 1,
                        "id": 0,
                        "position": 78,
                        "type": "SN"
                    },
                    {
                        "lemma": "년",
                        "weight": 0.414343,
                        "id": 1,
                        "position": 82,
                        "type": "NNB"
                    },
                    {
                        "lemma": "노벨",
                        "weight": 0.9,
                        "id": 2,
                        "position": 86,
                        "type": "NNP"
                    },
                    {
                        "lemma": "문학",
                        "weight": 0.27891,
                        "id": 3,
                        "position": 93,
                        "type": "NNG"
                    },
                    {
                        "lemma": "상",
                        "weight": 0.0834075,
                        "id": 4,
                        "position": 99,
                        "type": "NNG"
                    },
                    {
                        "lemma": "을",
                        "weight": 0.129611,
                        "id": 5,
                        "position": 102,
                        "type": "JKO"
                    },
                    {
                        "lemma": "수상",
                        "weight": 0.9,
                        "id": 6,
                        "position": 106,
                        "type": "NNG"
                    },
                    {
                        "lemma": "하",
                        "weight": 0.0001,
                        "id": 7,
                        "position": 112,
                        "type": "XSV"
                    },
                    {
                        "lemma": "었",
                        "weight": 0.9,
                        "id": 8,
                        "position": 115,
                        "type": "EP"
                    },
                    {
                        "lemma": "다",
                        "weight": 0.640954,
                        "id": 9,
                        "position": 118,
                        "type": "EF"
                    },
                    {
                        "lemma": ".",
                        "weight": 1,
                        "id": 10,
                        "position": 121,
                        "type": "SF"
                    }
                ],
                "tagged": "1854년 [노벨_문학상] 을 수상하였다.",
                "NE": [
                    {
                        "weight": 0.818245,
                        "end": 1,
                        "id": 0,
                        "text": "1854년",
                        "type": "DT_YEAR",
                        "begin": 0,
                        "common_noun": 0
                    },
                    {
                        "weight": 0.966091,
                        "end": 4,
                        "id": 1,
                        "text": "노벨 문학상",
                        "type": "CV_PRIZE",
                        "begin": 2,
                        "common_noun": 0
                    }
                ],
                "id": 1,
                "text": " 1854년 노벨 문학상을 수상하였다.",
                "word": [
                    {
                        "end": 1,
                        "id": 0,
                        "text": "1854년",
                        "type": "",
                        "begin": 0
                    },
                    {
                        "end": 2,
                        "id": 1,
                        "text": "노벨",
                        "type": "",
                        "begin": 2
                    },
                    {
                        "end": 5,
                        "id": 2,
                        "text": "문학상을",
                        "type": "",
                        "begin": 3
                    },
                    {
                        "end": 10,
                        "id": 3,
                        "text": "수상하였다.",
                        "type": "",
                        "begin": 6
                    }
                ],
                "mod_NE": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 5,
                        "text": "1854년",
                        "start_offset": 0,
                        "type": "DT_YEAR",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 12,
                        "text": "노벨 문학상",
                        "start_offset": 6,
                        "type": "CV_PRIZE",
                        "relation": 0
                    }
                ]
            },
            {
                "phrase_dependency": [
                    {
                        "weight": 0,
                        "end": 0,
                        "key_begin": 0,
                        "id": 0,
                        "label": "NP_SBJ",
                        "text": "헤밍웨이는",
                        "head_phrase": 3,
                        "begin": 0,
                        "sub_phrase": [],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 3,
                        "key_begin": 1,
                        "id": 1,
                        "label": "NP_AJT",
                        "text": "1899년 7월 21일",
                        "head_phrase": 3,
                        "begin": 1,
                        "sub_phrase": [],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 4,
                        "key_begin": 4,
                        "id": 2,
                        "label": "NP_AJT",
                        "text": "일리노이주에서",
                        "head_phrase": 3,
                        "begin": 4,
                        "sub_phrase": [],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 5,
                        "key_begin": 5,
                        "id": 3,
                        "label": "S",
                        "text": "P#0@SBJ는 P#1@AJT일 P#2@AJT에서 태어났다.",
                        "head_phrase": -1,
                        "begin": 0,
                        "sub_phrase": [
                            0,
                            1,
                            2
                        ],
                        "element": []
                    }
                ],
                "dependency": [
                    {
                        "head": 5,
                        "mod": [],
                        "weight": 0.871891,
                        "id": 0,
                        "text": "헤밍웨이는",
                        "label": "NP_SBJ"
                    },
                    {
                        "head": 2,
                        "mod": [],
                        "weight": 0.639108,
                        "id": 1,
                        "text": "1899년",
                        "label": "NP"
                    },
                    {
                        "head": 3,
                        "mod": [
                            1
                        ],
                        "weight": 0.691294,
                        "id": 2,
                        "text": "7월",
                        "label": "NP"
                    },
                    {
                        "head": 5,
                        "mod": [
                            2
                        ],
                        "weight": 0.818033,
                        "id": 3,
                        "text": "21일",
                        "label": "NP_AJT"
                    },
                    {
                        "head": 5,
                        "mod": [],
                        "weight": 0.859442,
                        "id": 4,
                        "text": "일리노이주에서",
                        "label": "NP_AJT"
                    },
                    {
                        "head": -1,
                        "mod": [
                            0,
                            3,
                            4
                        ],
                        "weight": 0.233618,
                        "id": 5,
                        "text": "태어났다.",
                        "label": "VP"
                    }
                ],
                "ZA": [],
                "WSD": [
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 0,
                        "id": 0,
                        "text": "헤밍웨이",
                        "position": 123,
                        "type": "NNP",
                        "begin": 0
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 1,
                        "id": 1,
                        "text": "는",
                        "position": 135,
                        "type": "JX",
                        "begin": 1
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 2,
                        "id": 2,
                        "text": "1899",
                        "position": 139,
                        "type": "SN",
                        "begin": 2
                    },
                    {
                        "scode": "02",
                        "weight": 1.5,
                        "end": 3,
                        "id": 3,
                        "text": "년",
                        "position": 143,
                        "type": "NNB",
                        "begin": 3
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 4,
                        "id": 4,
                        "text": "7",
                        "position": 147,
                        "type": "SN",
                        "begin": 4
                    },
                    {
                        "scode": "02",
                        "weight": 1.5,
                        "end": 5,
                        "id": 5,
                        "text": "월",
                        "position": 148,
                        "type": "NNB",
                        "begin": 5
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 6,
                        "id": 6,
                        "text": "21",
                        "position": 152,
                        "type": "SN",
                        "begin": 6
                    },
                    {
                        "scode": "07",
                        "weight": 2.2,
                        "end": 7,
                        "id": 7,
                        "text": "일",
                        "position": 154,
                        "type": "NNB",
                        "begin": 7
                    },
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 8,
                        "id": 8,
                        "text": "일리노이주",
                        "position": 158,
                        "type": "NNP",
                        "begin": 8
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 9,
                        "id": 9,
                        "text": "에서",
                        "position": 173,
                        "type": "JKB",
                        "begin": 9
                    },
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 10,
                        "id": 10,
                        "text": "태어나",
                        "position": 180,
                        "type": "VV",
                        "begin": 10
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 11,
                        "id": 11,
                        "text": "았",
                        "position": 186,
                        "type": "EP",
                        "begin": 11
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 12,
                        "id": 12,
                        "text": "다",
                        "position": 189,
                        "type": "EF",
                        "begin": 12
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 13,
                        "id": 13,
                        "text": ".",
                        "position": 192,
                        "type": "SF",
                        "begin": 13
                    }
                ],
                "chunk": [],
                "reserve_str": "",
                "SRL": [],
                "morp_eval": [
                    {
                        "result": "헤밍웨이/NNG+는/JX",
                        "word_id": 0,
                        "m_end": 1,
                        "id": 0,
                        "target": "헤밍웨이는",
                        "m_begin": 0
                    },
                    {
                        "result": "1899/SN+년/NNB",
                        "word_id": 1,
                        "m_end": 3,
                        "id": 1,
                        "target": "1899년",
                        "m_begin": 2
                    },
                    {
                        "result": "7/SN+월/NNB",
                        "word_id": 2,
                        "m_end": 5,
                        "id": 2,
                        "target": "7월",
                        "m_begin": 4
                    },
                    {
                        "result": "21/SN+일/NNB",
                        "word_id": 3,
                        "m_end": 7,
                        "id": 3,
                        "target": "21일",
                        "m_begin": 6
                    },
                    {
                        "result": "일리노이주/NNG+에서/JKB",
                        "word_id": 4,
                        "m_end": 9,
                        "id": 4,
                        "target": "일리노이주에서",
                        "m_begin": 8
                    },
                    {
                        "result": "태어나/VV+었/EP+다/EF+./SF",
                        "word_id": 5,
                        "m_end": 13,
                        "id": 5,
                        "target": "태어났다.",
                        "m_begin": 10
                    }
                ],
                "SA": [],
                "relation": [],
                "ELU": {
                    "entities": [
                        {
                            "indirect": 0,
                            "confidence": 0.9908202478286774,
                            "link": 31,
                            "end_offset": 4,
                            "source": "ELU",
                            "type": [
                                "http://dbpedia.org/ontology/Agent",
                                "http://dbpedia.org/ontology/Person",
                                "http://wikidata.dbpedia.org/resource/Q215627",
                                "http://wikidata.dbpedia.org/resource/Q5",
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                                "http://xmlns.com/foaf/0.1/Person",
                                "http://www.wikidata.org/entity/Q36180",
                                "http://dbpedia.org/ontology/Writer",
                                "http://www.w3.org/2002/07/owl#Thing",
                                "http://www.wikidata.org/entity/Q215627",
                                "http://schema.org/Person",
                                "http://www.wikidata.org/entity/Q5",
                                "http://dbpedia.org/ontology/Artist",
                                "http://www.wikidata.org/entity/Q24229398",
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson"
                            ],
                            "uri": "http://ko.dbpedia.org/resource/어니스트_헤밍웨이",
                            "relation": 27,
                            "score": 1.8808135922807914,
                            "en_entity": "Ernest_Hemingway",
                            "text": "헤밍웨이",
                            "start_offset": 0,
                            "id": 2040
                        },
                        {
                            "indirect": 0,
                            "confidence": 1.0032778110028526,
                            "link": 3,
                            "end_offset": 24,
                            "source": "ELU",
                            "type": [
                                "http://dbpedia.org/ontology/Region",
                                "http://schema.org/Place",
                                "http://schema.org/AdministrativeArea",
                                "http://www.wikidata.org/entity/Q486972",
                                "http://www.w3.org/2002/07/owl#Thing",
                                "http://dbpedia.org/ontology/Wikidata:Q532",
                                "http://dbpedia.org/ontology/AdministrativeRegion",
                                "http://dbpedia.org/ontology/PopulatedPlace",
                                "http://dbpedia.org/ontology/Place",
                                "http://www.ontologydesignpatterns.org/ont/d0.owl#Location",
                                "http://www.wikidata.org/entity/Q3455524",
                                "http://dbpedia.org/ontology/Settlement"
                            ],
                            "uri": "http://ko.dbpedia.org/resource/일리노이_주",
                            "relation": 3,
                            "score": 3.1562461903973444,
                            "en_entity": "Illinois",
                            "text": "일리노이주",
                            "start_offset": 19,
                            "id": 2041
                        }
                    ],
                    "d_entities": [
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "link": 0,
                            "end_offset": 18,
                            "text": "1899년 7월 21일",
                            "start_offset": 6,
                            "source": "DE",
                            "type": "DT_OTHERS",
                            "uri": "",
                            "relation": 0
                        }
                    ],
                    "merge": [
                        {
                            "indirect": 0,
                            "confidence": 0.9908202478286774,
                            "link": 31,
                            "end_offset": 4,
                            "source": "ELU",
                            "type": [
                                "http://dbpedia.org/ontology/Agent",
                                "http://dbpedia.org/ontology/Person",
                                "http://wikidata.dbpedia.org/resource/Q215627",
                                "http://wikidata.dbpedia.org/resource/Q5",
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                                "http://xmlns.com/foaf/0.1/Person",
                                "http://www.wikidata.org/entity/Q36180",
                                "http://dbpedia.org/ontology/Writer",
                                "http://www.w3.org/2002/07/owl#Thing",
                                "http://www.wikidata.org/entity/Q215627",
                                "http://schema.org/Person",
                                "http://www.wikidata.org/entity/Q5",
                                "http://dbpedia.org/ontology/Artist",
                                "http://www.wikidata.org/entity/Q24229398",
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson"
                            ],
                            "uri": "http://ko.dbpedia.org/resource/어니스트_헤밍웨이",
                            "relation": 27,
                            "score": 1.8808135922807914,
                            "en_entity": "Ernest_Hemingway",
                            "text": "헤밍웨이",
                            "start_offset": 0,
                            "id": 2040
                        },
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": null,
                            "link": 0,
                            "end_offset": 18,
                            "text": "1899년 7월 21일",
                            "start_offset": 6,
                            "source": "DE",
                            "type": "DT_OTHERS",
                            "uri": "",
                            "relation": 0
                        },
                        {
                            "indirect": 0,
                            "confidence": 1.0032778110028526,
                            "link": 3,
                            "end_offset": 24,
                            "source": "ELU",
                            "type": [
                                "http://dbpedia.org/ontology/Region",
                                "http://schema.org/Place",
                                "http://schema.org/AdministrativeArea",
                                "http://www.wikidata.org/entity/Q486972",
                                "http://www.w3.org/2002/07/owl#Thing",
                                "http://dbpedia.org/ontology/Wikidata:Q532",
                                "http://dbpedia.org/ontology/AdministrativeRegion",
                                "http://dbpedia.org/ontology/PopulatedPlace",
                                "http://dbpedia.org/ontology/Place",
                                "http://www.ontologydesignpatterns.org/ont/d0.owl#Location",
                                "http://www.wikidata.org/entity/Q3455524",
                                "http://dbpedia.org/ontology/Settlement"
                            ],
                            "uri": "http://ko.dbpedia.org/resource/일리노이_주",
                            "relation": 3,
                            "score": 3.1562461903973444,
                            "en_entity": "Illinois",
                            "text": "일리노이주",
                            "start_offset": 19,
                            "id": 2041
                        }
                    ]
                },
                "morp": [
                    {
                        "lemma": "헤밍웨이",
                        "weight": 0.9,
                        "id": 0,
                        "position": 123,
                        "type": "NNP"
                    },
                    {
                        "lemma": "는",
                        "weight": 0.0332677,
                        "id": 1,
                        "position": 135,
                        "type": "JX"
                    },
                    {
                        "lemma": "1899",
                        "weight": 1,
                        "id": 2,
                        "position": 139,
                        "type": "SN"
                    },
                    {
                        "lemma": "년",
                        "weight": 0.414343,
                        "id": 3,
                        "position": 143,
                        "type": "NNB"
                    },
                    {
                        "lemma": "7",
                        "weight": 1,
                        "id": 4,
                        "position": 147,
                        "type": "SN"
                    },
                    {
                        "lemma": "월",
                        "weight": 0.408539,
                        "id": 5,
                        "position": 148,
                        "type": "NNB"
                    },
                    {
                        "lemma": "21",
                        "weight": 1,
                        "id": 6,
                        "position": 152,
                        "type": "SN"
                    },
                    {
                        "lemma": "일",
                        "weight": 0.126777,
                        "id": 7,
                        "position": 154,
                        "type": "NNB"
                    },
                    {
                        "lemma": "일리노이주",
                        "weight": 0.6,
                        "id": 8,
                        "position": 158,
                        "type": "NNP"
                    },
                    {
                        "lemma": "에서",
                        "weight": 0.0823859,
                        "id": 9,
                        "position": 173,
                        "type": "JKB"
                    },
                    {
                        "lemma": "태어나",
                        "weight": 0.9,
                        "id": 10,
                        "position": 180,
                        "type": "VV"
                    },
                    {
                        "lemma": "았",
                        "weight": 0.9,
                        "id": 11,
                        "position": 186,
                        "type": "EP"
                    },
                    {
                        "lemma": "다",
                        "weight": 0.640954,
                        "id": 12,
                        "position": 189,
                        "type": "EF"
                    },
                    {
                        "lemma": ".",
                        "weight": 1,
                        "id": 13,
                        "position": 192,
                        "type": "SF"
                    }
                ],
                "tagged": "[어니스트_헤밍웨이] 는 1899년 7월 21일 [일리노이_주] 에서 태어났다.",
                "NE": [
                    {
                        "weight": 0.380334,
                        "end": 0,
                        "id": 0,
                        "text": "헤밍웨이",
                        "type": "PS_NAME",
                        "begin": 0,
                        "common_noun": 0
                    },
                    {
                        "weight": 0.841237,
                        "end": 7,
                        "id": 1,
                        "text": "1899년 7월 21일",
                        "type": "DT_OTHERS",
                        "begin": 2,
                        "common_noun": 0
                    },
                    {
                        "weight": 0.406903,
                        "end": 8,
                        "id": 2,
                        "text": "일리노이주",
                        "type": "LCP_PROVINCE",
                        "begin": 8,
                        "common_noun": 0
                    }
                ],
                "id": 2,
                "text": " 헤밍웨이는 1899년 7월 21일 일리노이주에서 태어났다.",
                "word": [
                    {
                        "end": 1,
                        "id": 0,
                        "text": "헤밍웨이는",
                        "type": "",
                        "begin": 0
                    },
                    {
                        "end": 3,
                        "id": 1,
                        "text": "1899년",
                        "type": "",
                        "begin": 2
                    },
                    {
                        "end": 5,
                        "id": 2,
                        "text": "7월",
                        "type": "",
                        "begin": 4
                    },
                    {
                        "end": 7,
                        "id": 3,
                        "text": "21일",
                        "type": "",
                        "begin": 6
                    },
                    {
                        "end": 9,
                        "id": 4,
                        "text": "일리노이주에서",
                        "type": "",
                        "begin": 8
                    },
                    {
                        "end": 13,
                        "id": 5,
                        "text": "태어났다.",
                        "type": "",
                        "begin": 10
                    }
                ],
                "mod_NE": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 4,
                        "text": "헤밍웨이",
                        "start_offset": 0,
                        "type": "PS_NAME",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 18,
                        "text": "1899년 7월 21일",
                        "start_offset": 6,
                        "type": "DT_OTHERS",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 24,
                        "text": "일리노이주",
                        "start_offset": 19,
                        "type": "LCP_PROVINCE",
                        "relation": 0
                    }
                ]
            },
            {
                "phrase_dependency": [
                    {
                        "weight": 0,
                        "end": 0,
                        "key_begin": 0,
                        "id": 0,
                        "label": "NP_SBJ",
                        "text": "헤밍웨이는",
                        "head_phrase": 5,
                        "begin": 0,
                        "sub_phrase": [],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 2,
                        "key_begin": 1,
                        "id": 1,
                        "label": "NP_AJT",
                        "text": "풀린 파이퍼와",
                        "head_phrase": 2,
                        "begin": 1,
                        "sub_phrase": [],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 3,
                        "key_begin": 3,
                        "id": 2,
                        "label": "VP_MOD",
                        "text": "P#1@AJT와 이혼한",
                        "head_phrase": 3,
                        "begin": 1,
                        "sub_phrase": [
                            1
                        ],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 4,
                        "key_begin": 4,
                        "id": 3,
                        "label": "NP_AJT",
                        "text": "P#2@MODㄴ 뒤",
                        "head_phrase": 5,
                        "begin": 1,
                        "sub_phrase": [
                            2
                        ],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 6,
                        "key_begin": 5,
                        "id": 4,
                        "label": "NP_AJT",
                        "text": "마사 겔혼과",
                        "head_phrase": 5,
                        "begin": 5,
                        "sub_phrase": [],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 7,
                        "key_begin": 7,
                        "id": 5,
                        "label": "S",
                        "text": "P#0@SBJ는 P#3@AJT뒤 P#4@AJT과 재혼하였다.",
                        "head_phrase": -1,
                        "begin": 0,
                        "sub_phrase": [
                            0,
                            3,
                            4
                        ],
                        "element": []
                    }
                ],
                "dependency": [
                    {
                        "head": 7,
                        "mod": [],
                        "weight": 0.828218,
                        "id": 0,
                        "text": "헤밍웨이는",
                        "label": "NP_SBJ"
                    },
                    {
                        "head": 2,
                        "mod": [],
                        "weight": 0.49788,
                        "id": 1,
                        "text": "풀린",
                        "label": "VP_MOD"
                    },
                    {
                        "head": 3,
                        "mod": [
                            1
                        ],
                        "weight": 0.788353,
                        "id": 2,
                        "text": "파이퍼와",
                        "label": "NP_AJT"
                    },
                    {
                        "head": 4,
                        "mod": [
                            2
                        ],
                        "weight": 0.72223,
                        "id": 3,
                        "text": "이혼한",
                        "label": "VP_MOD"
                    },
                    {
                        "head": 7,
                        "mod": [
                            3
                        ],
                        "weight": 0.800356,
                        "id": 4,
                        "text": "뒤",
                        "label": "NP_AJT"
                    },
                    {
                        "head": 6,
                        "mod": [],
                        "weight": 0.430128,
                        "id": 5,
                        "text": "마사",
                        "label": "NP"
                    },
                    {
                        "head": 7,
                        "mod": [
                            5
                        ],
                        "weight": 0.0687702,
                        "id": 6,
                        "text": "겔혼과",
                        "label": "NP_AJT"
                    },
                    {
                        "head": -1,
                        "mod": [
                            0,
                            4,
                            6
                        ],
                        "weight": 0.00318445,
                        "id": 7,
                        "text": "재혼하였다.",
                        "label": "VP"
                    }
                ],
                "ZA": [],
                "WSD": [
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 0,
                        "id": 0,
                        "text": "헤밍웨이",
                        "position": 194,
                        "type": "NNP",
                        "begin": 0
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 1,
                        "id": 1,
                        "text": "는",
                        "position": 206,
                        "type": "JX",
                        "begin": 1
                    },
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 2,
                        "id": 2,
                        "text": "풀리",
                        "position": 210,
                        "type": "VV",
                        "begin": 2
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 3,
                        "id": 3,
                        "text": "ㄴ",
                        "position": 213,
                        "type": "ETM",
                        "begin": 3
                    },
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 4,
                        "id": 4,
                        "text": "파이퍼",
                        "position": 217,
                        "type": "NNP",
                        "begin": 4
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 5,
                        "id": 5,
                        "text": "와",
                        "position": 226,
                        "type": "JKB",
                        "begin": 5
                    },
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 7,
                        "id": 6,
                        "text": "이혼하",
                        "position": 230,
                        "type": "VV",
                        "begin": 6
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 8,
                        "id": 7,
                        "text": "ㄴ",
                        "position": 236,
                        "type": "ETM",
                        "begin": 8
                    },
                    {
                        "scode": "01",
                        "weight": 2.2,
                        "end": 9,
                        "id": 8,
                        "text": "뒤",
                        "position": 240,
                        "type": "NNG",
                        "begin": 9
                    },
                    {
                        "scode": "03",
                        "weight": 1,
                        "end": 10,
                        "id": 9,
                        "text": "마사",
                        "position": 244,
                        "type": "NNG",
                        "begin": 10
                    },
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 11,
                        "id": 10,
                        "text": "겔혼",
                        "position": 251,
                        "type": "NNG",
                        "begin": 11
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 12,
                        "id": 11,
                        "text": "과",
                        "position": 257,
                        "type": "JC",
                        "begin": 12
                    },
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 14,
                        "id": 12,
                        "text": "재혼하",
                        "position": 261,
                        "type": "VV",
                        "begin": 13
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 15,
                        "id": 13,
                        "text": "었",
                        "position": 270,
                        "type": "EP",
                        "begin": 15
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 16,
                        "id": 14,
                        "text": "다",
                        "position": 273,
                        "type": "EF",
                        "begin": 16
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 17,
                        "id": 15,
                        "text": ".",
                        "position": 276,
                        "type": "SF",
                        "begin": 17
                    }
                ],
                "chunk": [],
                "reserve_str": "",
                "SRL": [],
                "morp_eval": [
                    {
                        "result": "헤밍웨이/NNG+는/JX",
                        "word_id": 0,
                        "m_end": 1,
                        "id": 0,
                        "target": "헤밍웨이는",
                        "m_begin": 0
                    },
                    {
                        "result": "풀리/VV+ㄴ/ETM",
                        "word_id": 1,
                        "m_end": 3,
                        "id": 1,
                        "target": "풀린",
                        "m_begin": 2
                    },
                    {
                        "result": "파이퍼/NNG+와/JKB",
                        "word_id": 2,
                        "m_end": 5,
                        "id": 2,
                        "target": "파이퍼와",
                        "m_begin": 4
                    },
                    {
                        "result": "이혼하/VV+ㄴ/ETM",
                        "word_id": 3,
                        "m_end": 8,
                        "id": 3,
                        "target": "이혼한",
                        "m_begin": 6
                    },
                    {
                        "result": "뒤/NNG",
                        "word_id": 4,
                        "m_end": 9,
                        "id": 4,
                        "target": "뒤",
                        "m_begin": 9
                    },
                    {
                        "result": "마사/NNG",
                        "word_id": 5,
                        "m_end": 10,
                        "id": 5,
                        "target": "마사",
                        "m_begin": 10
                    },
                    {
                        "result": "겔혼/NNG+과/JC",
                        "word_id": 6,
                        "m_end": 12,
                        "id": 6,
                        "target": "겔혼과",
                        "m_begin": 11
                    },
                    {
                        "result": "재혼하/VV+었/EP+다/EF+./SF",
                        "word_id": 7,
                        "m_end": 17,
                        "id": 7,
                        "target": "재혼하였다.",
                        "m_begin": 13
                    }
                ],
                "SA": [],
                "relation": [],
                "ELU": {
                    "entities": [
                        {
                            "indirect": 0,
                            "confidence": 0.9908202478286774,
                            "link": 31,
                            "end_offset": 4,
                            "source": "ELU",
                            "type": [
                                "http://dbpedia.org/ontology/Agent",
                                "http://dbpedia.org/ontology/Person",
                                "http://wikidata.dbpedia.org/resource/Q215627",
                                "http://wikidata.dbpedia.org/resource/Q5",
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                                "http://xmlns.com/foaf/0.1/Person",
                                "http://www.wikidata.org/entity/Q36180",
                                "http://dbpedia.org/ontology/Writer",
                                "http://www.w3.org/2002/07/owl#Thing",
                                "http://www.wikidata.org/entity/Q215627",
                                "http://schema.org/Person",
                                "http://www.wikidata.org/entity/Q5",
                                "http://dbpedia.org/ontology/Artist",
                                "http://www.wikidata.org/entity/Q24229398",
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson"
                            ],
                            "uri": "http://ko.dbpedia.org/resource/어니스트_헤밍웨이",
                            "relation": 27,
                            "score": 1.8808135922807914,
                            "en_entity": "Ernest_Hemingway",
                            "text": "헤밍웨이",
                            "start_offset": 0,
                            "id": 2042
                        },
                        {
                            "indirect": 0,
                            "confidence": 0.9446060575583326,
                            "link": 0,
                            "end_offset": 25,
                            "source": "ELU",
                            "type": [
                                "http://dbpedia.org/ontology/Agent",
                                "http://dbpedia.org/ontology/Person",
                                "http://wikidata.dbpedia.org/resource/Q215627",
                                "http://wikidata.dbpedia.org/resource/Q5",
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                                "http://xmlns.com/foaf/0.1/Person",
                                "http://dbpedia.org/ontology/Writer",
                                "http://www.w3.org/2002/07/owl#Thing",
                                "http://schema.org/Person",
                                "http://dbpedia.org/ontology/Artist",
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson"
                            ],
                            "uri": "http://ko.dbpedia.org/resource/마사_겔혼",
                            "relation": 0,
                            "score": 0.3010299956639812,
                            "en_entity": "Martha_Gellhorn",
                            "text": "마사겔혼",
                            "start_offset": 20,
                            "id": 2043
                        }
                    ],
                    "d_entities": [
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "link": 0,
                            "end_offset": 12,
                            "text": "파이퍼",
                            "start_offset": 9,
                            "source": "DE",
                            "type": "PS_NAME",
                            "uri": "",
                            "relation": 0
                        }
                    ],
                    "merge": [
                        {
                            "indirect": 0,
                            "confidence": 0.9908202478286774,
                            "link": 31,
                            "end_offset": 4,
                            "source": "ELU",
                            "type": [
                                "http://dbpedia.org/ontology/Agent",
                                "http://dbpedia.org/ontology/Person",
                                "http://wikidata.dbpedia.org/resource/Q215627",
                                "http://wikidata.dbpedia.org/resource/Q5",
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                                "http://xmlns.com/foaf/0.1/Person",
                                "http://www.wikidata.org/entity/Q36180",
                                "http://dbpedia.org/ontology/Writer",
                                "http://www.w3.org/2002/07/owl#Thing",
                                "http://www.wikidata.org/entity/Q215627",
                                "http://schema.org/Person",
                                "http://www.wikidata.org/entity/Q5",
                                "http://dbpedia.org/ontology/Artist",
                                "http://www.wikidata.org/entity/Q24229398",
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson"
                            ],
                            "uri": "http://ko.dbpedia.org/resource/어니스트_헤밍웨이",
                            "relation": 27,
                            "score": 1.8808135922807914,
                            "en_entity": "Ernest_Hemingway",
                            "text": "헤밍웨이",
                            "start_offset": 0,
                            "id": 2042
                        },
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": null,
                            "link": 0,
                            "end_offset": 12,
                            "text": "파이퍼",
                            "start_offset": 9,
                            "source": "DE",
                            "type": "PS_NAME",
                            "uri": "",
                            "relation": 0
                        },
                        {
                            "indirect": 0,
                            "confidence": 0.9446060575583326,
                            "link": 0,
                            "end_offset": 25,
                            "source": "ELU",
                            "type": [
                                "http://dbpedia.org/ontology/Agent",
                                "http://dbpedia.org/ontology/Person",
                                "http://wikidata.dbpedia.org/resource/Q215627",
                                "http://wikidata.dbpedia.org/resource/Q5",
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Agent",
                                "http://xmlns.com/foaf/0.1/Person",
                                "http://dbpedia.org/ontology/Writer",
                                "http://www.w3.org/2002/07/owl#Thing",
                                "http://schema.org/Person",
                                "http://dbpedia.org/ontology/Artist",
                                "http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#NaturalPerson"
                            ],
                            "uri": "http://ko.dbpedia.org/resource/마사_겔혼",
                            "relation": 0,
                            "score": 0.3010299956639812,
                            "en_entity": "Martha_Gellhorn",
                            "text": "마사겔혼",
                            "start_offset": 20,
                            "id": 2043
                        }
                    ]
                },
                "morp": [
                    {
                        "lemma": "헤밍웨이",
                        "weight": 0.9,
                        "id": 0,
                        "position": 194,
                        "type": "NNP"
                    },
                    {
                        "lemma": "는",
                        "weight": 0.0332677,
                        "id": 1,
                        "position": 206,
                        "type": "JX"
                    },
                    {
                        "lemma": "풀리",
                        "weight": 0.9,
                        "id": 2,
                        "position": 210,
                        "type": "VV"
                    },
                    {
                        "lemma": "ㄴ",
                        "weight": 0.304215,
                        "id": 3,
                        "position": 213,
                        "type": "ETM"
                    },
                    {
                        "lemma": "파이퍼",
                        "weight": 0.2,
                        "id": 4,
                        "position": 217,
                        "type": "NNP"
                    },
                    {
                        "lemma": "와",
                        "weight": 0.0304966,
                        "id": 5,
                        "position": 226,
                        "type": "JKB"
                    },
                    {
                        "lemma": "이혼",
                        "weight": 0.9,
                        "id": 6,
                        "position": 230,
                        "type": "NNG"
                    },
                    {
                        "lemma": "하",
                        "weight": 0.0001,
                        "id": 7,
                        "position": 236,
                        "type": "XSV"
                    },
                    {
                        "lemma": "ㄴ",
                        "weight": 0.392321,
                        "id": 8,
                        "position": 236,
                        "type": "ETM"
                    },
                    {
                        "lemma": "뒤",
                        "weight": 0.65834,
                        "id": 9,
                        "position": 240,
                        "type": "NNG"
                    },
                    {
                        "lemma": "마사",
                        "weight": 0.110904,
                        "id": 10,
                        "position": 244,
                        "type": "NNG"
                    },
                    {
                        "lemma": "겔혼",
                        "weight": 0.05,
                        "id": 11,
                        "position": 251,
                        "type": "NNG"
                    },
                    {
                        "lemma": "과",
                        "weight": 0.017569,
                        "id": 12,
                        "position": 257,
                        "type": "JC"
                    },
                    {
                        "lemma": "재혼",
                        "weight": 0.9,
                        "id": 13,
                        "position": 261,
                        "type": "NNG"
                    },
                    {
                        "lemma": "하",
                        "weight": 0.0001,
                        "id": 14,
                        "position": 267,
                        "type": "XSV"
                    },
                    {
                        "lemma": "었",
                        "weight": 0.9,
                        "id": 15,
                        "position": 270,
                        "type": "EP"
                    },
                    {
                        "lemma": "다",
                        "weight": 0.640954,
                        "id": 16,
                        "position": 273,
                        "type": "EF"
                    },
                    {
                        "lemma": ".",
                        "weight": 1,
                        "id": 17,
                        "position": 276,
                        "type": "SF"
                    }
                ],
                "tagged": "[어니스트_헤밍웨이] 는 풀린 파이퍼와 이혼한 뒤 [마사_겔혼] 과 재혼하였다.",
                "NE": [
                    {
                        "weight": 0.284988,
                        "end": 0,
                        "id": 0,
                        "text": "헤밍웨이",
                        "type": "PS_NAME",
                        "begin": 0,
                        "common_noun": 0
                    },
                    {
                        "weight": 0.204269,
                        "end": 4,
                        "id": 1,
                        "text": "파이퍼",
                        "type": "PS_NAME",
                        "begin": 4,
                        "common_noun": 0
                    },
                    {
                        "weight": 0.102782,
                        "end": 11,
                        "id": 2,
                        "text": "마사 겔혼",
                        "type": "PS_NAME",
                        "begin": 10,
                        "common_noun": 0
                    }
                ],
                "id": 3,
                "text": " 헤밍웨이는 풀린 파이퍼와 이혼한 뒤 마사 겔혼과 재혼하였다.",
                "word": [
                    {
                        "end": 1,
                        "id": 0,
                        "text": "헤밍웨이는",
                        "type": "",
                        "begin": 0
                    },
                    {
                        "end": 3,
                        "id": 1,
                        "text": "풀린",
                        "type": "",
                        "begin": 2
                    },
                    {
                        "end": 5,
                        "id": 2,
                        "text": "파이퍼와",
                        "type": "",
                        "begin": 4
                    },
                    {
                        "end": 8,
                        "id": 3,
                        "text": "이혼한",
                        "type": "",
                        "begin": 6
                    },
                    {
                        "end": 9,
                        "id": 4,
                        "text": "뒤",
                        "type": "",
                        "begin": 9
                    },
                    {
                        "end": 10,
                        "id": 5,
                        "text": "마사",
                        "type": "",
                        "begin": 10
                    },
                    {
                        "end": 12,
                        "id": 6,
                        "text": "겔혼과",
                        "type": "",
                        "begin": 11
                    },
                    {
                        "end": 17,
                        "id": 7,
                        "text": "재혼하였다.",
                        "type": "",
                        "begin": 13
                    }
                ],
                "mod_NE": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 4,
                        "text": "헤밍웨이",
                        "start_offset": 0,
                        "type": "PS_NAME",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 12,
                        "text": "파이퍼",
                        "start_offset": 9,
                        "type": "PS_NAME",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 25,
                        "text": "마사 겔혼",
                        "start_offset": 20,
                        "type": "PS_NAME",
                        "relation": 0
                    }
                ]
            },
            {
                "phrase_dependency": [
                    {
                        "weight": 0,
                        "end": 0,
                        "key_begin": 0,
                        "id": 0,
                        "label": "NP_AJT",
                        "text": "1961년",
                        "head_phrase": 4,
                        "begin": 0,
                        "sub_phrase": [],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 2,
                        "key_begin": 1,
                        "id": 1,
                        "label": "NP_AJT",
                        "text": "아이다호 주에서",
                        "head_phrase": 4,
                        "begin": 1,
                        "sub_phrase": [],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 3,
                        "key_begin": 3,
                        "id": 2,
                        "label": "NP_AJT",
                        "text": "엽총으로",
                        "head_phrase": 4,
                        "begin": 3,
                        "sub_phrase": [],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 5,
                        "key_begin": 4,
                        "id": 3,
                        "label": "NP_AJT",
                        "text": "62세의 나이에",
                        "head_phrase": 4,
                        "begin": 4,
                        "sub_phrase": [],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 6,
                        "key_begin": 6,
                        "id": 4,
                        "label": "VP",
                        "text": "P#0@AJT년 P#1@AJT에서 P#2@AJT으로 P#3@AJT에 자살했다.",
                        "head_phrase": -1,
                        "begin": 0,
                        "sub_phrase": [
                            0,
                            1,
                            2,
                            3
                        ],
                        "element": []
                    }
                ],
                "dependency": [
                    {
                        "head": 6,
                        "mod": [],
                        "weight": 0.67311,
                        "id": 0,
                        "text": "1961년",
                        "label": "NP_AJT"
                    },
                    {
                        "head": 2,
                        "mod": [],
                        "weight": 0.688133,
                        "id": 1,
                        "text": "아이다호",
                        "label": "NP"
                    },
                    {
                        "head": 6,
                        "mod": [
                            1
                        ],
                        "weight": 0.829736,
                        "id": 2,
                        "text": "주에서",
                        "label": "NP_AJT"
                    },
                    {
                        "head": 6,
                        "mod": [],
                        "weight": 0.83624,
                        "id": 3,
                        "text": "엽총으로",
                        "label": "NP_AJT"
                    },
                    {
                        "head": 5,
                        "mod": [],
                        "weight": 0.616312,
                        "id": 4,
                        "text": "62세의",
                        "label": "NP_MOD"
                    },
                    {
                        "head": 6,
                        "mod": [
                            4
                        ],
                        "weight": 0.833619,
                        "id": 5,
                        "text": "나이에",
                        "label": "NP_AJT"
                    },
                    {
                        "head": -1,
                        "mod": [
                            0,
                            2,
                            3,
                            5
                        ],
                        "weight": 0.133396,
                        "id": 6,
                        "text": "자살했다.",
                        "label": "VP"
                    }
                ],
                "ZA": [],
                "WSD": [
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 0,
                        "id": 0,
                        "text": "1961",
                        "position": 278,
                        "type": "SN",
                        "begin": 0
                    },
                    {
                        "scode": "02",
                        "weight": 2.2,
                        "end": 1,
                        "id": 1,
                        "text": "년",
                        "position": 282,
                        "type": "NNB",
                        "begin": 1
                    },
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 2,
                        "id": 2,
                        "text": "아이다호",
                        "position": 286,
                        "type": "NNP",
                        "begin": 2
                    },
                    {
                        "scode": "05",
                        "weight": 3.3,
                        "end": 3,
                        "id": 3,
                        "text": "주",
                        "position": 299,
                        "type": "NNG",
                        "begin": 3
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 4,
                        "id": 4,
                        "text": "에서",
                        "position": 302,
                        "type": "JKB",
                        "begin": 4
                    },
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 5,
                        "id": 5,
                        "text": "엽총",
                        "position": 309,
                        "type": "NNG",
                        "begin": 5
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 6,
                        "id": 6,
                        "text": "으로",
                        "position": 315,
                        "type": "JKB",
                        "begin": 6
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 7,
                        "id": 7,
                        "text": "62",
                        "position": 322,
                        "type": "SN",
                        "begin": 7
                    },
                    {
                        "scode": "13",
                        "weight": 4.18947,
                        "end": 8,
                        "id": 8,
                        "text": "세",
                        "position": 324,
                        "type": "NNB",
                        "begin": 8
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 9,
                        "id": 9,
                        "text": "의",
                        "position": 327,
                        "type": "JKG",
                        "begin": 9
                    },
                    {
                        "scode": "01",
                        "weight": 1,
                        "end": 10,
                        "id": 10,
                        "text": "나이",
                        "position": 331,
                        "type": "NNG",
                        "begin": 10
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 11,
                        "id": 11,
                        "text": "에",
                        "position": 337,
                        "type": "JKB",
                        "begin": 11
                    },
                    {
                        "scode": "01",
                        "weight": 1,
                        "end": 13,
                        "id": 12,
                        "text": "자살하",
                        "position": 341,
                        "type": "VV",
                        "begin": 12
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 14,
                        "id": 13,
                        "text": "었",
                        "position": 347,
                        "type": "EP",
                        "begin": 14
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 15,
                        "id": 14,
                        "text": "다",
                        "position": 350,
                        "type": "EF",
                        "begin": 15
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 16,
                        "id": 15,
                        "text": ".",
                        "position": 353,
                        "type": "SF",
                        "begin": 16
                    }
                ],
                "chunk": [],
                "reserve_str": "",
                "SRL": [],
                "morp_eval": [
                    {
                        "result": "1961/SN+년/NNB",
                        "word_id": 0,
                        "m_end": 1,
                        "id": 0,
                        "target": "1961년",
                        "m_begin": 0
                    },
                    {
                        "result": "아이다호/NNG",
                        "word_id": 1,
                        "m_end": 2,
                        "id": 1,
                        "target": "아이다호",
                        "m_begin": 2
                    },
                    {
                        "result": "주/NNG+에서/JKB",
                        "word_id": 2,
                        "m_end": 4,
                        "id": 2,
                        "target": "주에서",
                        "m_begin": 3
                    },
                    {
                        "result": "엽총/NNG+으로/JKB",
                        "word_id": 3,
                        "m_end": 6,
                        "id": 3,
                        "target": "엽총으로",
                        "m_begin": 5
                    },
                    {
                        "result": "62/SN+세/NNB+의/JKG",
                        "word_id": 4,
                        "m_end": 9,
                        "id": 4,
                        "target": "62세의",
                        "m_begin": 7
                    },
                    {
                        "result": "나이/NNG+에/JKB",
                        "word_id": 5,
                        "m_end": 11,
                        "id": 5,
                        "target": "나이에",
                        "m_begin": 10
                    },
                    {
                        "result": "자살하/VV+었/EP+다/EF+./SF",
                        "word_id": 6,
                        "m_end": 16,
                        "id": 6,
                        "target": "자살했다.",
                        "m_begin": 12
                    }
                ],
                "SA": [],
                "relation": [],
                "ELU": {
                    "entities": [
                        {
                            "indirect": 0,
                            "confidence": 0.9819454045719849,
                            "link": 0,
                            "end_offset": 12,
                            "source": "ELU",
                            "type": [
                                "http://dbpedia.org/ontology/Region",
                                "http://schema.org/Place",
                                "http://schema.org/AdministrativeArea",
                                "http://www.wikidata.org/entity/Q486972",
                                "http://www.w3.org/2002/07/owl#Thing",
                                "http://dbpedia.org/ontology/Wikidata:Q532",
                                "http://dbpedia.org/ontology/AdministrativeRegion",
                                "http://dbpedia.org/ontology/PopulatedPlace",
                                "http://dbpedia.org/ontology/Place",
                                "http://www.ontologydesignpatterns.org/ont/d0.owl#Location",
                                "http://www.wikidata.org/entity/Q3455524",
                                "http://dbpedia.org/ontology/Settlement"
                            ],
                            "uri": "http://ko.dbpedia.org/resource/아이다호_주",
                            "relation": 0,
                            "score": 2.167317334748176,
                            "en_entity": "Idaho",
                            "text": "아이다호주",
                            "start_offset": 6,
                            "id": 2044
                        }
                    ],
                    "d_entities": [
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "link": 0,
                            "end_offset": 5,
                            "text": "1961년",
                            "start_offset": 0,
                            "source": "DE",
                            "type": "DT_YEAR",
                            "uri": "",
                            "relation": 0
                        },
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "link": 0,
                            "end_offset": 17,
                            "text": "엽총",
                            "start_offset": 15,
                            "source": "DE",
                            "type": "AF_WEAPON",
                            "uri": "",
                            "relation": 0
                        },
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "link": 0,
                            "end_offset": 23,
                            "text": "62세",
                            "start_offset": 20,
                            "source": "DE",
                            "type": "QT_AGE",
                            "uri": "",
                            "relation": 0
                        }
                    ],
                    "merge": [
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": null,
                            "link": 0,
                            "end_offset": 5,
                            "text": "1961년",
                            "start_offset": 0,
                            "source": "DE",
                            "type": "DT_YEAR",
                            "uri": "",
                            "relation": 0
                        },
                        {
                            "indirect": 0,
                            "confidence": 0.9819454045719849,
                            "link": 0,
                            "end_offset": 12,
                            "source": "ELU",
                            "type": [
                                "http://dbpedia.org/ontology/Region",
                                "http://schema.org/Place",
                                "http://schema.org/AdministrativeArea",
                                "http://www.wikidata.org/entity/Q486972",
                                "http://www.w3.org/2002/07/owl#Thing",
                                "http://dbpedia.org/ontology/Wikidata:Q532",
                                "http://dbpedia.org/ontology/AdministrativeRegion",
                                "http://dbpedia.org/ontology/PopulatedPlace",
                                "http://dbpedia.org/ontology/Place",
                                "http://www.ontologydesignpatterns.org/ont/d0.owl#Location",
                                "http://www.wikidata.org/entity/Q3455524",
                                "http://dbpedia.org/ontology/Settlement"
                            ],
                            "uri": "http://ko.dbpedia.org/resource/아이다호_주",
                            "relation": 0,
                            "score": 2.167317334748176,
                            "en_entity": "Idaho",
                            "text": "아이다호주",
                            "start_offset": 6,
                            "id": 2044
                        },
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": null,
                            "link": 0,
                            "end_offset": 17,
                            "text": "엽총",
                            "start_offset": 15,
                            "source": "DE",
                            "type": "AF_WEAPON",
                            "uri": "",
                            "relation": 0
                        },
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": null,
                            "link": 0,
                            "end_offset": 23,
                            "text": "62세",
                            "start_offset": 20,
                            "source": "DE",
                            "type": "QT_AGE",
                            "uri": "",
                            "relation": 0
                        }
                    ]
                },
                "morp": [
                    {
                        "lemma": "1961",
                        "weight": 1,
                        "id": 0,
                        "position": 278,
                        "type": "SN"
                    },
                    {
                        "lemma": "년",
                        "weight": 0.414343,
                        "id": 1,
                        "position": 282,
                        "type": "NNB"
                    },
                    {
                        "lemma": "아이다호",
                        "weight": 0.2,
                        "id": 2,
                        "position": 286,
                        "type": "NNP"
                    },
                    {
                        "lemma": "주",
                        "weight": 0.0177845,
                        "id": 3,
                        "position": 299,
                        "type": "NNG"
                    },
                    {
                        "lemma": "에서",
                        "weight": 0.153407,
                        "id": 4,
                        "position": 302,
                        "type": "JKB"
                    },
                    {
                        "lemma": "엽총",
                        "weight": 0.9,
                        "id": 5,
                        "position": 309,
                        "type": "NNG"
                    },
                    {
                        "lemma": "으로",
                        "weight": 0.153406,
                        "id": 6,
                        "position": 315,
                        "type": "JKB"
                    },
                    {
                        "lemma": "62",
                        "weight": 1,
                        "id": 7,
                        "position": 322,
                        "type": "SN"
                    },
                    {
                        "lemma": "세",
                        "weight": 0.0850602,
                        "id": 8,
                        "position": 324,
                        "type": "NNB"
                    },
                    {
                        "lemma": "의",
                        "weight": 0.0520933,
                        "id": 9,
                        "position": 327,
                        "type": "JKG"
                    },
                    {
                        "lemma": "나이",
                        "weight": 0.9,
                        "id": 10,
                        "position": 331,
                        "type": "NNG"
                    },
                    {
                        "lemma": "에",
                        "weight": 0.153364,
                        "id": 11,
                        "position": 337,
                        "type": "JKB"
                    },
                    {
                        "lemma": "자살",
                        "weight": 0.9,
                        "id": 12,
                        "position": 341,
                        "type": "NNG"
                    },
                    {
                        "lemma": "하",
                        "weight": 0.0001,
                        "id": 13,
                        "position": 347,
                        "type": "XSV"
                    },
                    {
                        "lemma": "었",
                        "weight": 0.9,
                        "id": 14,
                        "position": 347,
                        "type": "EP"
                    },
                    {
                        "lemma": "다",
                        "weight": 0.640954,
                        "id": 15,
                        "position": 350,
                        "type": "EF"
                    },
                    {
                        "lemma": ".",
                        "weight": 1,
                        "id": 16,
                        "position": 353,
                        "type": "SF"
                    }
                ],
                "tagged": "1961년 [아이다호_주] 에서 엽총으로 62세의 나이에 자살했다.",
                "NE": [
                    {
                        "weight": 0.840442,
                        "end": 1,
                        "id": 0,
                        "text": "1961년",
                        "type": "DT_YEAR",
                        "begin": 0,
                        "common_noun": 0
                    },
                    {
                        "weight": 0.436933,
                        "end": 3,
                        "id": 1,
                        "text": "아이다호 주",
                        "type": "LCP_PROVINCE",
                        "begin": 2,
                        "common_noun": 0
                    },
                    {
                        "weight": 0.188854,
                        "end": 5,
                        "id": 2,
                        "text": "엽총",
                        "type": "AF_WEAPON",
                        "begin": 5,
                        "common_noun": 0
                    },
                    {
                        "weight": 0.65715,
                        "end": 8,
                        "id": 3,
                        "text": "62세",
                        "type": "QT_AGE",
                        "begin": 7,
                        "common_noun": 0
                    }
                ],
                "id": 4,
                "text": " 1961년 아이다호 주에서 엽총으로 62세의 나이에 자살했다.",
                "word": [
                    {
                        "end": 1,
                        "id": 0,
                        "text": "1961년",
                        "type": "",
                        "begin": 0
                    },
                    {
                        "end": 2,
                        "id": 1,
                        "text": "아이다호",
                        "type": "",
                        "begin": 2
                    },
                    {
                        "end": 4,
                        "id": 2,
                        "text": "주에서",
                        "type": "",
                        "begin": 3
                    },
                    {
                        "end": 6,
                        "id": 3,
                        "text": "엽총으로",
                        "type": "",
                        "begin": 5
                    },
                    {
                        "end": 9,
                        "id": 4,
                        "text": "62세의",
                        "type": "",
                        "begin": 7
                    },
                    {
                        "end": 11,
                        "id": 5,
                        "text": "나이에",
                        "type": "",
                        "begin": 10
                    },
                    {
                        "end": 16,
                        "id": 6,
                        "text": "자살했다.",
                        "type": "",
                        "begin": 12
                    }
                ],
                "mod_NE": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 5,
                        "text": "1961년",
                        "start_offset": 0,
                        "type": "DT_YEAR",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 12,
                        "text": "아이다호 주",
                        "start_offset": 6,
                        "type": "LCP_PROVINCE",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 17,
                        "text": "엽총",
                        "start_offset": 15,
                        "type": "AF_WEAPON",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 23,
                        "text": "62세",
                        "start_offset": 20,
                        "type": "QT_AGE",
                        "relation": 0
                    }
                ]
            },
            {
                "phrase_dependency": [
                    {
                        "weight": 0,
                        "end": 0,
                        "key_begin": 0,
                        "id": 0,
                        "label": "X",
                        "text": "-",
                        "head_phrase": 2,
                        "begin": 0,
                        "sub_phrase": [],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 1,
                        "key_begin": 1,
                        "id": 1,
                        "label": "NP_AJT",
                        "text": "1926년",
                        "head_phrase": 2,
                        "begin": 1,
                        "sub_phrase": [],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 8,
                        "key_begin": 2,
                        "id": 2,
                        "label": "NP",
                        "text": "P#0@X- P#1@AJT년 《해는 또다시 떠오른다》 The Sun Also Rises.",
                        "head_phrase": -1,
                        "begin": 0,
                        "sub_phrase": [
                            0,
                            1
                        ],
                        "element": []
                    }
                ],
                "dependency": [
                    {
                        "head": 8,
                        "mod": [],
                        "weight": 0.625414,
                        "id": 0,
                        "text": "-",
                        "label": "X"
                    },
                    {
                        "head": 4,
                        "mod": [],
                        "weight": 0.382789,
                        "id": 1,
                        "text": "1926년",
                        "label": "NP_AJT"
                    },
                    {
                        "head": 4,
                        "mod": [],
                        "weight": 0.623137,
                        "id": 2,
                        "text": "《해는",
                        "label": "NP_SBJ"
                    },
                    {
                        "head": 4,
                        "mod": [],
                        "weight": 0.851397,
                        "id": 3,
                        "text": "또다시",
                        "label": "AP"
                    },
                    {
                        "head": 8,
                        "mod": [
                            1,
                            2,
                            3
                        ],
                        "weight": 0.590195,
                        "id": 4,
                        "text": "떠오른다》",
                        "label": "VP"
                    },
                    {
                        "head": 6,
                        "mod": [],
                        "weight": 0.775376,
                        "id": 5,
                        "text": "The",
                        "label": "NP"
                    },
                    {
                        "head": 7,
                        "mod": [
                            5
                        ],
                        "weight": 0.295614,
                        "id": 6,
                        "text": "Sun",
                        "label": "NP"
                    },
                    {
                        "head": 8,
                        "mod": [
                            6
                        ],
                        "weight": 0.778055,
                        "id": 7,
                        "text": "Also",
                        "label": "NP"
                    },
                    {
                        "head": -1,
                        "mod": [
                            0,
                            4,
                            7
                        ],
                        "weight": 0.0109335,
                        "id": 8,
                        "text": "Rises.",
                        "label": "NP"
                    }
                ],
                "ZA": [],
                "WSD": [
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 0,
                        "id": 0,
                        "text": "-",
                        "position": 354,
                        "type": "SO",
                        "begin": 0
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 1,
                        "id": 1,
                        "text": "1926",
                        "position": 356,
                        "type": "SN",
                        "begin": 1
                    },
                    {
                        "scode": "02",
                        "weight": 2.5,
                        "end": 2,
                        "id": 2,
                        "text": "년",
                        "position": 360,
                        "type": "NNB",
                        "begin": 2
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 3,
                        "id": 3,
                        "text": "《",
                        "position": 364,
                        "type": "SS",
                        "begin": 3
                    },
                    {
                        "scode": "12",
                        "weight": 1,
                        "end": 4,
                        "id": 4,
                        "text": "해",
                        "position": 367,
                        "type": "NNP",
                        "begin": 4
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 5,
                        "id": 5,
                        "text": "는",
                        "position": 370,
                        "type": "JX",
                        "begin": 5
                    },
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 6,
                        "id": 6,
                        "text": "또다시",
                        "position": 374,
                        "type": "MAG",
                        "begin": 6
                    },
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 7,
                        "id": 7,
                        "text": "떠오르",
                        "position": 384,
                        "type": "VV",
                        "begin": 7
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 8,
                        "id": 8,
                        "text": "ㄴ다",
                        "position": 390,
                        "type": "EF",
                        "begin": 8
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 9,
                        "id": 9,
                        "text": "》",
                        "position": 396,
                        "type": "SS",
                        "begin": 9
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 10,
                        "id": 10,
                        "text": "The",
                        "position": 400,
                        "type": "SL",
                        "begin": 10
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 11,
                        "id": 11,
                        "text": "Sun",
                        "position": 404,
                        "type": "SL",
                        "begin": 11
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 12,
                        "id": 12,
                        "text": "Also",
                        "position": 408,
                        "type": "SL",
                        "begin": 12
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 13,
                        "id": 13,
                        "text": "Rises",
                        "position": 413,
                        "type": "SL",
                        "begin": 13
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 14,
                        "id": 14,
                        "text": ".",
                        "position": 418,
                        "type": "SF",
                        "begin": 14
                    }
                ],
                "chunk": [],
                "reserve_str": "",
                "SRL": [],
                "morp_eval": [
                    {
                        "result": "-/SO",
                        "word_id": 0,
                        "m_end": 0,
                        "id": 0,
                        "target": "-",
                        "m_begin": 0
                    },
                    {
                        "result": "1926/SN+년/NNB",
                        "word_id": 1,
                        "m_end": 2,
                        "id": 1,
                        "target": "1926년",
                        "m_begin": 1
                    },
                    {
                        "result": "《/SS+해/NNG+는/JX",
                        "word_id": 2,
                        "m_end": 5,
                        "id": 2,
                        "target": "《해는",
                        "m_begin": 3
                    },
                    {
                        "result": "또다시/MAG",
                        "word_id": 3,
                        "m_end": 6,
                        "id": 3,
                        "target": "또다시",
                        "m_begin": 6
                    },
                    {
                        "result": "떠오르/VV+ㄴ다/EF+》/SS",
                        "word_id": 4,
                        "m_end": 9,
                        "id": 4,
                        "target": "떠오른다》",
                        "m_begin": 7
                    },
                    {
                        "result": "The/SL",
                        "word_id": 5,
                        "m_end": 10,
                        "id": 5,
                        "target": "The",
                        "m_begin": 10
                    },
                    {
                        "result": "Sun/SL",
                        "word_id": 6,
                        "m_end": 11,
                        "id": 6,
                        "target": "Sun",
                        "m_begin": 11
                    },
                    {
                        "result": "Also/SL",
                        "word_id": 7,
                        "m_end": 12,
                        "id": 7,
                        "target": "Also",
                        "m_begin": 12
                    },
                    {
                        "result": "Rises/SL+./SF",
                        "word_id": 8,
                        "m_end": 14,
                        "id": 8,
                        "target": "Rises.",
                        "m_begin": 13
                    }
                ],
                "SA": [],
                "relation": [],
                "ELU": {
                    "entities": [],
                    "d_entities": [
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "link": 0,
                            "end_offset": 7,
                            "text": "1926년",
                            "start_offset": 2,
                            "source": "DE",
                            "type": "DT_YEAR",
                            "uri": "",
                            "relation": 0
                        },
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "link": 0,
                            "end_offset": 20,
                            "text": "해는 또다시 떠오른다",
                            "start_offset": 9,
                            "source": "DE",
                            "type": "AFW_DOCUMENT",
                            "uri": "",
                            "relation": 0
                        },
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "link": 0,
                            "end_offset": 29,
                            "text": "The Sun",
                            "start_offset": 22,
                            "source": "DE",
                            "type": "OGG_MEDIA",
                            "uri": "",
                            "relation": 0
                        }
                    ],
                    "merge": [
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": null,
                            "link": 0,
                            "end_offset": 7,
                            "text": "1926년",
                            "start_offset": 2,
                            "source": "DE",
                            "type": "DT_YEAR",
                            "uri": "",
                            "relation": 0
                        },
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": null,
                            "link": 0,
                            "end_offset": 20,
                            "text": "해는 또다시 떠오른다",
                            "start_offset": 9,
                            "source": "DE",
                            "type": "AFW_DOCUMENT",
                            "uri": "",
                            "relation": 0
                        },
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": null,
                            "link": 0,
                            "end_offset": 29,
                            "text": "The Sun",
                            "start_offset": 22,
                            "source": "DE",
                            "type": "OGG_MEDIA",
                            "uri": "",
                            "relation": 0
                        }
                    ]
                },
                "morp": [
                    {
                        "lemma": "-",
                        "weight": 1,
                        "id": 0,
                        "position": 354,
                        "type": "SO"
                    },
                    {
                        "lemma": "1926",
                        "weight": 1,
                        "id": 1,
                        "position": 356,
                        "type": "SN"
                    },
                    {
                        "lemma": "년",
                        "weight": 0.414343,
                        "id": 2,
                        "position": 360,
                        "type": "NNB"
                    },
                    {
                        "lemma": "《",
                        "weight": 1,
                        "id": 3,
                        "position": 364,
                        "type": "SS"
                    },
                    {
                        "lemma": "해",
                        "weight": 0.000103867,
                        "id": 4,
                        "position": 367,
                        "type": "NNP"
                    },
                    {
                        "lemma": "는",
                        "weight": 0.0332677,
                        "id": 5,
                        "position": 370,
                        "type": "JX"
                    },
                    {
                        "lemma": "또다시",
                        "weight": 0.9,
                        "id": 6,
                        "position": 374,
                        "type": "MAG"
                    },
                    {
                        "lemma": "떠오르",
                        "weight": 0.9,
                        "id": 7,
                        "position": 384,
                        "type": "VV"
                    },
                    {
                        "lemma": "ㄴ다",
                        "weight": 0.0793196,
                        "id": 8,
                        "position": 390,
                        "type": "EF"
                    },
                    {
                        "lemma": "》",
                        "weight": 1,
                        "id": 9,
                        "position": 396,
                        "type": "SS"
                    },
                    {
                        "lemma": "The",
                        "weight": 1,
                        "id": 10,
                        "position": 400,
                        "type": "SL"
                    },
                    {
                        "lemma": "Sun",
                        "weight": 1,
                        "id": 11,
                        "position": 404,
                        "type": "SL"
                    },
                    {
                        "lemma": "Also",
                        "weight": 1,
                        "id": 12,
                        "position": 408,
                        "type": "SL"
                    },
                    {
                        "lemma": "Rises",
                        "weight": 1,
                        "id": 13,
                        "position": 413,
                        "type": "SL"
                    },
                    {
                        "lemma": ".",
                        "weight": 1,
                        "id": 14,
                        "position": 418,
                        "type": "SF"
                    }
                ],
                "tagged": "- 1926년 《해는 또다시 떠오른다》 The Sun Also Rises.",
                "NE": [
                    {
                        "weight": 0.682946,
                        "end": 2,
                        "id": 0,
                        "text": "1926년",
                        "type": "DT_YEAR",
                        "begin": 1,
                        "common_noun": 0
                    },
                    {
                        "weight": 0.944267,
                        "end": 8,
                        "id": 1,
                        "text": "해는 또다시 떠오른다",
                        "type": "AFW_DOCUMENT",
                        "begin": 4,
                        "common_noun": 0
                    },
                    {
                        "weight": 0.112072,
                        "end": 11,
                        "id": 2,
                        "text": "The Sun",
                        "type": "OGG_MEDIA",
                        "begin": 10,
                        "common_noun": 0
                    }
                ],
                "id": 5,
                "text": "- 1926년 《해는 또다시 떠오른다》 The Sun Also Rises.",
                "word": [
                    {
                        "end": 0,
                        "id": 0,
                        "text": "-",
                        "type": "",
                        "begin": 0
                    },
                    {
                        "end": 2,
                        "id": 1,
                        "text": "1926년",
                        "type": "",
                        "begin": 1
                    },
                    {
                        "end": 5,
                        "id": 2,
                        "text": "《해는",
                        "type": "",
                        "begin": 3
                    },
                    {
                        "end": 6,
                        "id": 3,
                        "text": "또다시",
                        "type": "",
                        "begin": 6
                    },
                    {
                        "end": 9,
                        "id": 4,
                        "text": "떠오른다》",
                        "type": "",
                        "begin": 7
                    },
                    {
                        "end": 10,
                        "id": 5,
                        "text": "The",
                        "type": "",
                        "begin": 10
                    },
                    {
                        "end": 11,
                        "id": 6,
                        "text": "Sun",
                        "type": "",
                        "begin": 11
                    },
                    {
                        "end": 12,
                        "id": 7,
                        "text": "Also",
                        "type": "",
                        "begin": 12
                    },
                    {
                        "end": 14,
                        "id": 8,
                        "text": "Rises.",
                        "type": "",
                        "begin": 13
                    }
                ],
                "mod_NE": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 7,
                        "text": "1926년",
                        "start_offset": 2,
                        "type": "DT_YEAR",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 20,
                        "text": "해는 또다시 떠오른다",
                        "start_offset": 9,
                        "type": "AFW_DOCUMENT",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 29,
                        "text": "The Sun",
                        "start_offset": 22,
                        "type": "OGG_MEDIA",
                        "relation": 0
                    }
                ]
            },
            {
                "phrase_dependency": [
                    {
                        "weight": 0,
                        "end": 0,
                        "key_begin": 0,
                        "id": 0,
                        "label": "X",
                        "text": "-",
                        "head_phrase": 2,
                        "begin": 0,
                        "sub_phrase": [],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 1,
                        "key_begin": 1,
                        "id": 1,
                        "label": "NP_AJT",
                        "text": "1929년",
                        "head_phrase": 2,
                        "begin": 1,
                        "sub_phrase": [],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 8,
                        "key_begin": 2,
                        "id": 2,
                        "label": "NP",
                        "text": "P#0@X- P#1@AJT년 《무기여 잘 있거라》 A Farewell to Arms.",
                        "head_phrase": -1,
                        "begin": 0,
                        "sub_phrase": [
                            0,
                            1
                        ],
                        "element": []
                    }
                ],
                "dependency": [
                    {
                        "head": 8,
                        "mod": [],
                        "weight": 0.652819,
                        "id": 0,
                        "text": "-",
                        "label": "X"
                    },
                    {
                        "head": 4,
                        "mod": [],
                        "weight": 0.0516055,
                        "id": 1,
                        "text": "1929년",
                        "label": "NP_AJT"
                    },
                    {
                        "head": 4,
                        "mod": [],
                        "weight": 0.0213844,
                        "id": 2,
                        "text": "《무기여",
                        "label": "NP_SBJ"
                    },
                    {
                        "head": 4,
                        "mod": [],
                        "weight": 0.752902,
                        "id": 3,
                        "text": "잘",
                        "label": "AP"
                    },
                    {
                        "head": 8,
                        "mod": [
                            1,
                            2,
                            3
                        ],
                        "weight": 0.645219,
                        "id": 4,
                        "text": "있거라》",
                        "label": "VP"
                    },
                    {
                        "head": 6,
                        "mod": [],
                        "weight": 0.297697,
                        "id": 5,
                        "text": "A",
                        "label": "NP"
                    },
                    {
                        "head": 7,
                        "mod": [
                            5
                        ],
                        "weight": 0.417261,
                        "id": 6,
                        "text": "Farewell",
                        "label": "NP"
                    },
                    {
                        "head": 8,
                        "mod": [
                            6
                        ],
                        "weight": 0.746958,
                        "id": 7,
                        "text": "to",
                        "label": "NP"
                    },
                    {
                        "head": -1,
                        "mod": [
                            0,
                            4,
                            7
                        ],
                        "weight": 0.0000264244,
                        "id": 8,
                        "text": "Arms.",
                        "label": "NP"
                    }
                ],
                "ZA": [],
                "WSD": [
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 0,
                        "id": 0,
                        "text": "-",
                        "position": 419,
                        "type": "SO",
                        "begin": 0
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 1,
                        "id": 1,
                        "text": "1929",
                        "position": 421,
                        "type": "SN",
                        "begin": 1
                    },
                    {
                        "scode": "02",
                        "weight": 4.30476,
                        "end": 2,
                        "id": 2,
                        "text": "년",
                        "position": 425,
                        "type": "NNB",
                        "begin": 2
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 3,
                        "id": 3,
                        "text": "《",
                        "position": 429,
                        "type": "SS",
                        "begin": 3
                    },
                    {
                        "scode": "05",
                        "weight": 3.55,
                        "end": 4,
                        "id": 4,
                        "text": "무기",
                        "position": 432,
                        "type": "NNG",
                        "begin": 4
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 5,
                        "id": 5,
                        "text": "여",
                        "position": 438,
                        "type": "JKV",
                        "begin": 5
                    },
                    {
                        "scode": "02",
                        "weight": 4.4,
                        "end": 6,
                        "id": 6,
                        "text": "잘",
                        "position": 442,
                        "type": "MAG",
                        "begin": 6
                    },
                    {
                        "scode": "01",
                        "weight": 4.4,
                        "end": 7,
                        "id": 7,
                        "text": "있",
                        "position": 446,
                        "type": "VA",
                        "begin": 7
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 8,
                        "id": 8,
                        "text": "거라",
                        "position": 449,
                        "type": "EF",
                        "begin": 8
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 9,
                        "id": 9,
                        "text": "》",
                        "position": 455,
                        "type": "SS",
                        "begin": 9
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 10,
                        "id": 10,
                        "text": "A",
                        "position": 459,
                        "type": "SL",
                        "begin": 10
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 11,
                        "id": 11,
                        "text": "Farewell",
                        "position": 461,
                        "type": "SL",
                        "begin": 11
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 12,
                        "id": 12,
                        "text": "to",
                        "position": 470,
                        "type": "SL",
                        "begin": 12
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 13,
                        "id": 13,
                        "text": "Arms",
                        "position": 473,
                        "type": "SL",
                        "begin": 13
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 14,
                        "id": 14,
                        "text": ".",
                        "position": 477,
                        "type": "SF",
                        "begin": 14
                    }
                ],
                "chunk": [],
                "reserve_str": "",
                "SRL": [],
                "morp_eval": [
                    {
                        "result": "-/SO",
                        "word_id": 0,
                        "m_end": 0,
                        "id": 0,
                        "target": "-",
                        "m_begin": 0
                    },
                    {
                        "result": "1929/SN+년/NNB",
                        "word_id": 1,
                        "m_end": 2,
                        "id": 1,
                        "target": "1929년",
                        "m_begin": 1
                    },
                    {
                        "result": "《/SS+무기/NNG+여/JKV",
                        "word_id": 2,
                        "m_end": 5,
                        "id": 2,
                        "target": "《무기여",
                        "m_begin": 3
                    },
                    {
                        "result": "잘/MAG",
                        "word_id": 3,
                        "m_end": 6,
                        "id": 3,
                        "target": "잘",
                        "m_begin": 6
                    },
                    {
                        "result": "있/VA+거라/EF+》/SS",
                        "word_id": 4,
                        "m_end": 9,
                        "id": 4,
                        "target": "있거라》",
                        "m_begin": 7
                    },
                    {
                        "result": "A/SL",
                        "word_id": 5,
                        "m_end": 10,
                        "id": 5,
                        "target": "A",
                        "m_begin": 10
                    },
                    {
                        "result": "Farewell/SL",
                        "word_id": 6,
                        "m_end": 11,
                        "id": 6,
                        "target": "Farewell",
                        "m_begin": 11
                    },
                    {
                        "result": "to/SL",
                        "word_id": 7,
                        "m_end": 12,
                        "id": 7,
                        "target": "to",
                        "m_begin": 12
                    },
                    {
                        "result": "Arms/SL+./SF",
                        "word_id": 8,
                        "m_end": 14,
                        "id": 8,
                        "target": "Arms.",
                        "m_begin": 13
                    }
                ],
                "SA": [],
                "relation": [],
                "ELU": {
                    "entities": [
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": "A_Farewell_to_Arms",
                            "link": 0,
                            "end_offset": 18,
                            "text": "무기여 잘 있거라",
                            "start_offset": 9,
                            "source": "NER",
                            "type": "AFW_DOCUMENT",
                            "uri": "http://ko.dbpedia.org/resource/무기여_잘_있거라",
                            "relation": 0
                        }
                    ],
                    "d_entities": [
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "link": 0,
                            "end_offset": 7,
                            "text": "1929년",
                            "start_offset": 2,
                            "source": "DE",
                            "type": "DT_YEAR",
                            "uri": "",
                            "relation": 0
                        }
                    ],
                    "merge": [
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": null,
                            "link": 0,
                            "end_offset": 7,
                            "text": "1929년",
                            "start_offset": 2,
                            "source": "DE",
                            "type": "DT_YEAR",
                            "uri": "",
                            "relation": 0
                        },
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": "A_Farewell_to_Arms",
                            "link": 0,
                            "end_offset": 18,
                            "text": "무기여 잘 있거라",
                            "start_offset": 9,
                            "source": "NER",
                            "type": "AFW_DOCUMENT",
                            "uri": "http://ko.dbpedia.org/resource/무기여_잘_있거라",
                            "relation": 0
                        }
                    ]
                },
                "morp": [
                    {
                        "lemma": "-",
                        "weight": 1,
                        "id": 0,
                        "position": 419,
                        "type": "SO"
                    },
                    {
                        "lemma": "1929",
                        "weight": 1,
                        "id": 1,
                        "position": 421,
                        "type": "SN"
                    },
                    {
                        "lemma": "년",
                        "weight": 0.414343,
                        "id": 2,
                        "position": 425,
                        "type": "NNB"
                    },
                    {
                        "lemma": "《",
                        "weight": 1,
                        "id": 3,
                        "position": 429,
                        "type": "SS"
                    },
                    {
                        "lemma": "무기",
                        "weight": 0.199771,
                        "id": 4,
                        "position": 432,
                        "type": "NNG"
                    },
                    {
                        "lemma": "여",
                        "weight": 0.0001,
                        "id": 5,
                        "position": 438,
                        "type": "JKV"
                    },
                    {
                        "lemma": "잘",
                        "weight": 0.011005,
                        "id": 6,
                        "position": 442,
                        "type": "MAG"
                    },
                    {
                        "lemma": "있",
                        "weight": 0.0682304,
                        "id": 7,
                        "position": 446,
                        "type": "VA"
                    },
                    {
                        "lemma": "거라",
                        "weight": 0.120894,
                        "id": 8,
                        "position": 449,
                        "type": "EF"
                    },
                    {
                        "lemma": "》",
                        "weight": 1,
                        "id": 9,
                        "position": 455,
                        "type": "SS"
                    },
                    {
                        "lemma": "A",
                        "weight": 1,
                        "id": 10,
                        "position": 459,
                        "type": "SL"
                    },
                    {
                        "lemma": "Farewell",
                        "weight": 1,
                        "id": 11,
                        "position": 461,
                        "type": "SL"
                    },
                    {
                        "lemma": "to",
                        "weight": 1,
                        "id": 12,
                        "position": 470,
                        "type": "SL"
                    },
                    {
                        "lemma": "Arms",
                        "weight": 1,
                        "id": 13,
                        "position": 473,
                        "type": "SL"
                    },
                    {
                        "lemma": ".",
                        "weight": 1,
                        "id": 14,
                        "position": 477,
                        "type": "SF"
                    }
                ],
                "tagged": "- 1929년 《[무기여_잘_있거라] 》 A Farewell to Arms.",
                "NE": [
                    {
                        "weight": 0.655542,
                        "end": 2,
                        "id": 0,
                        "text": "1929년",
                        "type": "DT_YEAR",
                        "begin": 1,
                        "common_noun": 0
                    },
                    {
                        "weight": 0.992118,
                        "end": 8,
                        "id": 1,
                        "text": "무기여 잘 있거라",
                        "type": "AFW_DOCUMENT",
                        "begin": 4,
                        "common_noun": 0
                    }
                ],
                "id": 6,
                "text": "- 1929년 《무기여 잘 있거라》 A Farewell to Arms.",
                "word": [
                    {
                        "end": 0,
                        "id": 0,
                        "text": "-",
                        "type": "",
                        "begin": 0
                    },
                    {
                        "end": 2,
                        "id": 1,
                        "text": "1929년",
                        "type": "",
                        "begin": 1
                    },
                    {
                        "end": 5,
                        "id": 2,
                        "text": "《무기여",
                        "type": "",
                        "begin": 3
                    },
                    {
                        "end": 6,
                        "id": 3,
                        "text": "잘",
                        "type": "",
                        "begin": 6
                    },
                    {
                        "end": 9,
                        "id": 4,
                        "text": "있거라》",
                        "type": "",
                        "begin": 7
                    },
                    {
                        "end": 10,
                        "id": 5,
                        "text": "A",
                        "type": "",
                        "begin": 10
                    },
                    {
                        "end": 11,
                        "id": 6,
                        "text": "Farewell",
                        "type": "",
                        "begin": 11
                    },
                    {
                        "end": 12,
                        "id": 7,
                        "text": "to",
                        "type": "",
                        "begin": 12
                    },
                    {
                        "end": 14,
                        "id": 8,
                        "text": "Arms.",
                        "type": "",
                        "begin": 13
                    }
                ],
                "mod_NE": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 7,
                        "text": "1929년",
                        "start_offset": 2,
                        "type": "DT_YEAR",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 18,
                        "text": "무기여 잘 있거라",
                        "start_offset": 9,
                        "type": "AFW_DOCUMENT",
                        "relation": 0
                    }
                ]
            },
            {
                "phrase_dependency": [
                    {
                        "weight": 0,
                        "end": 9,
                        "key_begin": 0,
                        "id": 0,
                        "label": "NP",
                        "text": "- 1940년 《누구를 위하여 종은 울리나》For Whom the Bell Tolls.",
                        "head_phrase": -1,
                        "begin": 0,
                        "sub_phrase": [],
                        "element": []
                    }
                ],
                "dependency": [
                    {
                        "head": 1,
                        "mod": [],
                        "weight": 0.0340594,
                        "id": 0,
                        "text": "-",
                        "label": "X"
                    },
                    {
                        "head": 9,
                        "mod": [
                            0
                        ],
                        "weight": 0.283356,
                        "id": 1,
                        "text": "1940년",
                        "label": "NP"
                    },
                    {
                        "head": 3,
                        "mod": [],
                        "weight": 0.675865,
                        "id": 2,
                        "text": "《누구를",
                        "label": "NP_OBJ"
                    },
                    {
                        "head": 5,
                        "mod": [
                            2
                        ],
                        "weight": 0.744506,
                        "id": 3,
                        "text": "위하여",
                        "label": "VP"
                    },
                    {
                        "head": 5,
                        "mod": [],
                        "weight": 0.617308,
                        "id": 4,
                        "text": "종은",
                        "label": "NP_SBJ"
                    },
                    {
                        "head": 7,
                        "mod": [
                            3,
                            4
                        ],
                        "weight": 0.577894,
                        "id": 5,
                        "text": "울리나》For",
                        "label": "NP"
                    },
                    {
                        "head": 7,
                        "mod": [],
                        "weight": 0.707969,
                        "id": 6,
                        "text": "Whom",
                        "label": "NP"
                    },
                    {
                        "head": 8,
                        "mod": [
                            5,
                            6
                        ],
                        "weight": 0.702517,
                        "id": 7,
                        "text": "the",
                        "label": "NP"
                    },
                    {
                        "head": 9,
                        "mod": [
                            7
                        ],
                        "weight": 0.762587,
                        "id": 8,
                        "text": "Bell",
                        "label": "NP"
                    },
                    {
                        "head": -1,
                        "mod": [
                            1,
                            8
                        ],
                        "weight": 0.00053499,
                        "id": 9,
                        "text": "Tolls.",
                        "label": "NP"
                    }
                ],
                "ZA": [],
                "WSD": [
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 0,
                        "id": 0,
                        "text": "-",
                        "position": 478,
                        "type": "SO",
                        "begin": 0
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 1,
                        "id": 1,
                        "text": "1940",
                        "position": 480,
                        "type": "SN",
                        "begin": 1
                    },
                    {
                        "scode": "02",
                        "weight": 2.16296,
                        "end": 2,
                        "id": 2,
                        "text": "년",
                        "position": 484,
                        "type": "NNB",
                        "begin": 2
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 3,
                        "id": 3,
                        "text": "《",
                        "position": 488,
                        "type": "SS",
                        "begin": 3
                    },
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 4,
                        "id": 4,
                        "text": "누구",
                        "position": 491,
                        "type": "NP",
                        "begin": 4
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 5,
                        "id": 5,
                        "text": "를",
                        "position": 497,
                        "type": "JKO",
                        "begin": 5
                    },
                    {
                        "scode": "01",
                        "weight": 4.4,
                        "end": 6,
                        "id": 6,
                        "text": "위하",
                        "position": 501,
                        "type": "VV",
                        "begin": 6
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 7,
                        "id": 7,
                        "text": "어",
                        "position": 507,
                        "type": "EC",
                        "begin": 7
                    },
                    {
                        "scode": "13",
                        "weight": 6.12988,
                        "end": 8,
                        "id": 8,
                        "text": "종",
                        "position": 511,
                        "type": "NNG",
                        "begin": 8
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 9,
                        "id": 9,
                        "text": "은",
                        "position": 514,
                        "type": "JX",
                        "begin": 9
                    },
                    {
                        "scode": "01",
                        "weight": 4.09676,
                        "end": 10,
                        "id": 10,
                        "text": "울리",
                        "position": 518,
                        "type": "VV",
                        "begin": 10
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 11,
                        "id": 11,
                        "text": "나",
                        "position": 524,
                        "type": "EF",
                        "begin": 11
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 12,
                        "id": 12,
                        "text": "》",
                        "position": 527,
                        "type": "SS",
                        "begin": 12
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 13,
                        "id": 13,
                        "text": "For",
                        "position": 530,
                        "type": "SL",
                        "begin": 13
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 14,
                        "id": 14,
                        "text": "Whom",
                        "position": 534,
                        "type": "SL",
                        "begin": 14
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 15,
                        "id": 15,
                        "text": "the",
                        "position": 539,
                        "type": "SL",
                        "begin": 15
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 16,
                        "id": 16,
                        "text": "Bell",
                        "position": 543,
                        "type": "SL",
                        "begin": 16
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 17,
                        "id": 17,
                        "text": "Tolls",
                        "position": 548,
                        "type": "SL",
                        "begin": 17
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 18,
                        "id": 18,
                        "text": ".",
                        "position": 553,
                        "type": "SF",
                        "begin": 18
                    }
                ],
                "chunk": [],
                "reserve_str": "",
                "SRL": [],
                "morp_eval": [
                    {
                        "result": "-/SO",
                        "word_id": 0,
                        "m_end": 0,
                        "id": 0,
                        "target": "-",
                        "m_begin": 0
                    },
                    {
                        "result": "1940/SN+년/NNB",
                        "word_id": 1,
                        "m_end": 2,
                        "id": 1,
                        "target": "1940년",
                        "m_begin": 1
                    },
                    {
                        "result": "《/SS+누구/NP+를/JKO",
                        "word_id": 2,
                        "m_end": 5,
                        "id": 2,
                        "target": "《누구를",
                        "m_begin": 3
                    },
                    {
                        "result": "위하/VV+어/EC",
                        "word_id": 3,
                        "m_end": 7,
                        "id": 3,
                        "target": "위하여",
                        "m_begin": 6
                    },
                    {
                        "result": "종/NNG+은/JX",
                        "word_id": 4,
                        "m_end": 9,
                        "id": 4,
                        "target": "종은",
                        "m_begin": 8
                    },
                    {
                        "result": "울리/VV+나/EF+》/SS+For/SL",
                        "word_id": 5,
                        "m_end": 13,
                        "id": 5,
                        "target": "울리나》For",
                        "m_begin": 10
                    },
                    {
                        "result": "Whom/SL",
                        "word_id": 6,
                        "m_end": 14,
                        "id": 6,
                        "target": "Whom",
                        "m_begin": 14
                    },
                    {
                        "result": "the/SL",
                        "word_id": 7,
                        "m_end": 15,
                        "id": 7,
                        "target": "the",
                        "m_begin": 15
                    },
                    {
                        "result": "Bell/SL",
                        "word_id": 8,
                        "m_end": 16,
                        "id": 8,
                        "target": "Bell",
                        "m_begin": 16
                    },
                    {
                        "result": "Tolls/SL+./SF",
                        "word_id": 9,
                        "m_end": 18,
                        "id": 9,
                        "target": "Tolls.",
                        "m_begin": 17
                    }
                ],
                "SA": [],
                "relation": [],
                "ELU": {
                    "entities": [
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": "For_Whom_the_Bell_Tolls",
                            "link": 0,
                            "end_offset": 23,
                            "text": "누구를 위하여 종은 울리나",
                            "start_offset": 9,
                            "source": "NER",
                            "type": "AFW_DOCUMENT",
                            "uri": "http://ko.dbpedia.org/resource/누구를_위하여_종은_울리나",
                            "relation": 0
                        }
                    ],
                    "d_entities": [
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "link": 0,
                            "end_offset": 7,
                            "text": "1940년",
                            "start_offset": 2,
                            "source": "DE",
                            "type": "DT_YEAR",
                            "uri": "",
                            "relation": 0
                        },
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "link": 0,
                            "end_offset": 36,
                            "text": "For Whom the",
                            "start_offset": 24,
                            "source": "DE",
                            "type": "AFW_DOCUMENT",
                            "uri": "",
                            "relation": 0
                        }
                    ],
                    "merge": [
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": null,
                            "link": 0,
                            "end_offset": 7,
                            "text": "1940년",
                            "start_offset": 2,
                            "source": "DE",
                            "type": "DT_YEAR",
                            "uri": "",
                            "relation": 0
                        },
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": "For_Whom_the_Bell_Tolls",
                            "link": 0,
                            "end_offset": 23,
                            "text": "누구를 위하여 종은 울리나",
                            "start_offset": 9,
                            "source": "NER",
                            "type": "AFW_DOCUMENT",
                            "uri": "http://ko.dbpedia.org/resource/누구를_위하여_종은_울리나",
                            "relation": 0
                        },
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": null,
                            "link": 0,
                            "end_offset": 36,
                            "text": "For Whom the",
                            "start_offset": 24,
                            "source": "DE",
                            "type": "AFW_DOCUMENT",
                            "uri": "",
                            "relation": 0
                        }
                    ]
                },
                "morp": [
                    {
                        "lemma": "-",
                        "weight": 1,
                        "id": 0,
                        "position": 478,
                        "type": "SO"
                    },
                    {
                        "lemma": "1940",
                        "weight": 1,
                        "id": 1,
                        "position": 480,
                        "type": "SN"
                    },
                    {
                        "lemma": "년",
                        "weight": 0.414343,
                        "id": 2,
                        "position": 484,
                        "type": "NNB"
                    },
                    {
                        "lemma": "《",
                        "weight": 1,
                        "id": 3,
                        "position": 488,
                        "type": "SS"
                    },
                    {
                        "lemma": "누구",
                        "weight": 0.9,
                        "id": 4,
                        "position": 491,
                        "type": "NP"
                    },
                    {
                        "lemma": "를",
                        "weight": 0.0808985,
                        "id": 5,
                        "position": 497,
                        "type": "JKO"
                    },
                    {
                        "lemma": "위하",
                        "weight": 0.778555,
                        "id": 6,
                        "position": 501,
                        "type": "VV"
                    },
                    {
                        "lemma": "어",
                        "weight": 0.41831,
                        "id": 7,
                        "position": 507,
                        "type": "EC"
                    },
                    {
                        "lemma": "종",
                        "weight": 0.213242,
                        "id": 8,
                        "position": 511,
                        "type": "NNG"
                    },
                    {
                        "lemma": "은",
                        "weight": 0.0449928,
                        "id": 9,
                        "position": 514,
                        "type": "JX"
                    },
                    {
                        "lemma": "울리",
                        "weight": 0.147105,
                        "id": 10,
                        "position": 518,
                        "type": "VV"
                    },
                    {
                        "lemma": "나",
                        "weight": 0.00177268,
                        "id": 11,
                        "position": 524,
                        "type": "EF"
                    },
                    {
                        "lemma": "》",
                        "weight": 1,
                        "id": 12,
                        "position": 527,
                        "type": "SS"
                    },
                    {
                        "lemma": "For",
                        "weight": 1,
                        "id": 13,
                        "position": 530,
                        "type": "SL"
                    },
                    {
                        "lemma": "Whom",
                        "weight": 1,
                        "id": 14,
                        "position": 534,
                        "type": "SL"
                    },
                    {
                        "lemma": "the",
                        "weight": 1,
                        "id": 15,
                        "position": 539,
                        "type": "SL"
                    },
                    {
                        "lemma": "Bell",
                        "weight": 1,
                        "id": 16,
                        "position": 543,
                        "type": "SL"
                    },
                    {
                        "lemma": "Tolls",
                        "weight": 1,
                        "id": 17,
                        "position": 548,
                        "type": "SL"
                    },
                    {
                        "lemma": ".",
                        "weight": 1,
                        "id": 18,
                        "position": 553,
                        "type": "SF"
                    }
                ],
                "tagged": "- 1940년 《[누구를_위하여_종은_울리나] 》For Whom the Bell Tolls.",
                "NE": [
                    {
                        "weight": 0.680672,
                        "end": 2,
                        "id": 0,
                        "text": "1940년",
                        "type": "DT_YEAR",
                        "begin": 1,
                        "common_noun": 0
                    },
                    {
                        "weight": 0.990549,
                        "end": 11,
                        "id": 1,
                        "text": "누구를 위하여 종은 울리나",
                        "type": "AFW_DOCUMENT",
                        "begin": 4,
                        "common_noun": 0
                    },
                    {
                        "weight": 0.251799,
                        "end": 15,
                        "id": 2,
                        "text": "For Whom the",
                        "type": "AFW_DOCUMENT",
                        "begin": 13,
                        "common_noun": 0
                    }
                ],
                "id": 7,
                "text": "- 1940년 《누구를 위하여 종은 울리나》For Whom the Bell Tolls.",
                "word": [
                    {
                        "end": 0,
                        "id": 0,
                        "text": "-",
                        "type": "",
                        "begin": 0
                    },
                    {
                        "end": 2,
                        "id": 1,
                        "text": "1940년",
                        "type": "",
                        "begin": 1
                    },
                    {
                        "end": 5,
                        "id": 2,
                        "text": "《누구를",
                        "type": "",
                        "begin": 3
                    },
                    {
                        "end": 7,
                        "id": 3,
                        "text": "위하여",
                        "type": "",
                        "begin": 6
                    },
                    {
                        "end": 9,
                        "id": 4,
                        "text": "종은",
                        "type": "",
                        "begin": 8
                    },
                    {
                        "end": 13,
                        "id": 5,
                        "text": "울리나》For",
                        "type": "",
                        "begin": 10
                    },
                    {
                        "end": 14,
                        "id": 6,
                        "text": "Whom",
                        "type": "",
                        "begin": 14
                    },
                    {
                        "end": 15,
                        "id": 7,
                        "text": "the",
                        "type": "",
                        "begin": 15
                    },
                    {
                        "end": 16,
                        "id": 8,
                        "text": "Bell",
                        "type": "",
                        "begin": 16
                    },
                    {
                        "end": 18,
                        "id": 9,
                        "text": "Tolls.",
                        "type": "",
                        "begin": 17
                    }
                ],
                "mod_NE": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 7,
                        "text": "1940년",
                        "start_offset": 2,
                        "type": "DT_YEAR",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 23,
                        "text": "누구를 위하여 종은 울리나",
                        "start_offset": 9,
                        "type": "AFW_DOCUMENT",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 36,
                        "text": "For Whom the",
                        "start_offset": 24,
                        "type": "AFW_DOCUMENT",
                        "relation": 0
                    }
                ]
            },
            {
                "phrase_dependency": [
                    {
                        "weight": 0,
                        "end": 0,
                        "key_begin": 0,
                        "id": 0,
                        "label": "X",
                        "text": "-",
                        "head_phrase": 3,
                        "begin": 0,
                        "sub_phrase": [],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 1,
                        "key_begin": 1,
                        "id": 1,
                        "label": "NP",
                        "text": "1950년",
                        "head_phrase": 3,
                        "begin": 1,
                        "sub_phrase": [],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 4,
                        "key_begin": 2,
                        "id": 2,
                        "label": "NP_AJT",
                        "text": "《강 건너 숲속으로》",
                        "head_phrase": 3,
                        "begin": 2,
                        "sub_phrase": [],
                        "element": []
                    },
                    {
                        "weight": 0,
                        "end": 11,
                        "key_begin": 5,
                        "id": 3,
                        "label": "NP",
                        "text": "P#0@X- P#1@NP년 P#2@AJT으로》 Across the River and Into the Trees.",
                        "head_phrase": -1,
                        "begin": 0,
                        "sub_phrase": [
                            0,
                            1,
                            2
                        ],
                        "element": []
                    }
                ],
                "dependency": [
                    {
                        "head": 11,
                        "mod": [],
                        "weight": 0.66501,
                        "id": 0,
                        "text": "-",
                        "label": "X"
                    },
                    {
                        "head": 11,
                        "mod": [],
                        "weight": 0.280293,
                        "id": 1,
                        "text": "1950년",
                        "label": "NP"
                    },
                    {
                        "head": 3,
                        "mod": [],
                        "weight": 0.627813,
                        "id": 2,
                        "text": "《강",
                        "label": "NP"
                    },
                    {
                        "head": 4,
                        "mod": [
                            2
                        ],
                        "weight": 0.458358,
                        "id": 3,
                        "text": "건너",
                        "label": "NP"
                    },
                    {
                        "head": 11,
                        "mod": [
                            3
                        ],
                        "weight": 0.20469,
                        "id": 4,
                        "text": "숲속으로》",
                        "label": "NP_AJT"
                    },
                    {
                        "head": 6,
                        "mod": [],
                        "weight": 0.159777,
                        "id": 5,
                        "text": "Across",
                        "label": "NP"
                    },
                    {
                        "head": 7,
                        "mod": [
                            5
                        ],
                        "weight": 0.0563774,
                        "id": 6,
                        "text": "the",
                        "label": "NP"
                    },
                    {
                        "head": 8,
                        "mod": [
                            6
                        ],
                        "weight": 0.422287,
                        "id": 7,
                        "text": "River",
                        "label": "NP"
                    },
                    {
                        "head": 11,
                        "mod": [
                            7
                        ],
                        "weight": 0.80587,
                        "id": 8,
                        "text": "and",
                        "label": "NP"
                    },
                    {
                        "head": 10,
                        "mod": [],
                        "weight": 0.0947232,
                        "id": 9,
                        "text": "Into",
                        "label": "NP"
                    },
                    {
                        "head": 11,
                        "mod": [
                            9
                        ],
                        "weight": 0.77664,
                        "id": 10,
                        "text": "the",
                        "label": "NP"
                    },
                    {
                        "head": -1,
                        "mod": [
                            0,
                            1,
                            4,
                            8,
                            10
                        ],
                        "weight": 0.00000201952,
                        "id": 11,
                        "text": "Trees.",
                        "label": "NP"
                    }
                ],
                "ZA": [],
                "WSD": [
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 0,
                        "id": 0,
                        "text": "-",
                        "position": 554,
                        "type": "SO",
                        "begin": 0
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 1,
                        "id": 1,
                        "text": "1950",
                        "position": 556,
                        "type": "SN",
                        "begin": 1
                    },
                    {
                        "scode": "02",
                        "weight": 5.5,
                        "end": 2,
                        "id": 2,
                        "text": "년",
                        "position": 560,
                        "type": "NNB",
                        "begin": 2
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 3,
                        "id": 3,
                        "text": "《",
                        "position": 564,
                        "type": "SS",
                        "begin": 3
                    },
                    {
                        "scode": "04",
                        "weight": 1,
                        "end": 4,
                        "id": 4,
                        "text": "강",
                        "position": 567,
                        "type": "NNP",
                        "begin": 4
                    },
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 5,
                        "id": 5,
                        "text": "건너",
                        "position": 571,
                        "type": "VV",
                        "begin": 5
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 6,
                        "id": 6,
                        "text": "어",
                        "position": 574,
                        "type": "EC",
                        "begin": 6
                    },
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 7,
                        "id": 7,
                        "text": "숲속",
                        "position": 578,
                        "type": "NNP",
                        "begin": 7
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 8,
                        "id": 8,
                        "text": "으로",
                        "position": 584,
                        "type": "JKB",
                        "begin": 8
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 9,
                        "id": 9,
                        "text": "》",
                        "position": 590,
                        "type": "SS",
                        "begin": 9
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 10,
                        "id": 10,
                        "text": "Across",
                        "position": 594,
                        "type": "SL",
                        "begin": 10
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 11,
                        "id": 11,
                        "text": "the",
                        "position": 601,
                        "type": "SL",
                        "begin": 11
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 12,
                        "id": 12,
                        "text": "River",
                        "position": 605,
                        "type": "SL",
                        "begin": 12
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 13,
                        "id": 13,
                        "text": "and",
                        "position": 611,
                        "type": "SL",
                        "begin": 13
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 14,
                        "id": 14,
                        "text": "Into",
                        "position": 615,
                        "type": "SL",
                        "begin": 14
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 15,
                        "id": 15,
                        "text": "the",
                        "position": 620,
                        "type": "SL",
                        "begin": 15
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 16,
                        "id": 16,
                        "text": "Trees",
                        "position": 624,
                        "type": "SL",
                        "begin": 16
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 17,
                        "id": 17,
                        "text": ".",
                        "position": 629,
                        "type": "SF",
                        "begin": 17
                    }
                ],
                "chunk": [],
                "reserve_str": "",
                "SRL": [],
                "morp_eval": [
                    {
                        "result": "-/SO",
                        "word_id": 0,
                        "m_end": 0,
                        "id": 0,
                        "target": "-",
                        "m_begin": 0
                    },
                    {
                        "result": "1950/SN+년/NNB",
                        "word_id": 1,
                        "m_end": 2,
                        "id": 1,
                        "target": "1950년",
                        "m_begin": 1
                    },
                    {
                        "result": "《/SS+강/NNG",
                        "word_id": 2,
                        "m_end": 4,
                        "id": 2,
                        "target": "《강",
                        "m_begin": 3
                    },
                    {
                        "result": "건너/VV+어/EC",
                        "word_id": 3,
                        "m_end": 6,
                        "id": 3,
                        "target": "건너",
                        "m_begin": 5
                    },
                    {
                        "result": "숲속/NNG+으로/JKB+》/SS",
                        "word_id": 4,
                        "m_end": 9,
                        "id": 4,
                        "target": "숲속으로》",
                        "m_begin": 7
                    },
                    {
                        "result": "Across/SL",
                        "word_id": 5,
                        "m_end": 10,
                        "id": 5,
                        "target": "Across",
                        "m_begin": 10
                    },
                    {
                        "result": "the/SL",
                        "word_id": 6,
                        "m_end": 11,
                        "id": 6,
                        "target": "the",
                        "m_begin": 11
                    },
                    {
                        "result": "River/SL",
                        "word_id": 7,
                        "m_end": 12,
                        "id": 7,
                        "target": "River",
                        "m_begin": 12
                    },
                    {
                        "result": "and/SL",
                        "word_id": 8,
                        "m_end": 13,
                        "id": 8,
                        "target": "and",
                        "m_begin": 13
                    },
                    {
                        "result": "Into/SL",
                        "word_id": 9,
                        "m_end": 14,
                        "id": 9,
                        "target": "Into",
                        "m_begin": 14
                    },
                    {
                        "result": "the/SL",
                        "word_id": 10,
                        "m_end": 15,
                        "id": 10,
                        "target": "the",
                        "m_begin": 15
                    },
                    {
                        "result": "Trees/SL+./SF",
                        "word_id": 11,
                        "m_end": 17,
                        "id": 11,
                        "target": "Trees.",
                        "m_begin": 16
                    }
                ],
                "SA": [],
                "relation": [],
                "ELU": {
                    "entities": [],
                    "d_entities": [
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "link": 0,
                            "end_offset": 7,
                            "text": "1950년",
                            "start_offset": 2,
                            "source": "DE",
                            "type": "DT_YEAR",
                            "uri": "",
                            "relation": 0
                        },
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "link": 0,
                            "end_offset": 18,
                            "text": "강 건너 숲속으로",
                            "start_offset": 9,
                            "source": "DE",
                            "type": "AFW_DOCUMENT",
                            "uri": "",
                            "relation": 0
                        }
                    ],
                    "merge": [
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": null,
                            "link": 0,
                            "end_offset": 7,
                            "text": "1950년",
                            "start_offset": 2,
                            "source": "DE",
                            "type": "DT_YEAR",
                            "uri": "",
                            "relation": 0
                        },
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": null,
                            "link": 0,
                            "end_offset": 18,
                            "text": "강 건너 숲속으로",
                            "start_offset": 9,
                            "source": "DE",
                            "type": "AFW_DOCUMENT",
                            "uri": "",
                            "relation": 0
                        }
                    ]
                },
                "morp": [
                    {
                        "lemma": "-",
                        "weight": 1,
                        "id": 0,
                        "position": 554,
                        "type": "SO"
                    },
                    {
                        "lemma": "1950",
                        "weight": 1,
                        "id": 1,
                        "position": 556,
                        "type": "SN"
                    },
                    {
                        "lemma": "년",
                        "weight": 0.414343,
                        "id": 2,
                        "position": 560,
                        "type": "NNB"
                    },
                    {
                        "lemma": "《",
                        "weight": 1,
                        "id": 3,
                        "position": 564,
                        "type": "SS"
                    },
                    {
                        "lemma": "강",
                        "weight": 0.0100594,
                        "id": 4,
                        "position": 567,
                        "type": "NNP"
                    },
                    {
                        "lemma": "건너",
                        "weight": 0.00214735,
                        "id": 5,
                        "position": 571,
                        "type": "VV"
                    },
                    {
                        "lemma": "어",
                        "weight": 0.41831,
                        "id": 6,
                        "position": 574,
                        "type": "EC"
                    },
                    {
                        "lemma": "숲속",
                        "weight": 0.05,
                        "id": 7,
                        "position": 578,
                        "type": "NNP"
                    },
                    {
                        "lemma": "으로",
                        "weight": 0.0823853,
                        "id": 8,
                        "position": 584,
                        "type": "JKB"
                    },
                    {
                        "lemma": "》",
                        "weight": 1,
                        "id": 9,
                        "position": 590,
                        "type": "SS"
                    },
                    {
                        "lemma": "Across",
                        "weight": 1,
                        "id": 10,
                        "position": 594,
                        "type": "SL"
                    },
                    {
                        "lemma": "the",
                        "weight": 1,
                        "id": 11,
                        "position": 601,
                        "type": "SL"
                    },
                    {
                        "lemma": "River",
                        "weight": 1,
                        "id": 12,
                        "position": 605,
                        "type": "SL"
                    },
                    {
                        "lemma": "and",
                        "weight": 1,
                        "id": 13,
                        "position": 611,
                        "type": "SL"
                    },
                    {
                        "lemma": "Into",
                        "weight": 1,
                        "id": 14,
                        "position": 615,
                        "type": "SL"
                    },
                    {
                        "lemma": "the",
                        "weight": 1,
                        "id": 15,
                        "position": 620,
                        "type": "SL"
                    },
                    {
                        "lemma": "Trees",
                        "weight": 1,
                        "id": 16,
                        "position": 624,
                        "type": "SL"
                    },
                    {
                        "lemma": ".",
                        "weight": 1,
                        "id": 17,
                        "position": 629,
                        "type": "SF"
                    }
                ],
                "tagged": "- 1950년 《강 건너 숲속으로》 Across the River and Into the Trees.",
                "NE": [
                    {
                        "weight": 0.707948,
                        "end": 2,
                        "id": 0,
                        "text": "1950년",
                        "type": "DT_YEAR",
                        "begin": 1,
                        "common_noun": 0
                    },
                    {
                        "weight": 0.381219,
                        "end": 8,
                        "id": 1,
                        "text": "강 건너 숲속으로",
                        "type": "AFW_DOCUMENT",
                        "begin": 4,
                        "common_noun": 0
                    }
                ],
                "id": 8,
                "text": "- 1950년 《강 건너 숲속으로》 Across the River and Into the Trees.",
                "word": [
                    {
                        "end": 0,
                        "id": 0,
                        "text": "-",
                        "type": "",
                        "begin": 0
                    },
                    {
                        "end": 2,
                        "id": 1,
                        "text": "1950년",
                        "type": "",
                        "begin": 1
                    },
                    {
                        "end": 4,
                        "id": 2,
                        "text": "《강",
                        "type": "",
                        "begin": 3
                    },
                    {
                        "end": 6,
                        "id": 3,
                        "text": "건너",
                        "type": "",
                        "begin": 5
                    },
                    {
                        "end": 9,
                        "id": 4,
                        "text": "숲속으로》",
                        "type": "",
                        "begin": 7
                    },
                    {
                        "end": 10,
                        "id": 5,
                        "text": "Across",
                        "type": "",
                        "begin": 10
                    },
                    {
                        "end": 11,
                        "id": 6,
                        "text": "the",
                        "type": "",
                        "begin": 11
                    },
                    {
                        "end": 12,
                        "id": 7,
                        "text": "River",
                        "type": "",
                        "begin": 12
                    },
                    {
                        "end": 13,
                        "id": 8,
                        "text": "and",
                        "type": "",
                        "begin": 13
                    },
                    {
                        "end": 14,
                        "id": 9,
                        "text": "Into",
                        "type": "",
                        "begin": 14
                    },
                    {
                        "end": 15,
                        "id": 10,
                        "text": "the",
                        "type": "",
                        "begin": 15
                    },
                    {
                        "end": 17,
                        "id": 11,
                        "text": "Trees.",
                        "type": "",
                        "begin": 16
                    }
                ],
                "mod_NE": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 7,
                        "text": "1950년",
                        "start_offset": 2,
                        "type": "DT_YEAR",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 18,
                        "text": "강 건너 숲속으로",
                        "start_offset": 9,
                        "type": "AFW_DOCUMENT",
                        "relation": 0
                    }
                ]
            },
            {
                "phrase_dependency": [
                    {
                        "weight": 0,
                        "end": 9,
                        "key_begin": 0,
                        "id": 0,
                        "label": "NP",
                        "text": "- 1952년 《노인과 바다》 The Old Man and the Sea.",
                        "head_phrase": -1,
                        "begin": 0,
                        "sub_phrase": [],
                        "element": []
                    }
                ],
                "dependency": [
                    {
                        "head": 9,
                        "mod": [],
                        "weight": 0.66501,
                        "id": 0,
                        "text": "-",
                        "label": "X"
                    },
                    {
                        "head": 9,
                        "mod": [],
                        "weight": 0.254698,
                        "id": 1,
                        "text": "1952년",
                        "label": "NP"
                    },
                    {
                        "head": 3,
                        "mod": [],
                        "weight": 0.702344,
                        "id": 2,
                        "text": "《노인과",
                        "label": "NP_CNJ"
                    },
                    {
                        "head": 9,
                        "mod": [
                            2
                        ],
                        "weight": 0.70341,
                        "id": 3,
                        "text": "바다》",
                        "label": "NP"
                    },
                    {
                        "head": 5,
                        "mod": [],
                        "weight": 0.168505,
                        "id": 4,
                        "text": "The",
                        "label": "NP"
                    },
                    {
                        "head": 6,
                        "mod": [
                            4
                        ],
                        "weight": 0.018956,
                        "id": 5,
                        "text": "Old",
                        "label": "NP"
                    },
                    {
                        "head": 7,
                        "mod": [
                            5
                        ],
                        "weight": 0.517177,
                        "id": 6,
                        "text": "Man",
                        "label": "NP"
                    },
                    {
                        "head": 9,
                        "mod": [
                            6
                        ],
                        "weight": 0.81094,
                        "id": 7,
                        "text": "and",
                        "label": "NP"
                    },
                    {
                        "head": 9,
                        "mod": [],
                        "weight": 0.791522,
                        "id": 8,
                        "text": "the",
                        "label": "NP"
                    },
                    {
                        "head": -1,
                        "mod": [
                            0,
                            1,
                            3,
                            7,
                            8
                        ],
                        "weight": 0.0000725042,
                        "id": 9,
                        "text": "Sea.",
                        "label": "NP"
                    }
                ],
                "ZA": [],
                "WSD": [
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 0,
                        "id": 0,
                        "text": "-",
                        "position": 630,
                        "type": "SO",
                        "begin": 0
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 1,
                        "id": 1,
                        "text": "1952",
                        "position": 632,
                        "type": "SN",
                        "begin": 1
                    },
                    {
                        "scode": "02",
                        "weight": 3.2,
                        "end": 2,
                        "id": 2,
                        "text": "년",
                        "position": 636,
                        "type": "NNB",
                        "begin": 2
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 3,
                        "id": 3,
                        "text": "《",
                        "position": 640,
                        "type": "SS",
                        "begin": 3
                    },
                    {
                        "scode": "01",
                        "weight": 2.2,
                        "end": 4,
                        "id": 4,
                        "text": "노인",
                        "position": 643,
                        "type": "NNG",
                        "begin": 4
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 5,
                        "id": 5,
                        "text": "과",
                        "position": 649,
                        "type": "JC",
                        "begin": 5
                    },
                    {
                        "scode": "00",
                        "weight": 0,
                        "end": 6,
                        "id": 6,
                        "text": "바다",
                        "position": 653,
                        "type": "NNG",
                        "begin": 6
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 7,
                        "id": 7,
                        "text": "》",
                        "position": 659,
                        "type": "SS",
                        "begin": 7
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 8,
                        "id": 8,
                        "text": "The",
                        "position": 663,
                        "type": "SL",
                        "begin": 8
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 9,
                        "id": 9,
                        "text": "Old",
                        "position": 667,
                        "type": "SL",
                        "begin": 9
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 10,
                        "id": 10,
                        "text": "Man",
                        "position": 671,
                        "type": "SL",
                        "begin": 10
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 11,
                        "id": 11,
                        "text": "and",
                        "position": 675,
                        "type": "SL",
                        "begin": 11
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 12,
                        "id": 12,
                        "text": "the",
                        "position": 679,
                        "type": "SL",
                        "begin": 12
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 13,
                        "id": 13,
                        "text": "Sea",
                        "position": 683,
                        "type": "SL",
                        "begin": 13
                    },
                    {
                        "scode": "00",
                        "weight": 1,
                        "end": 14,
                        "id": 14,
                        "text": ".",
                        "position": 686,
                        "type": "SF",
                        "begin": 14
                    }
                ],
                "chunk": [],
                "reserve_str": "",
                "SRL": [],
                "morp_eval": [
                    {
                        "result": "-/SO",
                        "word_id": 0,
                        "m_end": 0,
                        "id": 0,
                        "target": "-",
                        "m_begin": 0
                    },
                    {
                        "result": "1952/SN+년/NNB",
                        "word_id": 1,
                        "m_end": 2,
                        "id": 1,
                        "target": "1952년",
                        "m_begin": 1
                    },
                    {
                        "result": "《/SS+노인/NNG+과/JC",
                        "word_id": 2,
                        "m_end": 5,
                        "id": 2,
                        "target": "《노인과",
                        "m_begin": 3
                    },
                    {
                        "result": "바다/NNG+》/SS",
                        "word_id": 3,
                        "m_end": 7,
                        "id": 3,
                        "target": "바다》",
                        "m_begin": 6
                    },
                    {
                        "result": "The/SL",
                        "word_id": 4,
                        "m_end": 8,
                        "id": 4,
                        "target": "The",
                        "m_begin": 8
                    },
                    {
                        "result": "Old/SL",
                        "word_id": 5,
                        "m_end": 9,
                        "id": 5,
                        "target": "Old",
                        "m_begin": 9
                    },
                    {
                        "result": "Man/SL",
                        "word_id": 6,
                        "m_end": 10,
                        "id": 6,
                        "target": "Man",
                        "m_begin": 10
                    },
                    {
                        "result": "and/SL",
                        "word_id": 7,
                        "m_end": 11,
                        "id": 7,
                        "target": "and",
                        "m_begin": 11
                    },
                    {
                        "result": "the/SL",
                        "word_id": 8,
                        "m_end": 12,
                        "id": 8,
                        "target": "the",
                        "m_begin": 12
                    },
                    {
                        "result": "Sea/SL+./SF",
                        "word_id": 9,
                        "m_end": 14,
                        "id": 9,
                        "target": "Sea.",
                        "m_begin": 13
                    }
                ],
                "SA": [],
                "relation": [],
                "ELU": {
                    "entities": [
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": "The_Old_Man_and_the_Sea",
                            "link": 0,
                            "end_offset": 15,
                            "text": "노인과 바다",
                            "start_offset": 9,
                            "source": "NER",
                            "type": "AFW_DOCUMENT",
                            "uri": "http://ko.dbpedia.org/resource/노인과_바다",
                            "relation": 0
                        }
                    ],
                    "d_entities": [
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "link": 0,
                            "end_offset": 7,
                            "text": "1952년",
                            "start_offset": 2,
                            "source": "DE",
                            "type": "DT_YEAR",
                            "uri": "",
                            "relation": 0
                        }
                    ],
                    "merge": [
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": null,
                            "link": 0,
                            "end_offset": 7,
                            "text": "1952년",
                            "start_offset": 2,
                            "source": "DE",
                            "type": "DT_YEAR",
                            "uri": "",
                            "relation": 0
                        },
                        {
                            "score": 0,
                            "indirect": 0,
                            "confidence": 0,
                            "en_entity": "The_Old_Man_and_the_Sea",
                            "link": 0,
                            "end_offset": 15,
                            "text": "노인과 바다",
                            "start_offset": 9,
                            "source": "NER",
                            "type": "AFW_DOCUMENT",
                            "uri": "http://ko.dbpedia.org/resource/노인과_바다",
                            "relation": 0
                        }
                    ]
                },
                "morp": [
                    {
                        "lemma": "-",
                        "weight": 1,
                        "id": 0,
                        "position": 630,
                        "type": "SO"
                    },
                    {
                        "lemma": "1952",
                        "weight": 1,
                        "id": 1,
                        "position": 632,
                        "type": "SN"
                    },
                    {
                        "lemma": "년",
                        "weight": 0.414343,
                        "id": 2,
                        "position": 636,
                        "type": "NNB"
                    },
                    {
                        "lemma": "《",
                        "weight": 1,
                        "id": 3,
                        "position": 640,
                        "type": "SS"
                    },
                    {
                        "lemma": "노인",
                        "weight": 0.9,
                        "id": 4,
                        "position": 643,
                        "type": "NNG"
                    },
                    {
                        "lemma": "과",
                        "weight": 0.017569,
                        "id": 5,
                        "position": 649,
                        "type": "JC"
                    },
                    {
                        "lemma": "바다",
                        "weight": 0.774346,
                        "id": 6,
                        "position": 653,
                        "type": "NNG"
                    },
                    {
                        "lemma": "》",
                        "weight": 1,
                        "id": 7,
                        "position": 659,
                        "type": "SS"
                    },
                    {
                        "lemma": "The",
                        "weight": 1,
                        "id": 8,
                        "position": 663,
                        "type": "SL"
                    },
                    {
                        "lemma": "Old",
                        "weight": 1,
                        "id": 9,
                        "position": 667,
                        "type": "SL"
                    },
                    {
                        "lemma": "Man",
                        "weight": 1,
                        "id": 10,
                        "position": 671,
                        "type": "SL"
                    },
                    {
                        "lemma": "and",
                        "weight": 1,
                        "id": 11,
                        "position": 675,
                        "type": "SL"
                    },
                    {
                        "lemma": "the",
                        "weight": 1,
                        "id": 12,
                        "position": 679,
                        "type": "SL"
                    },
                    {
                        "lemma": "Sea",
                        "weight": 1,
                        "id": 13,
                        "position": 683,
                        "type": "SL"
                    },
                    {
                        "lemma": ".",
                        "weight": 1,
                        "id": 14,
                        "position": 686,
                        "type": "SF"
                    }
                ],
                "tagged": "- 1952년 《[노인과_바다] 》 The Old Man and the Sea.",
                "NE": [
                    {
                        "weight": 0.643216,
                        "end": 2,
                        "id": 0,
                        "text": "1952년",
                        "type": "DT_YEAR",
                        "begin": 1,
                        "common_noun": 0
                    },
                    {
                        "weight": 0.995433,
                        "end": 6,
                        "id": 1,
                        "text": "노인과 바다",
                        "type": "AFW_DOCUMENT",
                        "begin": 4,
                        "common_noun": 0
                    }
                ],
                "id": 9,
                "text": "- 1952년 《노인과 바다》 The Old Man and the Sea.",
                "word": [
                    {
                        "end": 0,
                        "id": 0,
                        "text": "-",
                        "type": "",
                        "begin": 0
                    },
                    {
                        "end": 2,
                        "id": 1,
                        "text": "1952년",
                        "type": "",
                        "begin": 1
                    },
                    {
                        "end": 5,
                        "id": 2,
                        "text": "《노인과",
                        "type": "",
                        "begin": 3
                    },
                    {
                        "end": 7,
                        "id": 3,
                        "text": "바다》",
                        "type": "",
                        "begin": 6
                    },
                    {
                        "end": 8,
                        "id": 4,
                        "text": "The",
                        "type": "",
                        "begin": 8
                    },
                    {
                        "end": 9,
                        "id": 5,
                        "text": "Old",
                        "type": "",
                        "begin": 9
                    },
                    {
                        "end": 10,
                        "id": 6,
                        "text": "Man",
                        "type": "",
                        "begin": 10
                    },
                    {
                        "end": 11,
                        "id": 7,
                        "text": "and",
                        "type": "",
                        "begin": 11
                    },
                    {
                        "end": 12,
                        "id": 8,
                        "text": "the",
                        "type": "",
                        "begin": 12
                    },
                    {
                        "end": 14,
                        "id": 9,
                        "text": "Sea.",
                        "type": "",
                        "begin": 13
                    }
                ],
                "mod_NE": [
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 7,
                        "text": "1952년",
                        "start_offset": 2,
                        "type": "DT_YEAR",
                        "relation": 0
                    },
                    {
                        "score": 0,
                        "indirect": 0,
                        "confidence": 0,
                        "link": 0,
                        "end_offset": 15,
                        "text": "노인과 바다",
                        "start_offset": 9,
                        "type": "AFW_DOCUMENT",
                        "relation": 0
                    }
                ]
            }
        ]
    },
    "PL": {
        "triples": [
            {
                "p": "deathPlace",
                "s": "어니스트_헤밍웨이/Ernest_Hemingway",
                "stc": "어니스트_헤밍웨이 는 미국 의 소설가 이자 저널리스트 이다.",
                "src": "B2K+",
                "sco": 1,
                "o": "미국/United_States"
            },
            {
                "p": "award",
                "s": "어니스트_헤밍웨이/Ernest_Hemingway",
                "stc": "어니스트_헤밍웨이 1854년 노벨_문학상 을 수상하였다.",
                "src": "B2K+",
                "sco": 1,
                "o": "노벨_문학상/Nobel_Prize_in_Literature"
            },
            {
                "p": "notableWork",
                "s": "어니스트_헤밍웨이/Ernest_Hemingway",
                "stc": "어니스트_헤밍웨이 - 1929년 《무기여_잘_있거라 》 A Farewell to Arms.",
                "src": "B2K+",
                "sco": 1,
                "o": "무기여_잘_있거라/A_Farewell_to_Arms"
            },
            {
                "p": "notableWork",
                "s": "어니스트_헤밍웨이/Ernest_Hemingway",
                "stc": "어니스트_헤밍웨이 - 1952년 《노인과_바다 》 The Old Man and the Sea.",
                "src": "B2K+",
                "sco": 1,
                "o": "노인과_바다/The_Old_Man_and_the_Sea"
            },
            {
                "p": "notableWork",
                "s": "어니스트_헤밍웨이/Ernest_Hemingway",
                "stc": "어니스트_헤밍웨이 - 1940년 《누구를_위하여_종은_울리나 》For Whom the Bell Tolls.",
                "src": "B2K+",
                "sco": 1,
                "o": "누구를_위하여_종은_울리나/For_Whom_the_Bell_Tolls"
            },
            {
                "p": "occupation",
                "s": "어니스트_헤밍웨이/Ernest_Hemingway",
                "stc": " << 어니스트_헤밍웨이 >> 는 1899년 7월 21일  << 일리노이_주 >> 에서 태어났다.",
                "src": "CNN",
                "sco": 0.9996414184570312,
                "o": "저널리스트/Journalist"
            },
            {
                "p": "occupation",
                "s": "어니스트_헤밍웨이/Ernest_Hemingway",
                "stc": " << 어니스트_헤밍웨이 >> 는  << 미국 >> 의  << 소설가 >> 이자  << 저널리스트 >> 이다.",
                "src": "CNN",
                "sco": 0.9977624416351318,
                "o": "소설가/Novelist"
            },
            {
                "p": "spouse",
                "s": "마사_겔혼/Martha_Gellhorn",
                "stc": " << 어니스트_헤밍웨이 >> 는  << 미국 >> 의  << 소설가 >> 이자  << 저널리스트 >> 이다.",
                "src": "CNN",
                "sco": 0.8975004553794861,
                "o": "어니스트_헤밍웨이/Ernest_Hemingway"
            },
            {
                "p": "birthPlace",
                "s": "어니스트_헤밍웨이/Ernest_Hemingway",
                "stc": " << 어니스트_헤밍웨이 >> 는  << 미국 >> 의  << 소설가 >> 이자  << 저널리스트 >> 이다.",
                "src": "CNN",
                "sco": 0.8922690749168396,
                "o": "일리노이_주/Illinois"
            },
            {
                "p": "spouse",
                "s": "어니스트_헤밍웨이/Ernest_Hemingway",
                "stc": " << 어니스트_헤밍웨이 >> 는  << 미국 >> 의  << 소설가 >> 이자  << 저널리스트 >> 이다.",
                "src": "CNN",
                "sco": 0.7955827116966248,
                "o": "마사_겔혼/Martha_Gellhorn"
            },
            {
                "p": "deathPlace",
                "s": "어니스트_헤밍웨이/Ernest_Hemingway",
                "stc": "어니스트_헤밍웨이 1961년 아이다호_주 에서 엽총으로 62세의 나이에 자살했다.",
                "src": "B2K+",
                "sco": 0.385826488495,
                "o": "아이다호_주/Idaho"
            },
            {
                "p": "birthPlace",
                "s": "어니스트_헤밍웨이/Ernest_Hemingway",
                "stc": " << 어니스트_헤밍웨이 >> 는 1899년 7월 21일  << 일리노이_주 >> 에서 태어났다.",
                "src": "CNN",
                "sco": 0.3750193417072296,
                "o": "미국/United_States"
            },
            {
                "p": "birthPlace",
                "s": "어니스트_헤밍웨이/Ernest_Hemingway",
                "stc": "어니스트_헤밍웨이 는 1899년 7월 21일 일리노이_주 에서 태어났다.",
                "src": "B2K+",
                "sco": 0.029859383237,
                "o": "일리노이_주/Illinois"
            }
        ]
    }
};
var output_list = [output_1];
