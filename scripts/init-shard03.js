rs.initiate(
    {
        _id: "shard03",
        version: 1,
        writeConcernMajorityJournalDefault: true,
        configsvr: false,
        members: [
            {
                _id: 0,
                host : "shard03a:27020",
                arbiterOnly : false,
                buildIndexes : true,
                hidden : false,
                priority : 1,
                slaveDelay : NumberLong(0),
                votes : 1
            },
            {
                _id: 1,
                host : "shard03b:27020",
                arbiterOnly : false,
                buildIndexes : true,
                hidden : false,
                priority : 1,
                slaveDelay : NumberLong(0),
                votes : 1
            },
            {
                _id: 2,
                host : "shard03c:27020",
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
