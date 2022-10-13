dnTotal = 0;	//合計値
dnInput = "";	//入力している値
dnCalc = "+";	//合計と入力している値の四則演算子
dnFlg = 1;	//1回前に入力したもの 0の時は数字、1の時は四則演算子
 	
function Value(Data){	//数字を押した
dnFlg = 0;	//1回前に入力したものは数字
dnInput += Data;	//今入力している値に値を追加する
document.dnForm.Line.value = dnInput;//今入力している値を表示
}
function Calculate(Data){	//四則演算子を押した
  
    if (dnFlg==0){	//1回前に入力したものは数値かどうかの判別
    dnFlg = 1;	//1回前に入力したものは四則演算子
    dnWork = dnTotal + dnCalc + dnInput;//計算式の作成
    dnTotal = eval(dnWork);//計算式を計算させる
    dnInput = "";	//今入力している値をクリアする
    document.dnForm.Line.value = dnTotal;	//合計を表示
     } else { //最初に四則演算子を押したとき、または連続で四則演算子を押したときにエラーが出る。
      document.dnForm.Line.value = "エラー";//エラーメッセージの表示
    } 
   
    
  
    if (Data == "="){	//演算ボタンが=かどうかの判別
      if(dnTotal == Infinity) {
        document.dnForm.Line.value = "0では割れません"//合計値がInfinity(値を0で割った時の表示)のときエラーメッセージの表示
      }
    dnTotal = 0;	//合計をクリアする
    dbCalc = "+";	//四則演算子を+とする
    } else{	//演算ボタンが=以外
      dnCalc = Data;	//演算子を退避させる
      }
  }   
    function C(){	//クリアボタン(C)を押した
    dnTotal = 0;	//合計をクリアする
    dnCalc = "+";	//演算子をクリアする
    dnInput = "";	//今入力している値をクリアする
    document.dnForm.Line.value = dnTotal;	//値をクリアした後に0を表示する
    }
    

    