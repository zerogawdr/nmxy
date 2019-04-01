<template>
    <div class="container">
		<p ref="p" class="massage">{{massage}}</p>
			<ul 
			id="top"
			@mouseenter="stopAuto"
			@mouseleave="Auto"
			>
	
					<transition-group
					 tag="li"
					  name="scal" 
					  enter-active-class="animated fadeIn"
					  leave-active-class="animted fadeOut"
					  @after-enter='playing=false'
					  >
						<div	
						v-for="(item,index) in images"
						:key='item'
						v-show="imgIndex===index"
						><img :src="item"/>   
						</div>
                    </transition-group>
			
				<span 
                class="left1"
                @click="left"
                ><</span>
				<span
                 class="right1"
                 @click="right"
                 >></span>
				<p>
					<a  href="#" 
                    :class="{active:index==imgIndex?true:false}"
                    v-for="(item,index) in nums"
                    :key="index"
					@click="changeImg(index)"
                    ></a>				
				</p>
			</ul>
		</div>
</template>

<script>
import img1 from '../assets/images/1.png'
import img2 from '../assets/images/2.png'
import img3 from '../assets/images/3.png'
import img4 from '../assets/images/4.png'
import img5 from '../assets/images/5.png'
import '../assets/css/animate.css'
    export default {
        data() {
            return {
                images:[
                    img1,img2,img3,img4,img5,
                ],
				imgIndex:0,
				playing:false,
				timer:null,
				massage:"一个水货的自动变色轮播图",
				title:null
            }
		},
		mounted() {
					this.Auto();
					// console.log(this.$refs.p)
					setInterval(() => {
						this.$refs.p.style.color="#"+Math.random().toString(16).slice(2,8)
						// console.log(this.$refs.p.style.color="#"+Math.random().toString(16).slice(2,8))
					}, 1000);
		},
        computed: {
            nums(){
                 return this.images.length
            },
        },
        methods: {
            right(){       
				if(this.playing){
					return
				}else{
					this.playing=true
					if(this.imgIndex>=this.images.length-1) this.imgIndex=-1;
					this.imgIndex++
				}
                
            },
            left(){          
				if(this.playing){
					return
				} else{
					this.playing=true
					if(this.imgIndex<=0) this.imgIndex=this.images.length
             	   this.imgIndex--
				}
                
			},
			changeImg(index){
				this.imgIndex=index								
			},
			stopAuto(){
				clearInterval(this.timer)
			},
			Auto(){
				this.timer=setInterval(()=>{
					this.right()					
					},1000)
				this.title=setInterval(() => {
					const firstTitle=this.massage.substring(0,1);
					const endTitle=this.massage.substring(1);
					this.massage=endTitle+firstTitle
				}, 400);
			}
		},

       
    }
</script>

<style scoped>
			body,ul,p{
				margin: 0;
				padding: 0;
			}
			li{
				list-style: none;
			}
			
			.container{
				width: 520px;
				height: 600px;
				/*border: 1px black solid;*/
				margin: 50px auto;
			}
			.container #top{
				width: 100%;
				height: 280px;
				/*border: 1px red solid;*/
				position: relative;
				overflow: hidden;
			}
			.container #top li{
				width: 700%;
				height: 100%;
				position: absolute;
				/*border: 1px red solid;*/
				left: 0;
			}
			.container #top li img{
				width: 520px;
				float: left;
			}
			.container #top span{
				position: absolute;
				width: 50px;
				height: 28px;
				background-color: black;
				opacity: 0.3;
				border-radius:28px;
				font-size: 28px;
				line-height: 28px;			
				font-weight: bold;
				color: white;
				/*border: 1px saddlebrown solid;*/
				cursor: pointer;
			}
			 .left1{
				left: -20px;
				top: calc(50% - 14px);
				text-indent: 25px;
			}
			 .right1{
				right: -20px;
				top: calc(50% - 14px);
				text-indent: 10px;
			}
			.container #top p{
				position: absolute;
				bottom: 10px;
				left: calc(50% - 40px);
				width: 80px;
				height: 15px;
				opacity: 0.3;
				border-radius:15px ;
				background-color: black;
				display: flex;
				justify-content: space-around;
				align-items: center;
				cursor: pointer;
				
				
				
			}
			.container #top p a{				
				width: 8px;
				height: 8px;
				border-radius:50% ;
				background: white;
			}
            .container #top p a.active{
               background: deeppink;
            }
			.massage{
				text-align: center;

			}
		/* .scal-enter,.scal-leave-to{
			opacity: 0;
		}
		.scal-enter-active,.scal-leave-active{
			transition: all .3s
		}
		.scal-leave,.scal-enter-to{
			opacity: 1;
		} */

</style>