import React, { Component } from 'react'
import './EmailPage.css';
import addicon from '../../asset/addicon.png';
import emailjs from 'emailjs-com';
import RichTextEditor from 'react-rte';
const ENTER_KEY = 13;
const COMMA_KEY = 188;
const BACKSPACE_KEY = 8;

var GlobalHashtag=[];
const templateParams = {
    from_name: '',
    to_name: '',
    subject: '',
    message_html:'',
};

export default class EmailPage extends Component {

    constructor(props) {
        super(props);
        
        this.state = { content: '',
        value:RichTextEditor.createEmptyValue(),
        tags:[],
        tagesvalue:'',
        to_name:'',
        message_html:'',
        subject:'',
        from_name:''

    };
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.HandleHastag = this.HandleHastag.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
      }


      HandleHastag(e) {
            this.setState({to_name:e.target.value})
      }
      onChange = (value) => {
        this.setState({value});
        if (this.props.onChange) {
          // Send the changes up to the parent component as an HTML string.
          // This is here to demonstrate using `.toString()` but in a real app it
          // would be better to avoid generating a string on each change.
          this.props.onChange(
            value.toString('html')
          );
        }
      };
      
      
      onSendMailPressed(){
         if(this.state.tags.length > 0){
            this.state.tags.map((val,idx) =>{
                templateParams.from_name = val;
                templateParams.to_name = "fname.lname-testid@gradeonegroup.com";
                templateParams.subject = this.state.subject;
                templateParams.message_html = this.state.value.toString('html');

                emailjs.send('gmail','template_BkLoQuKC', templateParams, 'user_VLR3v8Zx3GwZY2URtmOKf')
                .then((response) => {
                   console.log('SUCCESS!', response.status, response.text);
                }, (err) => {
                   console.log('FAILED...', err);
                });
            })  
    }
        //   server.send({
        //     text:    "i hope this works", 
        //     from:    "fname.lname-testid@gradeonegroup.com", 
        //     to:      "selvan.anbu01@gmail.com",
        //     subject: "testing emailjs"
        //  }, function(err, message) { console.log(err || message); });
      }

      onKeyPressed(e){
        const key = e.keyCode;
        if (key === ENTER_KEY || key === COMMA_KEY) {
            var temp = this.state.tags;
            temp.push(e.target.value);
            this.setState({tags:temp,to_name:''})

        }
        else if(key === 8 && this.state.to_name.length === 0){
            var temp = this.state.tags;
            temp.pop();
            this.setState({tags:temp,to_name:''})
        }
      }
       
       handleKeyUp(e) {
        const key = e.keyCode;
      
        if (key === ENTER_KEY || key === COMMA_KEY) {
          this.addTag();
          GlobalHashtag.push(this.state.tagesvalue)
          console.log(GlobalHashtag) 
         }
      }
      onFileChoosen(e){
          console.log('====================================');
          console.log(e.target.files);
          console.log('====================================');
      }
      
      handleKeyDown(e) {
        const key = e.keyCode;
        if (key === BACKSPACE_KEY && !this.state.tagesvalue) {
          this.editPrevTag();
        }
      }
      addTag() {
        const { tags, tagesvalue } = this.state;
        let tag = tagesvalue.trim();
      
        tag = tag.replace(/,/g, "");
      
        if (!tag) {
          return;
        }
      
        this.setState({
          tags: [...tags, tag],
          tagesvalue: ""
        });
      }
      onDeletePressed(index){
          var temp = this.state.tags;
          temp.splice(index,1);
          this.setState({tags:temp})
      }
      
      editPrevTag() {
        let { tags } = this.state;
      
        const tag = tags.pop();
      
        this.setState({ tags, tagesvalue: tag });
      }
      
