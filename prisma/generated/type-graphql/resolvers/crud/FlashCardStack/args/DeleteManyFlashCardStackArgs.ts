import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashCardStackWhereInput } from "../../../inputs/FlashCardStackWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFlashCardStackArgs {
  @TypeGraphQL.Field(_type => FlashCardStackWhereInput, {
    nullable: true
  })
  where?: FlashCardStackWhereInput | undefined;
}
