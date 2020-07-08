/*
 * Cluster
 * -> 병렬처리를 위해서 제공되는 모듈
 *    
 *    작업의 단위 : worker
 *    
 *    cluster 모듈 생성 후 fork 메서드를 호출하면 worker 하나가 생성되며
 *    필요한 만큼 worker를 생성해 병렬 처리를 하면된다
 *    
 *    cpu 코어 개수만큼 워커를 발생시킨다
 */
var cluster = require("cluster");

/*
<<<Round Robin 방식으로 스케쥴링>>>
node.js v0.12 이전 버전에서 worker들에게 균일하게 load balancing이 안되는 문제가 있었는데 그 이슈를 해결한 방법
(순차적으로 하나씩 작업을 배분하는 방법)
*/
cluster.shedualingPolicy = cluster.SCHED_RR;

//마스터인지 아닌지 확인
if(cluster.isMaster == true){
	//워커 발생
	//3개를 병렬로 처리하겠다
	cluster.fork();
	cluster.fork();
	cluster.fork();
	
	//online 메소드가 실행될때
	cluster.on('online',function(worker){
		for(var i = 0; i<10; i++){
			console.log(worker.process.pid,"동작");
		}
	});
}