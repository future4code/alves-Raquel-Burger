const transformaDNARNA = (dna: string): string => {
    let rna: string = dna.replace(/A/g, "U");
    rna = rna.replace(/T/g, "A");
    rna = rna.replace(/G/g, "Y");
    rna = rna.replace(/C/g, "G");
    rna = rna.replace(/Y/g, "C");
    return rna
}
console.log(transformaDNARNA("ATT GCT GCG CAT TAA CGA CGC GTA"))