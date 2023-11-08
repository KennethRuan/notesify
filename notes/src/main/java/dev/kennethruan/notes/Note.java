package dev.kennethruan.notes;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="notes")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Note {
    @Id
    @JsonSerialize(using= ToStringSerializer.class)
    private ObjectId id;

    @NonNull
    @Getter @Setter private String title;

    @NonNull
    @Getter @Setter private String content;

}
