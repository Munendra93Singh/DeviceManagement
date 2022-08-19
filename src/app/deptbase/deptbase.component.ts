import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AzureAllService } from '../home/azure-all.service';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-deptbase',
  templateUrl: './deptbase.component.html',
  styleUrls: ['./deptbase.component.css']
})


export class DeptbaseComponent implements OnInit {
  collection = [];
  public AzureRecordsOfdata: any[] = [];
  public filteredAzureDeptRecordsOfdata: any[] = [];
  public searchTerm = '';
  config: any;
  dateInputForm!: any
  todayDate: any;
  pipe = new DatePipe('en-US');
  currentDate:any = new Date(); 
 //--Date range ---/

  constructor(private Azure: AzureAllService, 
    private datePipe: DatePipe, private formBuilder: FormBuilder,
     ) { }

  ngOnInit(): void {
  


    this.today();
    this.dateInputForm = this.formBuilder.group({
      requiredDate:[this.todayDate]
    });
    this.Azure.getAllDataOfDept().subscribe((data: any) => {
      data.forEach((x: any) => this.arrayConcatination(x));
      this.filteredAzureDeptRecordsOfdata = this.AzureRecordsOfdata;
      this.paginationSettings();
    });
  }


  private arrayConcatination(array: any[]) {
    this.AzureRecordsOfdata = this.AzureRecordsOfdata.concat(array)
  }
  //---Paginator Start----//
  public pageChanged(event: any) {
    this.config.currentPage = event
  }
  private paginationSettings() {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
    };
  }
  //--------Searching Of Department--------//
  Onsearch() {
    this.filteredAzureDeptRecordsOfdata = this.AzureRecordsOfdata.filter(x => x.dept.toLocaleLowerCase().includes(
      this.searchTerm.toLocaleLowerCase()));
    this.config.currentPage = 1
  }

  today() {
    let todaydate = new Date();
    this.todayDate = this.datePipe.transform(todaydate, 'yyyy-MM-dd');
    debugger
  }
  
  sortDate() {
     debugger
     console.log(this.dateInputForm.value.requiredDate)
    this.filteredAzureDeptRecordsOfdata = this.AzureRecordsOfdata.filter((x: any) => this.pipe.transform(x.timegenerated, 'dd/MM/YYYY') == this.pipe.transform(this.dateInputForm.value.requiredDate, 'dd/MM/YYYY'));
  }
  key :string='dept';
   reverse:boolean = true;
   sort(key: string){
   this.key = key;
   this.reverse = !this.reverse;
  }
}
