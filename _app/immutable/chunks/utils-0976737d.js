const n=(...t)=>t.filter(Boolean).join(" ").trim(),e=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"numeric"});function a(t){return e.format(new Date(t))}export{n as c,a as f};
