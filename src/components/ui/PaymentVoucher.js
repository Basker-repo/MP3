import React, { Component } from 'react'
import './Payment.css';
import jsPDF from 'jspdf';
import addicon from '../../asset/addicon.png';


export default class PaymentVoucher extends Component {
    constructor(props){
            super(props)
            this.state={
                data:[{note:"",amount:""}],
                reqname:'',
                confirmedBy:'',
                paymentMode:'',
                chequedate:'',
                chequeno:'',
                cheque:true,
                bank:false,
                bankname:'',
                approvedby:'',
                paymentreceived:'',
                posdata:'',
                amountdata:'',
                beneficeryname:''

            }
    }
    onAddRowPressed(){
        console.log('====================================');
        console.log("ddddddddd");
        console.log('====================================');
        var temp = this.state.data;
        temp.splice(temp.length-1,1);
        temp.push({note:"",amount:"",obj:temp.length})
        temp.push({note:"",amount:""})
        
        this.setState({data:temp})
    }
    onExportPresed(){

        // const pdf = new jsPDF();
        // jsPDF('p', 'pt', [ 595.28,  841.89])
        var pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAABQCAYAAABs4SuRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTBDQkJEOENDNzc0MTFFNkE0NDk5QUFGMkE3NzM0QzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTBDQkJEOERDNzc0MTFFNkE0NDk5QUFGMkE3NzM0QzkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MENCQkQ4QUM3NzQxMUU2QTQ0OTlBQUYyQTc3MzRDOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MENCQkQ4QkM3NzQxMUU2QTQ0OTlBQUYyQTc3MzRDOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PibvASsAABGVSURBVHja7F17kBzF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"
                        ,"png",0,10)
        pdf.setFontSize(22);
        pdf.text("Payment Request Vocher",65,40);
        pdf.setFontSize(14);

        pdf.text("Requested By:",12,60);
        pdf.text(this.state.reqname,62,60);
        pdf.text("Confirmed By:",12,70);
        pdf.text(this.state.confirmedBy,62,70);
        pdf.text("Payment Mode:",12,80);
        pdf.text(this.state.cheque ? "Cheque" : "Bank",62,80);
        pdf.text("Bank:",12,90);
        pdf.text(this.state.bankname,62,90);
        pdf.text("Cheque Date:",12,100);
        pdf.text(this.state.chequedate,62,100);


        pdf.text("POS:",135,60);
        pdf.text(this.state.posdata,135,60);
        pdf.text("Beneficery",135,70);
        pdf.text(this.state.beneficeryname,135,70);
        pdf.text("Amount/AED",135,80);
        pdf.text(this.state.amountdata,135,80);


        
        pdf.text("Purpose of Payment (Short Desc.)",65,140);

        // pdf.setFillColor("0.5");
        // pdf.setFillColor("0.5");
        // pdf.rect(10,150,200,5,"F");

        pdf.setFillColor("0.75");
        pdf.rect(10, 150, 180, 10, 'F');

        pdf.setTextColor(255,255,255);
        
        pdf.text("Notes",95,157);
        pdf.text("Amount",160,157);

        pdf.setFillColor("1");
        pdf.setTextColor("0.0");

        var x = 168;
        for(var i =0;i<this.state.data.length;i++){      
            pdf.text(this.state.data[i].note,12,x);
            pdf.text(this.state.data[i].amount,160,x);

            x  = x+10;
        }
        
        pdf.text("Payment Received:",12,pdf.internal.pageSize.getHeight()-10);
        pdf.text(this.state.paymentreceived,60,pdf.internal.pageSize.getHeight()-10);

        pdf.text("Approved By:",140,pdf.internal.pageSize.getHeight()-10);
        pdf.text(this.state.approvedby,170,pdf.internal.pageSize.getHeight()-10);


