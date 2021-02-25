function match(candidate, job) {
    if (!candidate.minSalary || !job.maxSalary) 
    throw TypeError("Invalid Job or Candidate")
    return job.maxSalary >= candidate.minSalary * .9;
  }