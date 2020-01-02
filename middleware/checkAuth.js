export default async function({ redirect, $axios, store }){
    if(process.client){
        try {
            $axios.setHeader('authorization', window.localStorage.getItem('token'))
            let { data } = await $axios.get('/api/auth/user')
            // store.state = data
            console.log(data)    
        } catch (error) {
            console.log(error)    
        }
        
    }
}

// export default async function(contex){
//     if(process.client){
//         console.log(contex)
//     }
// }
