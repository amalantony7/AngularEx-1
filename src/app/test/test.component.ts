import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {
  public name = "Amal";
  public obje ={'Name' : 'Amal','Address' : 'djashdghasdgasjh','Place': 'Kochi','Phone':7736807593};
  public place = window.location.href;
  public arr =[1,2,3];
  public ob ={foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  myName = "";
  public myId=123;
  public link = "";
  public errorImg ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAqFBMVEX/////Ozvm6ur/PT3/Ojr/Kyv/NTXx8PD/+/v/KCj/GBjp7e308/Pn+Pj/hob/Nzf/fX38Vlb/9PT/Ly/pISH7YGDm8vL/gYHt1NT/4OD/mJj8V1fs6+v/7+//s7P/UlL/j4//z8//SUn/wMD1AAD/pqb/ra3xKyvxHBz/amr/nJz/2dn/5+f/AAD2Dw/oHBz/d3f/w8P0ior3bGzrCQntMzP/FBT8ZGSOskuDAAAKHklEQVR4nO2da5eaOhSGh0ngoJ0OKqgFiyhewEt1puM5/f//7CQ6Nx12SEICdK08n9pOXfjOQ65s4O7OYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAYJ3EFMGbhNfxHFDOJwPo16myRF1gWUJpteNJ2H8aDpL1edcBo9DZHvO56HP+N5ju+j4VM0DZv+ivIMwmkPeY7jeNgqBp9/inrT8G90OV9tkO1gKNynmNix081q3vQXFsINo4TYKQ33kZL87yQK/5oe6Pkp9Tnk3ar006fnpr86D+EK+Y5ovDeTPlq1veOJt4m4viuRyTZuOgSDMPJ9+XivIX0/aq3HdVI53yVjsm46ShHuIvU9Bfkonp8uWtevxmOsKt85Ix63qzm6K0+y/4TAjrdqkcZ9T3G+S8bevulgb0wtgemLAI61aDraGTey1Au8gK2oBWdqOFQyRAAR/WHjY+NuoucMfcOZ7JoNuHBUjhGFEZ1GG+Ma6TtD38CouRmOu+3oD0gidrZN9TeR7jP0DS9qJJ8bdWoKaFmdRkaN2gxSmrC4qs8gpbOqO+C0wkpeCjytN+Dcrjmghe1a9xt3SZ2N8IKX1Di7iRsISCPWtih2x34DAS3Lf6xrzNgy1ruOXTGGDc/ksVNTh7pjLJfs4WO1UaTzOIR/R9ivpSnGQ7gR2v347rFbIWD38S7uwxG9YR1N8RE+R/2EXiXryVvs9MjnBwnYzLHzqD/gHP7+1CDBlbbYvXQlLIsd7aMi4xy9GKRIWjwbpDAsen90n6cReGz7Y7iSs9j9GAziBLToa56Dh/CRk89XqiUsvhukMCzaWvem3DE0WtnXEw5xi93r4Ry26Ix1jvvPUNHBtUGKoMUrgxTQIsY6rxT3gW7G/jplFLPY/TohAy16fX0BF8AxvxqkCFj8YpAy6AMWbW37i4OX4lZYYJDCb7HAIAWy6LzoKr9ZFAf0UuiAnBYLDVIGaXGr0LZJDAz2zst34APumMdiF+wcvwMnjTfUE3AOtELnZfQP9JlxucXOGPrwPyMgoaVpR2MGHM5LRvcPwGfKLcIGH+5H0F6CM9MRMEyhNYXd/3Yva5Fh8P4bOAPHqY6JzRreurCHshaZBhlrYV/H1RpQoSVvUc6gRSWqD7hj7j7Zw+8SFlkGvzMMEjTsZ0Tsa70yFqUNEhzli6h4U7JFyrTYK7JYwSDpwDeqV8Lz0sv1TIsFO3AdcMul3CDdsVE9JG7LN4HFLHZ7FQwSfNV7p0n5lRgkYrHEIAKO8QFO1AaMucq6+C1WNUhPU7UNEVhW3NLhtMg2yLciUbzA2HLWBdkTHovMXnTCeeXD2aoMCK19v8JjUYVB1evgPUdH80q5RSUGaVejsjiTPWW7pjNhWkRMgxOBHTqlE7epyFVBtsVf4FRNyCA9jsraBWjxWwzTIrjsETSoeBlcNim9/e32YYsQxGDpVO0ab6MwYSp0aHqiMiwWQg2KXiBXuEYcgHcQAiBRi2eD5VO1K7CnbrgIxQug7KGIRWKQa6p2nRCr26yZi5fPCFmUMUjw1C2gFjIFQvwWpQzShOpmplOZG0a4LUoaJKsLdQPiWq4en8+irEEyIKrbUlxJ3nHAY1F8HPxIqG6ZD5cnlEUstShvUGnRQslOIitiH94Npzzcj2QNKt1RFJuWXkdkWqxiUOnEtEJCOoFjJBwJT9XalxD9Yu02bH9JDBMtSwhv3Z+pUObXkoTdkmJC+TK/liQsMUiRt6gwofRoAZSRXCFvUeFowbtbegtYRnKNrEWFO6aSszYegxRZiwpnbWupm9E52uAbUhaxwpn3VGZ9yGuQImfRU7d6epZIyNkG35Cx6Kgrw9yJt0MRgxQZi466Te9YOCHcBsGVhrhFlVcQRSePsMGHCgVityB1Ae8mYn0pq4xkJF0gdgueKEzYEzpNWQZH4yplflc4Yn0Zm7XIKo5ZCDT5j7XhL2TRVlnbBpWWFlFSjIfky/xuE6qsqNkj7r6mvBCoSrHmJ1Cq8hrwYMjb1fCUcsmV+d2C/yitZ//NuZ/IV8qlxKL/W2XAuynftjtvMZ54md8XUEftDfpxznNU/mI80TK/AnLFxYmIY/ItUspV2aKnckZDicrHC6FiPKEyvyJs1SW080NZQxQtxqtmEeWq60vjfsl4IVxOWc0inii/W/Y3uzeVKaesYBHZascKyo55msqVcpUUiLESHjQ8eyBj9KZMg4yLL3zFmgV4jvqAdytYonwxnqRFdNDxhIwQnLh1KpRTMi3CEzhfyw3d47xYovMH+gRPMR7T4p/ilTfK+bdiRZgvgYTQHZZ85ZSwRRe6wxItNT07IskKI5KEP4v+O285JWjxJ5AQZYrvRHhncSpMiL0fo4KI/GUkQFHKz9GP4opBdNJ1H/BgGBRL9AsiihQhFJYzkIB+scJgqO1VCotl8Td0vloUKuUqKhCjBoEdvqXG532mR6CzubUoWkbyxSJo0EJHDXdXvvOcYyCicxVRuBjv1iIJCLw9AuFc53Mx3CdgTLyOKFMIdGURDkjGwietzzQLl8UjxlVEuWK8TxZZAbOl5mcnz07QOvE9omwp17tFRkALn2Z6A97FSfGIYb13N/LFeK9lfnAnQ7uZvvbnmc3B8/QyaDxUKMajFh8YwwQ9R2t4AmYvhyMSi9+qFOPZE/J5hsEsV3m9CSJOjsCQQSLiH6wnIXBEHI5+YDAgPtbz+Mv5IQC/oZNWCkgjpvC1yuBQ01Nat6cM/BJgE+KF8ZD37KD0tlEG7tMJbIr6QNlJ71j/mRgda4+IsiOq8cUsu9oj0oC1viXheRmAHaqWgDhY1vzKsnUeePVFRF6Q1/6GhG2NFqnBurrRT8xqs0gNzuoPeOfOlvVEJAGXs2becEEs1tCjoqwZgxQ3WuqPSAIuG3wn0qpzDCydGZEVBHntL374zPS/o84ulXSix0PNr324ZZdqbIy0CaaNv2Q2TA5BpkUjwllw6jf+zi46auRBAC+n5MlIE2xolLhlmpMzVXGHg0jAPG+4CX6wf6Ea+Ss0y/MhKvClNe8/pO+w7JKMnqKMiMxigrzbpndYEvZP+VFNxnO+Y/7UIoEX3IV/CGivWi0joj1ocPDb9y5Zygqdgmrt8dz+ghNqdBbDIpwdzhktqZCI9p8k32HWgjEQZB+dPQaeaEh0bn7UX9SuFwF/JdxmhyMVSXod7qvcyKKtj8xB/W2b/b2zePFPNOR5NlcSk/z43LeQeCf/pR1vx+VgEM7Q4TVkhukZWBTz/M84e413QLNQW4mFFubboX/KgwtZRitj0CWWdf4T9i7ZCPnJH24bX0JIEIfrTZYf8mPwQUb59Pcj+Xm2WYdt710Y7NazTdo5nfI8P35EPR7J30+nTrr5vW74fb8qGOzDOck5Sf+l0+mcTtL/TSeb2Xoe7v+ulleOO4j3+308aOWMzGAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAzt539xiOQ7eXp0sQAAAABJRU5ErkJggg=="

  constructor() { }

  @Input() public parentClass;

  @Output() public childEvent = new EventEmitter();



  onDivClick(){
    console.log("Div is Clicked")
  }
  onClick(event){
    console.log("Saved",event);
  }
  onPress(){

    this.myName = "";
      
  }

  onType(){
    this.childEvent.emit("Hello World!");
  }

  public Date = new Date();


  ngOnInit() {
  }

}
