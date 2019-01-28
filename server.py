import logging
import json
import self as self
from flask import Flask,request,render_template     #flask 및 관련 패키지 import
app=Flask(__name__) #Flask 객체 app 할당
idx=0
@app.route("/",methods=['GET','POST'])

def index():

    chatLog=[idx,""]
    if request.method=='POST':
            chatLog[1]=request.form['chat']
            mylogger.info(chatLog)
    return render_template('client.html',chatLog=json.dumps(chatLog))

if __name__=='__main__':
    mylogger=logging.getLogger("새마을금고")
    mylogger.setLevel(logging.INFO)

    formatter=logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')

    stream_handler=logging.StreamHandler()
    stream_handler.setFormatter(formatter)
    mylogger.addHandler(stream_handler)

    mylogger.info("server start!!")

    idx+=1
    app.run(debug=True)