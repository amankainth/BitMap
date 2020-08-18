
function callHexFunction(bitMap01)
{
    var byte01 = ' ';
    var result = ' ';
    var outLen = 0;
    var bytecount = 0;

    var mResult = ' ';
    var nResult = ' ';

    var bitMap_box=document.getElementById('bitMap01');
    
    
    if(bitMap01 == ""){
        console.log('Empty');
        alert("Primary Bitmap is Empty");
        return;

    };

    var resetBefCall = resetFunction2(1);

    console.log('--------------------------------------');
   // document.getElementById('b1').style.visibility = 'hidden';
   // 1st 2 bytes ( 1 - 8 Bytes)
    var byte01 = bitMap01.substring(0, 2);
    console.log('bitMap01:' + bitMap01);
    console.log('byte01:' + byte01);
    var result = (parseInt(byte01, 16)).toString(2).substr(-8);
    console.log('result:' + result);
    var outLen = result.length;
    console.log('outLen:' + outLen);
    var mResult = formatResult(outLen, result);
    console.log('mResult:' + mResult);
    bytecount = 1 
    console.log('mResult: ' + mResult);
    var functionReturn = loopCall(mResult, bytecount);
   
    //--------------------------------------------------------------------------------------
    // 2nd 2 bytes ( 9 - 16 Bytes)
   
    var byte01 = bitMap01.substring(2, 4);
    console.log('Bitmap01-2nd bytes: ' + byte01);
    var result = (parseInt(byte01, 16)).toString(2).substr(-8);
    var outLen = result.length;
    var mResult = formatResult(outLen, result);
    bytecount = 9 
    var functionReturn = loopCall(mResult, bytecount);

    //--------------------------------------------------------------------------------------
    // 3nd 3 bytes ( 17 - 24 Bytes)
    console.log('Full Byte:' + bitMap01);
    var byte01 = bitMap01.substring(4, 6);
    console.log('Bitmap01-3rd bytes: ' + byte01);
    var result = (parseInt(byte01, 16)).toString(2).substr(-8);
    var outLen = result.length;
    var mResult = formatResult(outLen, result);
    bytecount = 17 
    var functionReturn = loopCall(mResult, bytecount);

    //--------------------------------------------------------------------------------------
    // 4th 4 bytes ( 25 - 32 Bytes)
    console.log('Full Byte:' + bitMap01);
    var byte01 = bitMap01.substring(6, 8);
    console.log('Bitmap01-3rd bytes: ' + byte01);
    var result = (parseInt(byte01, 16)).toString(2).substr(-8);
    var outLen = result.length;
    var mResult = formatResult(outLen, result);
    bytecount = 25 
    var functionReturn = loopCall(mResult, bytecount);

    //--------------------------------------------------------------------------------------
    // 5th 5 bytes ( 33 - 40 Bytes)
    console.log('Full Byte:' + bitMap01);
    var byte01 = bitMap01.substring(8, 10);
    console.log('Bitmap01-3rd bytes: ' + byte01);
    var result = (parseInt(byte01, 16)).toString(2).substr(-8);
    var outLen = result.length;
    var mResult = formatResult(outLen, result);
    bytecount = 33 
    var functionReturn = loopCall(mResult, bytecount);
    
    //--------------------------------------------------------------------------------------
    // 6th 6 bytes ( 41 - 48 Bytes)
    console.log('Full Byte:' + bitMap01);
    var byte01 = bitMap01.substring(10, 12);
    console.log('Bitmap01-3rd bytes: ' + byte01);
    var result = (parseInt(byte01, 16)).toString(2).substr(-8);
    var outLen = result.length;
    var mResult = formatResult(outLen, result);
    bytecount = 41 
    var functionReturn = loopCall(mResult, bytecount);
    
    //--------------------------------------------------------------------------------------
    // 7th 7 bytes ( 49 - 56 Bytes)
    console.log('Full Byte:' + bitMap01);
    var byte01 = bitMap01.substring(12, 14);
    console.log('Bitmap01-3rd bytes: ' + byte01);
    var result = (parseInt(byte01, 16)).toString(2).substr(-8);
    var outLen = result.length;
    var mResult = formatResult(outLen, result);
    bytecount = 49
    var functionReturn = loopCall(mResult, bytecount);

    //--------------------------------------------------------------------------------------
    // 8th  8 bytes ( 57 - 64 Bytes)
    console.log('Full Byte:' + bitMap01);
    var byte01 = bitMap01.substring(14, 16);
    console.log('Bitmap01-3rd bytes: ' + byte01);
    var result = (parseInt(byte01, 16)).toString(2).substr(-8);
    var outLen = result.length;
    var mResult = formatResult(outLen, result);
    bytecount = 57 
    var functionReturn = loopCall(mResult, bytecount);
 
}