        pdf.save("download.pdf");
       
    }
    onNoteChanged(val,idx,event){

        val.note = "";
        val.note = event.target.value;
        // var temp = this.state.data[idx];
        // temp.note = event.target.value;
        console.log('====================================');
        console.log( event.target.value);
        console.log('====================================');
        this.setState({})
    }
    onAmountChanged(val,idx,event){
        val.amount = event.target.value;
        this.setState({})
    }
    render() {
        return (
            <div id="mainid" className="maindiv">
                <div className="mainheader">
                    Payment Request Vocher
                </div>
                <div className="topcontainer">
                    <div id="personcontainer" className="personcontainer">
                            <div id="test" className="rowdiv">
                                <div id="mine" className="labeldiv">
                                    Requested By:
                                </div>
                                <div>
                                    <input placeholder="Mr. XXXXXXX"
                                    className="inputtype"
                                    value={this.state.reqname}
                                    onChange={(event) => this.setState({reqname:event.target.value})}/>
                                </div>
                                
                            </div>
                            <div>
                            <div className="rowdiv">
                                <div className="labeldiv">
                                    Confirmed By:
                                </div>
                                <div>
                                    <input placeholder="Mr. XXXXXXX"
                                    className="inputtype"
                                    value={this.state.confirmedBy}
                                    onChange={(event) => this.setState({confirmedBy:event.target.value})}/>
                                </div>
                                
                            </div>
                            </div>
                            <div>
                            <div className="rowdiv">
                                <div className="labeldiv">
                                   Payment Mode:
                                </div>
                                <div className="radiodiv">
                                <input type="radio" name="gender" checked={this.state.cheque} onChange={(event) => this.setState({cheque:true,bank:false})}/> Cheque
                                </div>
                                <div>
                                <input type="radio" name="gender" checked={this.state.bank} onChange={(event) => this.setState({cheque:false,bank:true})}/> Bank Transfer
                                </div>
                                
                            </div>
                            </div>
                            <div>
                            <div className="rowdiv">
                                <div className="labeldiv">
                                    Bank:
                                </div>
                                <div>
                                    <input placeholder="ABCD Bank"
                                    className="inputtype" 
                                    value={this.state.bankname}
                                    onChange={(event) => this.setState({bankname:event.target.value})}/>
                                </div>
                                
                            </div>
                            </div>
                            <div className="rowdiv">
                                <div className="labeldiv">
                                    Cheque Date:
                                </div>
                                <div>
                                    <input placeholder="10/09/2019"
                                    type="date"
                                    className="inputtype"  
                                    value={this.state.chequedate}
                                    onChange={(event) => this.setState({chequedate:event.target.value})}/>
                                </div>
                                
                            </div>
                            <div className="rowdiv">
                                <div className="labeldiv">
                                    Cheque No:
                                </div>
                                <div>
                                    <input placeholder="xxxxx"
                                    type="text"
                                    className="inputtype" 
                                    value={this.state.chequeno}
                                    onChange={(event) => this.setState({chequeno:event.target.value})}/>
                                </div>
                                
                            </div>
                    </div>

                    <div className="personcontainer">
                            <div className="headerdiv">
                                <div className="headerlabel">
                                    POS
                                </div>
                                <div className="headerlabel">
                                    Beneficery
                                </div>
                                <div className="headerlabel">
                                    Amount/AED
                                </div>
                            </div>
                            <div className="headerdivdata">
                                <div className="headerlabeldata">
                                <input placeholder="1"
                    className="inputtypeheader"
                    value={this.state.posdata}
                    onChange={(event) => this.setState({posdata:event.target.value})}
                    />
                                </div>
                                <div className="headerlabeldata">
                                <input placeholder="ABCD"
                    className="inputtypeheader"
                    value={this.state.beneficeryname}
                    onChange={(event) => this.setState({beneficeryname:event.target.value})}
                    />
                                </div>
                                <div className="headerlabeldata">
                                <input placeholder="100000"
                    className="inputtypeheader"
                    value={this.state.amountdata}
                    onChange={(event) => this.setState({amountdata:event.target.value})}
                    />
                                </div>
                            </div>
                    </div>
                </div>
                <div className="maindivcontain">
                <div id="maincontainer" className="maincontainer">
                    <div className="mainlabel">
                        Purpose of Payment (Short Description)
                    </div>
                    <div className="mainrow">
                        <div className="rowone">
                            NOTES
                        </div>
                        <div className="rowtwo">
                            <div style={{display:"none"}}>
                            hii
                            </div>
                        </div>
                    </div>
                    
                    {this.state.data.map((val,idx)=>{
                        
                        return(
                           
                            val.obj === undefined
                            ?
                            <div key={idx} className="mainrowdata">
                                <div className="rowonedata" onClick={this.onAddRowPressed.bind(this)}>
                                <img src={addicon} style={{width:"30px",height:"30px",cursor:"pointer"}}/>
                                </div>
                                <div className="rowtwodata" onClick={this.onAddRowPressed.bind(this)}>
                                    <div>
                                    <img src={addicon} style={{width:"30px",height:"30px",cursor:"pointer"}}/>
                              
                                    </div>
                                </div>
                                 
                            </div>
                            :
                            <div key={idx} className="mainrowdata">
                            <div className="rowonedata">
                            <input placeholder="Notes 1..."
                                    className="inputtype"
                                    value={val.note}
                                    onChange={this.onNoteChanged.bind(this,val,idx)}/>
                                </div>
                                <div className="rowtwodata">
                                    <div>
                                    <input placeholder="125.00"
                                    className="inputtype"
                                    
                                    value={val.amount}
                                    onChange={this.onAmountChanged.bind(this,val,idx)}/>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                   
                </div>
            
                <div style={{marginTop:"13%",marginLeft:"5px",width:"10%"}}>
                     <div className="buttonexport" onClick={this.onExportPresed.bind(this)}>
                        EXPORT
                    </div>
                    </div>
                </div>
                <div className="maindivcontain">
                    <div>
                        Payment Received :
                    </div>
                    <input placeholder="125.00"
                    className="inputtypedata"
                    value={this.state.paymentreceived}
                    onChange={(event) => this.setState({paymentreceived:event.target.value})}
                    />


                    <div style={{marginLeft:"25%"}}>
                        Approved By:
                    </div>
                    <input placeholder="Mr. ABC"
                    className="inputtypedata"
                    
                    value={this.state.approvedby}
                    onChange={(event) => this.setState({approvedby:event.target.value})}/>
                  
                </div>
            </div>
        )
    }
}
