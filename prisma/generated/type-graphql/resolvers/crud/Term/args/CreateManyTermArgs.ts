import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TermCreateManyInput } from "../../../inputs/TermCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTermArgs {
  @TypeGraphQL.Field(_type => [TermCreateManyInput], {
    nullable: false
  })
  data!: TermCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
