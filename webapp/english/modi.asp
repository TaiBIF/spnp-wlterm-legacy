<!--#include file="conn.asp"-->

<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=big5">
<meta name="GENERATOR" content="Microsoft FrontPage 5.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<title>穝呼4</title>
</head>
<%
name=request("username")
password=request("password")
modi=request("modi")
if ucase(name) <> "GLORIA" and  ucase(password)<>"GLORIA"  then
    response.write "盞絏岿粇"
    response.end 
end if
id=request("id")
if id="" or id="0" then id="1"
if id="12" then id="11"
sql="select * from station where id=" & id
rs.open sql,conn,1,1
%>
<body background="images/bg01.gif">
  <div align="center">
<form name="f1" action="modi2.asp">

  <p><b><font  size="3">э代戈</font></b><p><b><font size="2">
<a href="modi.asp?id=<%=id-1%>&name=<%=name%>&password=<%=password%>">&lt;掸&gt;</a>&#63736;
  <a href="modi.asp?id=<%=id+1%>&name=<%=name%>&password=<%=password%>">&lt;掸&gt;</a></font>&#63736; </b></font>
<% if modi="Y" then %>
<font size="2"> эЧΘ叫膥尿</font>
<%end if%>

    <table border="1" cellpadding="4" bgcolor="#F7F3FF">
      <tr>
        <td>代絪腹</td>
        <td><input type="text" name="id" size="20" value="<%=rs("id")%>"></td>
        <td>程┺蔼</td>
        <td><input type="text" value="<%=rs("Minimum_Elevation")%>" name="Minimum_Elevation" size="20"></td> 
      </tr>
      <tr>
        <td>絥</td>
        <td><input type="text" name="latitude" size="20" value="<%=rs("latitude")%>"></td>
        <td>程蔼┺蔼</td>
        <td><input type="text" value="<%=rs("Maximum_Elevation")%>" name="Maximum_Elevation" size="20"></td> 
      </tr>
      <tr>
        <td>竒</td>
        <td><input type="text" name="longitude" size="20" value="<%=rs("longitude")%>"></td>
        <td>程睱瞏</td>
        <td><input type="text" value="<%=rs("Minimum_Depth")%>" name="Minimum_Depth" size="20"></td> 
      </tr>
      <tr>
        <td>畒夹粇畉</td>
        <td><input type="text" name="Coordinate_Precision" size="20" value="<%=rs("Coordinate_Precision")%>"></td>
        <td>程瞏瞏</td>
        <td><input type="text" value="<%=rs("Maximum_Depth")%>" name="Maximum_Depth" size="20"></td> 
      </tr>
      <tr>
        <td>璣ゅ</td>
        <td><input type="text" name="Locality" size="20" value="<%=rs("Locality")%>"></td>
        <td>ぱ办</td>
        <td><input type="text" value="<%=rs("ぱ办")%>" name="ぱ办" size="20"></td> 
      </tr>
      <tr>
        <td>いゅ</td>
        <td><input type="text" name="Locality_chinese" size="20" value="<%=rs("Locality_chinese")%>"></td>
        <td>甮办</td>
        <td><input type="text" value="<%=rs("甮办")%>" name="甮办" size="20"></td> 
      </tr>
      <tr>
        <td>代磞瓃</td>
        <td colspan="3"><input type="text" name="Locality_describe" size="55" value="<%=rs("Locality_describe")%>" ></td>
      </tr>
      </table>
    <p><input type="submit" value="э" name="B1">&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" value="ぃэ" name="B1"></p>
  <input type="hidden" name="name" value="<%=name%>">
  <input type="hidden" name="password" value="<%=password%>">
  </form>
</div>

  

</body>

</html>