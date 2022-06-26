import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashCardCreateManyInput } from "../../../inputs/FlashCardCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFlashCardArgs {
  @TypeGraphQL.Field(_type => [FlashCardCreateManyInput], {
    nullable: false
  })
  data!: FlashCardCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
