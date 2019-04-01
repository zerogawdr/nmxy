import imgFish from '../assets/images/loading-fish.gif'
import imgLine from '../assets/images/loading-line.gif'
import imgNormal from '../assets/images/loading-normal.gif'
// export default {
//     bind:function(el,binding){
//         console.log(binding)
//         if(binding.value){
//             const img=document.createElement('img');
//             img.src=imgNormal;
//             img.style.position='absolute'
//             img.style.left=0;
//             img.style.top=0;
//             img.style.width='inherit';
//             img.style.height='inherit';
//             el.appendChild(img)
//         }

//     },
//     update(el,binding){
//         if(binding.value){
//             const img=document.createElement('img');
//             img.src=imgNormal;
//             img.style.position='absolute'
//             img.style.left=0;
//             img.style.top=0;
//             img.style.width='inherit';
//             img.style.height='inherit';
//             el.appendChild(img)
//         }else{
//             const img=el.querySelector('img');
//             if(img){
//                 el.removeChild(img)
//             }
//         }
//     }
// }

export default function(el,binding){
    if(binding.value){
        const img=document.createElement('img');
        // img.src=imgNormal;
        if(binding.modifiers.fish){
            img.src=imgFish
        } else if(binding.modifiers.line){
            img.src=imgLine
        } else {
            img.src=imgNormal
        }
        img.style.position='absolute'
        img.style.left=0;
        img.style.top=0;
        img.style.width='inherit';
        img.style.height='inherit';
        el.appendChild(img)
    }else{
        const img=el.querySelector('img');
        if(img){
            el.removeChild(img)
        }
    }
}