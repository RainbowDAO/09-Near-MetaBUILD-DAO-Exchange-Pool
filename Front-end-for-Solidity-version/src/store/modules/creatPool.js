
import getContract from '@/abi/index'

		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('creatPool', rootState.app.web3)
		}
		const state = {};
		const mutations = {};
	 const actions = { 
detonate ({rootState}  ){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.detonate().estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.detonate().send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
init ({rootState},{ seed,token,user }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.init(seed,token,user).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.init(seed,token,user).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
owner ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.owner().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
pool ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.pool().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
poolOwner ({rootState},{ param0 }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.poolOwner(param0).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
renounceOwnership ({rootState}  ){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.renounceOwnership().estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.renounceOwnership().send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
setExchangeRate ({rootState},{ rate }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.setExchangeRate(rate).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.setExchangeRate(rate).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
setLockTime ({rootState},{ lockTime }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.setLockTime(lockTime).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.setLockTime(lockTime).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
transferOwnership ({rootState},{ newOwner }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.transferOwnership(newOwner).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.transferOwnership(newOwner).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
}
			export default {
			namespaced: true,
			mutations,
			state,
			actions
		}
	