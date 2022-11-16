function fibonacciGenerator (n) {
        var ar=[0,1];
        if(n===1)
        {
            return [0];
        }
        else if(n===2)
        {
            return [0,1];
        }
        else
        {
            for (var a=2;a<n;a++)
            {
                ar[a]=ar[a-2]+ar[a-1];
            }
            return ar;
        }
        
}  