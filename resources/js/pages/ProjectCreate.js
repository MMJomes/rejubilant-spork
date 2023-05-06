1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Layout from "../components/Layout"
import Swal from 'sweetalert2'
 
function ProjecCreate() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('')
    const [isSaving, setIsSaving] = useState(false)
 
    const handleSave = () => {
        setIsSaving(true);
        axios.post('/api/projects', {
            name: name,
            description: description
          })
          .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Project saved successfully!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false);
            setName('')
            setDescription('')
          })
          .catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'An Error Occured!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false)
          });
    }
 
    return (
        <Layout>
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Create New Project</h2>
                <div className="card">
                    <div className="card-header">
                        <Link 
                            className="btn btn-outline-info float-right"
                            to="/">View All Projects
                        </Link>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input 
                                    onChange={(event)=>{setName(event.target.value)}}
                                    value={name}
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea 
                                    value={description}
                                    onChange={(event)=>{setDescription(event.target.value)}}
                                    className="form-control"
                                    id="description"
                                    rows="3"
                                    name="description"></textarea>
                            </div>
                            <button 
                                disabled={isSaving}
                                onClick={handleSave} 
                                type="button"
                                className="btn btn-outline-primary mt-3">
                                Save Project
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
} 
export default ProjecCreate;
