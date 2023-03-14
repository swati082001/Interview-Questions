//creating an array.

let arr = new Array(2).fill(5);

console.log(arr); //output is [5,5];


//creating a 2d-array.

let arr1=new Array(2);

for(let i=0;i<arr1.length;i++)
{
    arr1[i]=new Array(2);
}

let h=0;
for (let i=0;i<2;i++)
{
    for(let j=0;j<2;j++)
    {
arr1[i][j]=h++;
    }
}


for (let i=0;i<arr1.length;i++)
{
    let ans="";
    for(let j=0;j<arr1.length;j++)
    {
ans+=arr1[i][j]+" ";
    }
    console.log(ans);
}
