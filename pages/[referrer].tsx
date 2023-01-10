import IsComing from './index'

export default IsComing

export async function getServerSideProps(ctx:any){
	console.log(ctx.query)
	return{
		props: {
			_referrer: ctx?.query?.referrer || null
		}
	}
}