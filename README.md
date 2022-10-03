# nodejs-cache
# Important terminologies which is use in this project 
## node-cache
What is node cache?
Node-cache is an in-memory caching package similar to memcached. 
In this project you see the demo implementation of node-cache,  Limit of time is 10 sec

## myCache.get( key )

Gets a saved value from the cache. Returns a undefined if not found or expired.

## Store a key (SET):
myCache.set( key, val, [ ttl ] )
Sets a key value pair. It is possible to define a ttl (in seconds). Returns true on success.

## Has key (HAS)
myCache.has( key )
Returns boolean indicating if the key is cached.

## Statistics (STATS)
myCache.getStats()
Returns the statistics.
myCache.getStats();
    ```
        {
            keys: 0,    // global key count
            hits: 0,    // global hit count
            misses: 0,  // global miss count
            ksize: 0,   // global key size count in approximately bytes
            vsize: 0    // global value size count in approximately bytes
        }
   ```