    handleEditorChange(content, editor) {
        this.setState({ content });
      }
    render() {
        const { tags, tagesvalue } = this.state;
        return (
            <div style={{width:"90%",minHeight:"100%",textAlign:"center",margin:"30px",borderColor:"grey"
            ,borderWidth:2,borderStyle:"solid"}}>
                <div style={{display:"flex",width:"100%",minHeight:"35px",flexDirection:"row",borderBottomWidth:1,borderBottomColor:"grey",borderBottomStyle:"solid"}}>
                    <div style={{width:"8%",minHeight:"30px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        To:
                    </div>
                    <div style={{display:"flex",alignItems:"center",minHeight:"30px",width:"60%",borderWidth:0,flexDirection:"row"}}>
                    
                    {this.state.tags !== undefined && this.state.tags.length >0
                    ?
                    this.state.tags.map((val,idx) => {
                        return(
                            <div key={idx} style={{display:"flex",flexDirection:"row",borderRadius:12,backgroundColor:"grey",marginLeft:"5px",marginRight:"5px",paddingLeft:"5px",paddingRight:"5px"}}>
                                <div style={{height:"20px",margin:"2px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                                {val}
                                </div>
                                <div style={{width:"10px",height:"20px",margin:"2px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}
                                onClick={this.onDeletePressed.bind(this,idx)}>
                                    <img src={addicon} style={{width:"8px",height:"8px"}}/>
                                </div>
                            </div>
                        )
                    })
                    :
                    <div/>
                }
                    <input

                        type="text"
                        placeholder="Email Address"
                        value={this.state.to_name}
                        onChange={this.HandleHastag.bind(this)}
                        onKeyDown={this.onKeyPressed.bind(this)}
                        ref="tag"
                        className="tag-input"
                        style={{width:"100%",minHeight:"30px",WebkitAppearance:"none",border:0,backgroundColor:"#f3f3f3"}}
                    />   
                    </div>
                </div>

                <div style={{display:"flex",width:"100%",minHeight:"15%",flexDirection:"row",borderBottomWidth:1,borderBottomColor:"grey",borderBottomStyle:"solid"}}>
                    <div style={{width:"8%",minHeight:"30px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        Subject
                    </div>
                    <div style={{display:"flex",alignItems:"center",minHeight:"30px",width:"60%",borderWidth:0,flexDirection:"row"}}>
                    <input

                        type="text"
                        value={this.state.subject}
                        onChange={(e) => this.setState({subject:e.target.value})}
                        ref="tag"
                        className="tag-input"
                        style={{width:"100%",minHeight:"28px",WebkitAppearance:"none",border:0,backgroundColor:"#f3f3f3"}}
                    />   
                    </div>
                </div>
                <div style={{display:"flex",width:"100%",minHeight:"15%",flexDirection:"row",borderBottomWidth:1,borderBottomColor:"grey",borderBottomStyle:"solid"}}>
                    <div style={{display:"flex",alignItems:"center",minHeight:"300px",width:"100%",backgroundColor:"#f3f3f3",borderWidth:0,flexDirection:"row"}}>
                        
                    <RichTextEditor
        value={this.state.value}
        onChange={this.onChange}
        backgroundColor={"#f3f3f3"}
  className="new-post-editor"
      />  
                    </div>
                </div>
                <div style={{display:"flex",width:"100%",minHeight:"40%",flexDirection:"row",borderBottomWidth:1,borderBottomColor:"grey",borderBottomStyle:"solid"}}>
                    <div style={{width:"8%",marginLeft:"2%",marginTop:"5px",marginRight:"60%",marginBottom:"5px",minHeight:"100%",borderStyle:"solid",borderWidth:1,borderColor:"grey",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}} onClick={() => {document.getElementById("fileupload").click()}}>
                        <input
                        id="fileupload"
                        type="file"
                        onChange={this.onFileChoosen.bind(this)}
                        />
                        Attach
                    </div>
                    <div style={{width:"8%",marginLeft:"2%",marginTop:"5px",marginBottom:"5px",minHeight:"100%",borderStyle:"solid",borderWidth:1,borderColor:"grey"
                        ,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}} onClick={this.onSendMailPressed.bind(this)}>
                        Send
                    </div>
                    <div style={{width:"8%",marginLeft:"2%",marginTop:"5px",marginBottom:"5px",minHeight:"100%",borderStyle:"solid",borderWidth:1,borderColor:"grey"
                        ,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center"}}>
                        Discard
                    </div>
                </div>
            {/* <div style={{marginTop:'0em'}} className="tags">
             
          <ul>
            {tags.map((tag, i) => (
              <li key={tag + i} className="tag">
                {tag}
              </li>
            ))}
          </ul>
          <div style={{display:"flex",flexDirection:"row"}}>
            <div style={{height:"40px",textAlign:"center"}}>
                To
            </div>
          <input
            type="text"
            placeholder="Add Hashtag..."
            value={tagesvalue}px
            onChange={this.HandleHastag}
            ref="tag"
            className="tag-input"
            style={{height:'40px',width:"100%"}}
          /> 
        </div>
        </div>
            <Editor
            style={{whiteSpace: 'pre-wrap'}}
     apiKey='1gyc3mgdna08ifrrfcilghur6lx9l2wroh7cizjo31ffgp2u'
      init={{
        height: 500,
        menubar: false,
        preformatted:true,
        cleanup:true,
        entity_encoding : "raw",
        plugins: "preview",
        verify_html:false,
        forced_root_block : false,
        mode: "textareas",
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'undo redo | formatselect |fontselect| bold italic backcolor | paste| \
          alignleft aligncenter alignright alignjustify |underline| \
          bullist numlist outdent indent | removeformat | help'
      }
}
     //  onChange={this.SetNewsBodyText}
      id="ckeExample"
      ref={f1 => (this._text_1 = f1)}
      name="content"
      selector='textarea'
     //  value={this.state.NewsBodyText}
     // onEditorChange={this.NewsBodyText}
     value={this.state.content}
      onEditorChange={this.handleEditorChange}

    /> */}
   </div>
        )
    }
}
