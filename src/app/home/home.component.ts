import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AzureAllService } from '../home/azure-all.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  collection = [];
  public AzureRecordsOfdata: any[] = [];
  public filteredAzureRecordsOfdata: any[] = [];
  public gotData = false;
  config: any;
  dateInputForm!: any
  public searchTerm = '';
  currentDate:any = new Date(); 
  todayDate: any;
  
   
  constructor(
    private Azure: AzureAllService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder
    ) { }
  //Date-Picker---//
  getLocalDate(date: Date): Date {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0));
  }


  ngOnInit(): void {
    this.today();
    this.dateInputForm = this.formBuilder.group({
      datePicker:[this.todayDate]
    });
    this.Azure.getAllData().subscribe((data: any) => {
      data.forEach((x: any) => this.arrayConcatination(x));
      this.filteredAzureRecordsOfdata = this.AzureRecordsOfdata;
      
      for (let i = 0; i < this.filteredAzureRecordsOfdata.length; i++) {
        console.log(this.filteredAzureRecordsOfdata[i].timegenerated);
        let display = new Date(this.filteredAzureRecordsOfdata[i].timegenerated);
        let month = display.getMonth();
        let year = display.getFullYear();
        let date = display.getDate();
        this.filteredAzureRecordsOfdata[i].timegenerated = this.getLocalDate(new Date(year, month, date));

        
      }
      console.log(this.filteredAzureRecordsOfdata);
      this.gotData = true;


      this.paginationSettings()
    })
  }


  private arrayConcatination(array: any[]) {
    this.AzureRecordsOfdata = this.AzureRecordsOfdata.concat(array)
  }

  public pageChanged(event: any) {
    this.config.currentPage = event
  }

  private paginationSettings() {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
    };
  }
//*-----Searching data in Texbox-----*//
  public search() {
    this.filteredAzureRecordsOfdata = this.AzureRecordsOfdata.filter(x => x.dept.toLocaleLowerCase().includes(
      this.searchTerm.toLocaleLowerCase()) ||
      x.deviceName.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase()));
    this.config.currentPage = 1
  }

  public Onchange() {
    this.filteredAzureRecordsOfdata = this.AzureRecordsOfdata.filter((x: any) => this.datePipe.transform(x.timegenerated, 'yyyy-MM-dd') == this.datePipe.transform(this.dateInputForm.value.datePicker, 'yyyy-MM-dd'))
  }

  today() {
    let todaydate = new Date();
    this.todayDate = this.datePipe.transform(todaydate, 'yyyy-MM-dd');

  }

  //*---Sorting----*//
   key :string='dept';
   reverse:boolean = true;
   sort(key: string){
   this.key = key;
   this.reverse = !this.reverse;
  }
}