function callHexFunctionSec(bitMap02)
{
    var byte01 = ' ';
    var result = ' ';
    var outLen = 0;
    var bytecount = 0;

    var mResult = ' ';
    var nResult = ' ';

    var bitMap_box=document.getElementById('bitMap02');
    
    
    if(bitMap02 == ""){
        console.log('Empty');
        alert("Secondary Bitmap is Empty");
        return;

    };
    var resetBefCall = resetFunction2(65);
    console.log('--------------------------------------');
   // document.getElementById('b1').style.visibility = 'hidden';
   // 1st 2 bytes ( 1 - 8 Bytes)
    var byte01 = bitMap02.substring(0, 2);
    console.log('bitMap01:' + bitMap02);
    console.log('byte01:' + byte01);
    var result = (parseInt(byte01, 16)).toString(2).substr(-8);
    console.log('result:' + result);
    var outLen = result.length;
    console.log('outLen:' + outLen);
    var mResult = formatResult(outLen, result);
    console.log('mResult:' + mResult);
    bytecount = 65 
    console.log('mResult: ' + mResult);
    var functionReturn = loopCall(mResult, bytecount);
   
    //--------------------------------------------------------------------------------------
    // 2nd 2 bytes ( 9 - 16 Bytes)
   
    var byte01 = bitMap02.substring(2, 4);
    console.log('Bitmap01-2nd bytes: ' + byte01);
    var result = (parseInt(byte01, 16)).toString(2).substr(-8);
    var outLen = result.length;
    var mResult = formatResult(outLen, result);
    bytecount = 73 
    var functionReturn = loopCall(mResult, bytecount);

    //--------------------------------------------------------------------------------------
    // 3nd 3 bytes ( 17 - 24 Bytes)
    console.log('Full Byte:' + bitMap01);
    var byte01 = bitMap02.substring(4, 6);
    console.log('Bitmap01-3rd bytes: ' + byte01);
    var result = (parseInt(byte01, 16)).toString(2).substr(-8);
    var outLen = result.length;
    var mResult = formatResult(outLen, result);
    bytecount = 81 
    var functionReturn = loopCall(mResult, bytecount);

    //--------------------------------------------------------------------------------------
    // 4th 4 bytes ( 25 - 32 Bytes)
    console.log('Full Byte:' + bitMap01);
    var byte01 = bitMap02.substring(6, 8);
    console.log('Bitmap01-3rd bytes: ' + byte01);
    var result = (parseInt(byte01, 16)).toString(2).substr(-8);
    var outLen = result.length;
    var mResult = formatResult(outLen, result);
    bytecount = 89 
    var functionReturn = loopCall(mResult, bytecount);

    //--------------------------------------------------------------------------------------
    // 5th 5 bytes ( 33 - 40 Bytes)
    console.log('Full Byte:' + bitMap01);
    var byte01 = bitMap02.substring(8, 10);
    console.log('Bitmap01-3rd bytes: ' + byte01);
    var result = (parseInt(byte01, 16)).toString(2).substr(-8);
    var outLen = result.length;
    var mResult = formatResult(outLen, result);
    bytecount = 97 
    var functionReturn = loopCall(mResult, bytecount);
    
    //--------------------------------------------------------------------------------------
    // 6th 6 bytes ( 41 - 48 Bytes)
    console.log('Full Byte:' + bitMap01);
    var byte01 = bitMap02.substring(10, 12);
    console.log('Bitmap01-3rd bytes: ' + byte01);
    var result = (parseInt(byte01, 16)).toString(2).substr(-8);
    var outLen = result.length;
    var mResult = formatResult(outLen, result);
    bytecount = 105 
    var functionReturn = loopCall(mResult, bytecount);
    
    //--------------------------------------------------------------------------------------
    // 7th 7 bytes ( 49 - 56 Bytes)
    console.log('Full Byte:' + bitMap01);
    var byte01 = bitMap02.substring(12, 14);
    console.log('Bitmap01-3rd bytes: ' + byte01);
    var result = (parseInt(byte01, 16)).toString(2).substr(-8);
    var outLen = result.length;
    var mResult = formatResult(outLen, result);
    bytecount = 113
    var functionReturn = loopCall(mResult, bytecount);

    //--------------------------------------------------------------------------------------
    // 8th  8 bytes ( 57 - 64 Bytes)
    console.log('Full Byte:' + bitMap01);
    var byte01 = bitMap02.substring(14, 16);
    console.log('Bitmap01-3rd bytes: ' + byte01);
    var result = (parseInt(byte01, 16)).toString(2).substr(-8);
    var outLen = result.length;
    var mResult = formatResult(outLen, result);
    bytecount = 121 
    var functionReturn = loopCall(mResult, bytecount);
 
}


