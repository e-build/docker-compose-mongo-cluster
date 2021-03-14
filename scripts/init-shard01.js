rs.initiate(
    {
        _id: "shard01",
        version: 1,
        writeConcernMajorityJournalDefault: true,
        configsvr: false,
        members: [
            {
                _id: 0,
                host : "shard01a:27018",
                arbiterOnly : false,        // 중재자 여부
                buildIndexes : true,
                hidden : false,             // true 일 경우
                priority : 1,               // 클수록 적. 0은 primary 불가
                // tags : { },
                slaveDelay : NumberLong(0), // 멤버의 데이터 복제를 지연시킴. 지연된 구성원은 과거 어느 시점의 데이터 상태를 반영하는 복사본을 설정시간만큼 유지.
                votes : 1                   // primary 선택에 던지는 투표 수.
            },
            {
                _id: 1,
                host : "shard01b:27018",
                arbiterOnly : false,
                buildIndexes : true,
                hidden : false,
                priority : 1,
                slaveDelay : NumberLong(0),
                votes : 1
            },
            {
                _id: 2,
                host : "shard01c:27018",
                arbiterOnly : false,
                buildIndexes : true,
                hidden : false,
                priority : 1,
                slaveDelay : NumberLong(0),
                votes : 1
            }
        ],
        settings : {
            chainingAllowed : true,             // false 이면 secondary가 primary 데이터베이스에서만 복제 할 수 있도록 함
            heartbeatIntervalMillis : 2000,     // The frequency in milliseconds of the heartbeats.
            heartbeatTimeoutSecs : 10,          // 복제본 세트 멤버가 서로의 성공적인 하트 비트를 기다리는 시간 (초)
            electionTimeoutMillis : 10000,      // 복제본 세트의 기본 세트에 도달 할 수 없는 경우 감지하는 시간 제한 (밀리 초)
            catchUpTimeoutMillis : 2000,        // 새로 선택된 primary 더 최근 쓰기가 있을 수있는 다른 복제 세트 구성원과 동기화 (추적)하는 시간 제한 (밀리 초)
            getLastErrorModes : {               // 사용자 정의 쓰기 문제를 정의하는 데 사용

            },
            getLastErrorDefaults : {            // 복제본 세트에 대한 쓰기 문제를 지정
                w : 1,                 // 0,1,2,... or majority
                wtimeout : 0
            },
        }
    }
)