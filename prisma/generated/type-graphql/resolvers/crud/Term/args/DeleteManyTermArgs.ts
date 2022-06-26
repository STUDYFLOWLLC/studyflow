import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TermWhereInput } from "../../../inputs/TermWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTermArgs {
  @TypeGraphQL.Field(_type => TermWhereInput, {
    nullable: true
  })
  where?: TermWhereInput | undefined;
}
