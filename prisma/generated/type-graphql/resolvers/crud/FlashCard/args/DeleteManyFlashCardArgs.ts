import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardWhereInput } from "../../../inputs/FlashcardWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFlashcardArgs {
  @TypeGraphQL.Field(_type => FlashcardWhereInput, {
    nullable: true
  })
  where?: FlashcardWhereInput | undefined;
}
