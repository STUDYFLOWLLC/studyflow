import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowViewCreateManyInput } from "../../../inputs/FlowViewCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFlowViewArgs {
  @TypeGraphQL.Field(_type => [FlowViewCreateManyInput], {
    nullable: false
  })
  data!: FlowViewCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
