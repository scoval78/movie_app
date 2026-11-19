

/*function Myname(){
  return(<h3>Меня зовут Игорь!!!</h3>)
}n
*/
function Food({name}){
  
  return (<h3>Картошку</h3>)
}

/*function Food1({name}){
  return (<h3> Я люблю кушать {name}</h3>)
}
*/
const foodILike = [
{
  'name':'борщ',
  'image':'https://2recepta.com/recept/borshh.jpg'
},
{
  'name':'стайк',
  'image':'https://2recepta.com/recept/staik.jpg'
}
]




  
     function renderFood(dish) {
      return <Food name={dish.name} picture={dish.image} />
     }

     function App(){
      return (
        <div>
          {console.log(foodILike.map(renderFood))}
          {foodILike.map(renderFood)}
        </div>
      )
     }
  


export default App;
