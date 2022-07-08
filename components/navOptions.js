
import React from 'react'
import { FlatList, TouchableOpacity, Text } from 'react-native'
const data = [{
    
    id:"123",
    title:"Get a ride",
    image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimageio.forbes.com%2Fspecials-images%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3Fformat%3Djpg%26crop%3D4560%2C2565%2Cx790%2Cy784%2Csafe%26width%3D1200&imgrefurl=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fjimgorzelany%2F2019%2F07%2F23%2Fhere-are-the-coolest-new-cars-for-2020%2F&tbnid=5eEKpUl07DZLBM&vet=12ahUKEwiy18285en4AhVRPs0KHddgDK4QMygCegUIARDfAQ..i&docid=HZLLyFhoQjvNCM&w=1200&h=675&q=car%20images&ved=2ahUKEwiy18285en4AhVRPs0KHddgDK4QMygCegUIARDfAQ",
    screen:"MapScreen",
},
{
    id:"456",
    title:"Order Food",
    image: require("../assets/images/food.jpg"),
    screen:"FoodScreen",
},
{
    id:"789",
    title:"Drive my Car",
    image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.theconversation.com%2Ffiles%2F447426%2Foriginal%2Ffile-20220220-22-1vv5nrp.jpg%3Fixlib%3Drb-1.1.0%26rect%3D0%252C838%252C5000%252C2499%26q%3D45%26auto%3Dformat%26w%3D668%26h%3D324%26fit%3Dcrop&imgrefurl=https%3A%2F%2Ftheconversation.com%2Fus%2Ftopics%2Fdriver-safety-13479&tbnid=Cc-h5kr548MAEM&vet=12ahUKEwja0bSC5-n4AhVi8lMKHW-vBXgQMygdegUIARClAg..i&docid=5PIb7OgoNdIj5M&w=668&h=324&q=driver%20images&ved=2ahUKEwja0bSC5-n4AhVi8lMKHW-vBXgQMygdegUIARClAg",
    screen:"DriveMyCar",
}

];

const NavOptions = () => {
  return (


    <FlatList
        data={data}
       keyExtractor={(item) => item.id}
       renderItem={({ item }) =>(
        <TouchableOpacity>
            <Text>{item.title}</Text>
        </TouchableOpacity>

       ) }
    />
  )
};

export default NavOptions

