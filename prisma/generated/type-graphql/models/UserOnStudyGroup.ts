import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { StudyGroup } from "../models/StudyGroup";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("UserOnStudyGroup", {
  isAbstract: true
})
export class UserOnStudyGroup {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UserOnStudyGroupID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  SendTime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  AcceptedTime?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  RejectedTime?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  RemovedTime?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CanceledTime?: Date | null;

  FK_User?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserID?: number | null;

  FK_StudyGroup?: StudyGroup | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_StudyGroupID?: number | null;
}
