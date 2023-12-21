const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const superagent = require('superagent');

const readFilePro = file => {
    return new Promise((resolve,rejects) => {
        fs.readFile(file , (err, data) => {
            if(err) rejects('I could not find that file!');
            resolve(data); 
        });
    })
}

const writeFilePro = (file, data) => {
    return new Promise((resolve,reject) => {
        fs.writeFile(file, data , err => {
            if(err) reject('I could not find that file!');
            resolve('success!'); 
        }); 
    });
}

const getDogPic = async () => {
    try
    {
        const data = await readFilePro(`${__dirname}/starter/dog.txt`);
        console.log(`Breed: ${data}`);

        const res1Pro = superagent.get(`https://dog.ceo/api/breeds/${data}/image/random`);
        console.log(res.body.message);
        
        const res2Pro = superagent.get(`https://dog.ceo/api/breeds/${data}/image/random`);
        console.log(res.body.message);

        const res3Pro = superagent.get(`https://dog.ceo/api/breeds/${data}/image/random`);
        console.log(res.body.message);

        const all = await Promise.all([res1Pro,res2Pro,res3Pro]);
        console.log(all);    

        const imgs = all.map(el => el.body.message);
        console.log(imgs);

        await writeFilePro('./starter/dog-img.txt', imgs.join('\n'));
        console.log('Random dog image saved to file!');
    }catch(err)
    {
        throw err;
    }    
}

/* getDogPic().catch(err => {
    console.log('ERROR!');
}); */

(async () => {
   try
   {
      await getDogPic();
   }catch (err) {
      console.log('ERROR!');
   }
})();

/* readFilePro(`${__dirname}/starter/dog.txt`)
    .then(data => {
        console.log(`Breed: ${data}`);
        return superagent
        .get(`https://dog.ceo/api/breeds/${data}/image/random`)
    })
    .then(res => {
        console.log(res.body.message);

        return writeFilePro('./starter/dog-img.txt', res.body.message);

         fs.writeFile('./starter/dog-img.txt' , res.body.message , err => {
            if(err) console.log(err.message);
            console.log('Random dog image saved to file.');    
        }); 
    })
    .then(() => {
        console.log('Random dog image save to file!')
    })
    .catch(err => {
        console.log(err.message);
    });
 */



