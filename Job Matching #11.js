function match(candidate, job) {
    if(!candidate.minSalary||!job.maxSalary)throw new Error("")
      return candidate.minSalary-candidate.minSalary*0.1<=job.maxSalary   
  }