function resetFunction()
{
    byteCount = 1;
    for (var i = 0; i < 64; i++) 
    {
        newid = 'b' + byteCount;
        console.log(newid);
        document.getElementById(newid).style.visibility = 'visible';
        byteCount++;
      }
    document.getElementById('bitMap01').value = '';
}

function resetFunctionSec()
{
    byteCount = 65;
    for (var i = 0; i < 64; i++) 
    {
        newid = 'b' + byteCount;
        console.log(newid);
        document.getElementById(newid).style.visibility = 'visible';
        byteCount++;
      }
    document.getElementById('bitMap02').value = '';
}

function MyFunction(num) 
{
    document.write("<h1>You gave "+num+"</h1>");
 }

 function formatResult(outLen , result){
    var nResult;
    console.log('In function outLen:' + outLen);
    if (outLen == 1)
    {
        nResult = "0000000" + result;
    }else{
        if (outLen == 2){
            nResult = "000000" + result;
        }else{
            if (outLen == 3){
                nResult = "00000" + result;  
            }else{
                if (outLen == 4){
                    nResult = "0000" + result; 
                }else{
                    if (outLen == 5){
                        nResult = "000" + result;
                    }else{
                        if (outLen == 6){
                            nResult = "00" + result;
                        }else{
                            if (outLen == 7){
                                nResult = "0" + result;
                            }else{
                                if (outLen == 8){
                                    nResult = result;

                                }
                            }
                        }
                    }

                }
            }
        }
    }
    console.log('In function result:' + nResult);
    return nResult;
 }

 function loopCall(mResult, bytecount){

    for (var i = 0; i < mResult.length; i++) 
    {
        var state = mResult.charAt(i);
        if (state == 1) 
        {   out = 'B' + bytecount + 'Bit is ON';
            newid = 'b' + bytecount;
            document.getElementById(newid).style.visibility = 'visible';
          } else 
          {
            out = 'B' + bytecount +     'Bit is Off';
            
          };
          console.log(out);
        bytecount++;
      }

 }

 function resetFunction2(countx)
{
    byteCount = countx;
    for (var i = 0; i < 64; i++) 
    {
        newid = 'b' + byteCount;
        console.log(newid);
        document.getElementById(newid).style.visibility = 'hidden';
        byteCount++;
      }
    
}

