<h1>Contact form based on GraphQL APIs.</h1>
<h2>React, Formik, GraphQL</h2>
<img src='ui.png' width="350" title="description">
<p>In this branch, I integrate React UI with GraphQl,  send queries with Apollo Client.</p>
<p>First, l install the packages I need</p>

```javaScript
npm install @apollo/client graphql

```

<p>Create and connect to React client to which is I`m sending a query</p>

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
  
  <p>I start requesting data with useLazyQuery that returns an array</p>
  
  ```javaScript
  const [ contact, { called, loading, data, error } ] = useLazyQuery( GETCONTACT );
  
  ```
  
  <p>useLazyQuery returns an array, the first element in this is a function, which I can use to fetch the data.
  
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
 
 <p>A second element is an object that contains called, loading, error, and data properties I can use to render errors and success messages.</p>
 
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
  
 






