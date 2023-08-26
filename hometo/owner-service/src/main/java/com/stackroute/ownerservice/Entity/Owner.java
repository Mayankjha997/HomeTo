package com.stackroute.ownerservice.Entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@Document(collection = "owners")
public class Owner {
    @Id
private String _id;
private String ownerfirstname;
private String ownersecondname;
private String mobile;
private String owneraddress;

}
