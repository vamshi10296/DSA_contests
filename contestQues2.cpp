 #include<iostream>
using namespace std;

int main() {
    int t;
    cin >> t;
    
    while(t--){
        int n,m;
        cin>>n>>m;
        
        string s1, s2;
        
        cin>> s1 >> s2 ;
        
        string ans;
        
        int i = 0;
         while(i<s1.size() && i<s2.size()){
             if(s1[i] != s2[i]){
             break;
             }
             else{
             ans = ans + s1[i];
             i++;
             }
         }
         
         cout<<ans<<endl;
        
        
        
    }
    return 0;
 

}
