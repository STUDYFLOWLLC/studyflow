import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardStackWhereInput } from "../../../inputs/FlashcardStackWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFlashcardStackArgs {
  @TypeGraphQL.Field(_type => FlashcardStackWhereInput, {
    nullable: true
  })
  where?: FlashcardStackWhereInput | undefined;
}
