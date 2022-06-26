import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashCardStackCreateManyInput } from "../../../inputs/FlashCardStackCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFlashCardStackArgs {
  @TypeGraphQL.Field(_type => [FlashCardStackCreateManyInput], {
    nullable: false
  })
  data!: FlashCardStackCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
