import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardCreateManyInput } from "../../../inputs/FlashcardCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFlashcardArgs {
  @TypeGraphQL.Field(_type => [FlashcardCreateManyInput], {
    nullable: false
  })
  data!: FlashcardCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
