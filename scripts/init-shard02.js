rs.initiate(
    {
        _id: "shard02",
        version: 1,
        writeConcernMajorityJournalDefault: true,
        configsvr: false,
        members: [
            {
                _id: 0,
                host : "shard02a:27019",
                arbiterOnly : false,
                buildIndexes : true,
                hidden : false,
                priority : 1,
                slaveDelay : NumberLong(0),
                votes : 1
            },
            {
                _id: 1,
                host : "shard02b:27019",
                arbiterOnly : false,
                buildIndexes : true,
                hidden : false,
                priority : 1,
                slaveDelay : NumberLong(0),
                votes : 1
            },
            {
                _id: 2,
                host : "shard02c:27019",
                arbiterOnly : false,
                buildIndexes : true,
                hidden : false,
                priority : 1,
                slaveDelay : NumberLong(0),
                votes : 1
            }
        ],
        settings : {
            chainingAllowed : true,
            heartbeatIntervalMillis : 2000,
            heartbeatTimeoutSecs : 10,
            electionTimeoutMillis : 10000,
            catchUpTimeoutMillis : 2000,
            getLastErrorModes : {

            },
            getLastErrorDefaults : {
                w : 1,
                wtimeout : 0
            }
        }
    }

)


