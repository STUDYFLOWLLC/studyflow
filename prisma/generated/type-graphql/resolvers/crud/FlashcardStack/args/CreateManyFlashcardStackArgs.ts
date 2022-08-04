import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardStackCreateManyInput } from "../../../inputs/FlashcardStackCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFlashcardStackArgs {
  @TypeGraphQL.Field(_type => [FlashcardStackCreateManyInput], {
    nullable: false
  })
  data!: FlashcardStackCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
