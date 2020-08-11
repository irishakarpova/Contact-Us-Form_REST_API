<h1>Contact form based on GraphQL APIs</h1>
<h2>React, Formik, GraphQL</h2>
<img src='ui.png' width="600" title="description">
<p>In this branch, let's integrate React UI with GraphQl, and send queries with Apollo Client.</p>
<p>First, let's install the packages We need</p>

```javaScript
npm install @apollo/client graphql

```

<p>create and connect to React client to which is we'll be sending a query</p>

```javaScript
const client = new ApolloClient({
	uri: 'http://localhost:6006/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
     <App />
  </ApolloProvider>,
  document.getElementById('root')
);

```

```javaScript
const GETCONTACT = gql`
  query GetContact( $email: String!, 
                    $name: String!,
                    $message: String!
                    ){ contact(contactInput: { 
                      email: $email, 
                      name: $name, 
                      message: $message,
    }){ success }}            
  `;
  
  ```
  
  <p>We're requesting data with useLazyQuery that returns an array</p>
  
  ```javaScript
  const [ contact, { called, loading, data, error } ] = useLazyQuery( GETCONTACT );
  
  ```
  
  <p>useLazyQuery returns an array, the first element in this is a function, which We can use to fetch the data.
  
 ```javaScript
   const handleOnSubmit = (values, actions) => {
    contact({
      variables: {
       email: values.email,
       name: values.name,
       message: values.message
      }
    });
    actions.setSubmitting(false);
    actions.resetForm();
  }
  
 ```
 
 <p>A second element is an object that contains called, loading, error, and data properties We can use to render errors and success messages.</p>
 
 ```javaScript
   return (
    <>
      {error && errorMsg }
      {data && successMsg }

      <div className="popup-msg">
       {(called && loading) && <Loader/>}
      </div>
      
      <div className={ (error || data) && !warningClosed ? "d-flex col-md-12 form-hided" 
                                                         : "d-flex col-md-12" }>
        <ContactForm handleOnSubmit = { handleOnSubmit } />               
      </div>
    </>
  )
  
  ```
  
 






