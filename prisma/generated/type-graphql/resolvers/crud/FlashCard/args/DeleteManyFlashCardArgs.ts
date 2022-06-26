import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashCardWhereInput } from "../../../inputs/FlashCardWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFlashCardArgs {
  @TypeGraphQL.Field(_type => FlashCardWhereInput, {
    nullable: true
  })
  where?: FlashCardWhereInput | undefined;
}
