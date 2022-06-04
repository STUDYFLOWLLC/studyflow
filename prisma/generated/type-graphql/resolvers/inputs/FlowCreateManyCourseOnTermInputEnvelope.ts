import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateManyCourseOnTermInput } from "../inputs/FlowCreateManyCourseOnTermInput";

@TypeGraphQL.InputType("FlowCreateManyCourseOnTermInputEnvelope", {
  isAbstract: true
})
export class FlowCreateManyCourseOnTermInputEnvelope {
  @TypeGraphQL.Field(_type => [FlowCreateManyCourseOnTermInput], {
    nullable: false
  })
  data!: FlowCreateManyCourseOnTermInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
