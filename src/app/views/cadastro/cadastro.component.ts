import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public cadastroForm !: FormGroup;
  
  
  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      cpf:['',Validators.required],
      phone:['',Validators.required],
      aniv:['',Validators.required],
      password:['',Validators.required]
    })
  }

  signUp(){
    this.http.post(`${environment.apibaseURL}api/Client`,this.cadastroForm.value)
    .subscribe(res=>{
      alert("Cadastrado com Sucesso");
      this.cadastroForm.reset();
      this.router.navigate(['/login']);
    })
  }
  

}