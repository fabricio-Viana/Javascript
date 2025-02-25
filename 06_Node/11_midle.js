const passo1 = (ctx, next)=>{
    ctx.valor1 = 'midi1'
   next()
}

const passo2 = (ctx,next)=>{
    ctx.valor2 ='midi2'
    next()
}
const passo3 = (ctx)=>{
    ctx.valor3 = 'midi3'
}

const exec = (ctx, ...midlewares)=>{
    const execPasso = indice=>{
        midlewares || indice , midlewares.length &&
        midlewares[indice](ctx, () => execPasso(indice+1))
        
    }
    execPasso(0)
}

const ctx = {}

exec(ctx,  passo1,passo2,passo3)

console.log(ctx)